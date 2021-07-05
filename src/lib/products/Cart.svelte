<script>
	import UnitsCounter from '$lib/UI/UnitsCounter.svelte';
	import Button from '$lib/UI/Button.svelte';
	import { fly, fade, slide } from 'svelte/transition';
	import CartStore from '$lib/products/cartStore.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let name = 'XX99 MK II';

	let cartLength = $CartStore.length;

	let runningTotal = 0;
	$: if (cartLength === 0) {
		runningTotal = 0;
	} else {
		runningTotal = 0;
		$CartStore.forEach((item) => {
			let price = item.price;
			let quantity = item.unitsSelected;
			let totalPriceOfItem = price * quantity;
			runningTotal = runningTotal + totalPriceOfItem;
		});
	}

	$: total = runningTotal;

	$: cartEmpty = cartLength === 0 ? true : false;

	const deleteAllItems = () => {
		total = 0;
		CartStore.deleteAllItems();
		dispatch('toggleCart');
	};

	let tempQuantity;

	const updateCartItem = (slug, isIncrement, currentUnits) => {
		tempQuantity = currentUnits;
		if (isIncrement) {
			tempQuantity++;
		} else {
			tempQuantity--;
		}
		CartStore.addNewItemOrUpdateExisting(slug, tempQuantity);
		tempQuantity = 0;
	};

	let showAddItemMessage = false;

	function checkout() {
		if (cartEmpty) {
			showAddItemMessage = true;
		} else {
			showAddItemMessage = false;
			dispatch('toggleCart');
		}
	}
</script>

<style>
	#remove-all {
		text-decoration-color: #808080;
	}

	#remove-all:hover {
		text-decoration-color: #d87d4a;
	}
</style>

<div
	class=" fixed inset-0 bg-black z-40 opacity-40 "
	transition:fade={{ duration: 250 }}
	on:click={() => dispatch('toggleCart')} />

<div
	transition:fly={{ x: 150, duration: 250 }}
	class=" w-[32.7rem] md:w-[37.7rem] absolute min-h-[48.8rem] bg-white z-50 rounded-[0.8rem]
	px-[2.8rem] py-[3.2rem] top-[11.4rem] right-[50%] transform translate-x-2/4 
	md:translate-x-0 md:right-0
	">

	<div class="w-full flex justify-between mb-[3.2rem]">
		<h3 class=" text-[1.8rem] tracking-[1.29px] font-bold ">CART ({$CartStore.length})</h3>
		<p
			on:click={deleteAllItems}
			id="remove-all"
			class="text-[1.5rem] tracking-0 leading-[2.5rem] font-normal underline opacity-50
			hover:text-darkOrange cursor-pointer ">
			Remove all
		</p>
	</div>

	{#if cartEmpty}
		<h3 class=" text-[1.8rem] font-bold my-[6rem] text-center ">No items added yet 🛒😊🎁</h3>

		{#if showAddItemMessage}
			<h3 in:slide={{ duration: 250 }} class=" text-[1.8rem] font-bold my-[6rem] text-center ">
				Please add an item to checkout!
			</h3>
		{/if}
	{:else}
		<!-- else content here -->

		<div class=" flex flex-col gap-y-[2.4rem] mb-[3.2rem] ">
			{#each $CartStore as product, i}
				<div class=" flex items-center gap-x-[1.6rem]">
					<img
						src="/images/product-{product.slug}/mobile/image-product.jpg"
						alt={product.slug}
						class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] " />
					<div class=" flex-1 flex flex-col ">
						<h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black ">{name}</h4>
						<h4 class=" text-[1.4rem] leading-[2.5rem] font-bold text-black opacity-50 ">
							$ {product.price.toLocaleString()}
						</h4>
					</div>
					<UnitsCounter
						type="small"
						on:decrementUnits={() => updateCartItem(product.slug, false, product.unitsSelected)}
						on:incrementUnits={() => updateCartItem(product.slug, true, product.unitsSelected)}
						value={product.unitsSelected} />
				</div>
			{/each}
		</div>
	{/if}

	<div class=" flex justify-between items-center mb-[2.4rem] ">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-extralight ">total</h3>
		<h3 class=" text-[1.8rem] text-black font-bold">$ {total.toLocaleString()}</h3>
	</div>

	<Button
		content="checkout"
		on:click={checkout}
		btnType="fullWidthPrimary"
		link="/checkout"
		isDisabled={cartEmpty} />

</div>
