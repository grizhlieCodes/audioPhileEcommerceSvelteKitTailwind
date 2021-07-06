<script>
	import { slide } from 'svelte/transition';
	import userStore from './userStore.js';
	import productsStore from '$lib/products/cartStore.js';
    import Button from '$lib/UI/Button.svelte'
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();

	let grandTotal = 50;

	$: $productsStore.forEach((item) => {
		let quantity = item.unitsSelected;
		let price = item.price;
		let itemTotal = quantity * price;
		grandTotal = grandTotal + itemTotal;
	});
</script>

<style>
	.order-confirmation {
		grid-area: confirmation;
	}
</style>

<div
	class="order-confirmation w-full h-full bg-white p-[2.4rem] rounded-[8px] flex flex-col
	items-start gap-y-[3.1rem] max-w-[60rem] sm:px-[11.5rem]">
	<h2 class=" text-[1.8rem] font-bold tracking-[1.29px] text-black uppercase w-full text-center ">confirm order</h2>
	<div id="items-list" class="top w-full min-h-52 flex flex-col flex-1">
		{#each $productsStore as product, i}
			<div class=" flex items-center gap-x-[1.6rem]" transition:slide={{ duration: 150 }}>
				<img
					src="/images/product-{product.slug}/mobile/image-product.jpg"
					alt={product.slug}
					class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] " />
				<div class=" flex-1 flex flex-col ">
					<h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black uppercase">
						{product.shortName}
					</h4>
					<h4 class=" text-[1.4rem] leading-[2.5rem] font-bold text-black opacity-50 ">
						$ {product.price.toLocaleString()}
					</h4>
				</div>
				<p class=" text-[1.5rem] leading-[2.5rem] font-bold opacity-50 text-black ">
					x{product.unitsSelected}
				</p>
			</div>
		{/each}
	</div>
	<div class=" flex flex-row w-full justify-between items-start gap-[8px] md:justify-center">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-light flex-1 ">grand total</h3>
		<h3 class=" text-[1.8rem] text-darkOrange font-bold">$ {grandTotal.toLocaleString()}</h3>
	</div>
    <div class="text-container">
        <h2 class=" text-[1.5rem] md:text-[1.8rem] leading-[2.5rem] text-black opacity-50 font-bold mb-[0.8rem] ">
            To be delivered to {$userStore.name} 
        </h2>
        <p class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 text-left "> {$userStore.address} </p>
        <p class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 text-left "> {$userStore.city} </p>
        <p class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 text-left "> {$userStore.zip} </p>
        <p class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 text-left "> {$userStore.country} </p>
    </div>
    <div class="buttons flex flex-col gap-y-[1.5rem] justify-between items-center w-full sm:flex-row ">
        <Button btnType="grey" content="save for later" on:click={() => dispatch('saveForLater')}  link="/" />
        <Button btnType="primary" content="place order" on:click={() => dispatch('placeOrder')} />
    </div>
</div>
