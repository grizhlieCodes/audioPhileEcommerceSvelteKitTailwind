<script>
	import Button from '$lib/ui/Button.svelte';
	import { fly, fade, slide } from 'svelte/transition';
	import { onDestroy, createEventDispatcher } from 'svelte';
	import CartStore from '$lib/products/cartStore.js';
	import Cart from '$lib/products/Cart.svelte';

    const dispatch = createEventDispatcher();

	let showAll = false;

	$: eachData = showAll ? [...$CartStore] : [...$CartStore.slice(0, 1)];

	$: otherItemsCount = $CartStore.length - 1;

    let grandTotal = 50

    $: $CartStore.forEach(item => {
        let quantity = item.unitsSelected
        let price = item.price
        let itemTotal = quantity * price
        grandTotal = grandTotal + itemTotal;
    })

    onDestroy(() => {
        CartStore.deleteAllItems()
        dispatch('closeOrderConfirmation')
    })
</script>

<div class=" absolute inset-0 bg-black z-40 opacity-40 " transition:fade={{ duration: 250 }} />

<div transition:fly={{x:100, duration: 250}}
	class="modal fixed w-full max-w-[90%] bg-white z-50 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4
	md:max-w-[54rem] p-[3.2rem] md:p-[4.8rem] flex flex-col rounded-[0.8rem]">
	<svg
		width="64"
		height="64"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="mb-[2.3rem]">
		<circle cx="32" cy="32" r="32" fill="#D87D4A" />
		<path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4" />
	</svg>
	<h2
		class=" mb-[1.6rem] text-[2.4rem] md:text-[3.2rem] leading-[2.8rem] tracking-[0.86px] font-black
		uppercase">
		Thank you
		<br />
		for your order
	</h2>
	<p class=" mb-[2.4rem] text-[1.5rem] leading-[2.5rem] font-light opacity-50 ">
		You will receive an email confirmation shortly.
	</p>
	<div class="items mb-[2.3rem] rounded-[0.8rem] overflow-hidden flex flex-col md:flex-row">
		<div class="top w-full min-h-52 bg-lightGray p-[2.4rem] flex flex-col flex-1">
			{#each eachData as product, i}
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
			<div class=" w-full h-[1px] bg-[#C4C4C4] " />
			{#if otherItemsCount >= 1}
				<button
					class=" w-full text-[1.2rem] text-black opacity-50 h-[4rem] font-bold"
					on:click={() => (showAll = !showAll)}>

					{#if showAll}
						View Less
					{:else}
						View {otherItemsCount} other {otherItemsCount > 1 ? 'items' : 'item'}
						<!-- else content here -->
					{/if}

				</button>
			{/if}
		</div>
		<div class="bottom w-full min-h-24 bg-black p-[2.4rem] md:w-auto min-w-[19.8rem]">
            <div class=" flex flex-col justify-between items-start gap-[8px] md:justify-center">
                <h3 class=" text-[1.5rem] text-white opacity-50 uppercase font-light ">grand total</h3>
                <h3 class=" text-[1.8rem] text-white font-bold">$ {grandTotal.toLocaleString()}</h3>
            </div>
        </div>
	</div>
	<Button btnType="fullWidthPrimary" content="back to home" link="/" />

</div>
