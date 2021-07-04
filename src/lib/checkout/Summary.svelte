<script>
	import CartStore from '$lib/products/cartStore.js';
	import { fly} from 'svelte/transition';

	let name = 'XX99 MK II';

	$: cartLength = $CartStore.length ;

    let runningTotal = 0;
	$: if (cartLength === 0) {
		runningTotal = 0;
	} else {
        runningTotal = 0
        $CartStore.forEach((item) => {
            let price = item.price;
            let quantity = item.unitsSelected;
            let totalPriceOfItem = price * quantity;
            runningTotal = runningTotal + totalPriceOfItem;
        });
	}


    $: total = runningTotal
	let delivery = 50
	$: vat = total * 0.2
	$: grandTotal = total + delivery

	$: cartEmpty = cartLength === 0 ? true : false ;

	// $: console.log(`
	// 	cartLength: ${cartLength}	
	// 	runningTotal: ${runningTotal}	
	// 	vat: ${vat}	
	// 	cartEmpty: ${cartEmpty}	
	// `)

</script>

<div
	transition:fly={{ x: 150, duration: 250 }}
	class=" w-full bg-white z-50 rounded-[0.8rem]
	md:right-[2.4rem] px-[2.8rem] py-[3.2rem] ">

	<div class="w-full flex justify-between mb-[3.2rem]">
		<h3 class=" text-[1.8rem] tracking-[1.29px] font-bold uppercase">summary</h3>

	</div>

	{#if cartEmpty}
		<h3 class=" text-[1.8rem] font-bold my-[6rem] text-center ">No items added yet 🛒😊🎁</h3>
	{:else}

		<div class=" flex flex-col gap-y-[2.4rem] mb-[3.2rem] ">
			{#each $CartStore as product, i}
				<div class=" flex items-center gap-x-[1.6rem]">
					<img
						src="/images/product-{product.slug}/mobile/image-product.jpg"
						alt={product.slug}
						class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] " />
					<div class=" flex-1 flex flex-col ">
						<h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black uppercase ">{product.shortName}</h4>
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
	{/if}

	<div class=" flex justify-between items-center mb-[0.8rem] ">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-light ">total</h3>
		<h3 class=" text-[1.8rem] text-black font-bold">$ {total.toLocaleString()}</h3>
	</div>
	<div class=" flex justify-between items-center mb-[0.8rem] ">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-light ">shipping</h3>
		<h3 class=" text-[1.8rem] text-black font-bold">${delivery}</h3>
	</div>
	<div class=" flex justify-between items-center mb-[2.4rem] ">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-light ">VAT (included)</h3>
		<h3 class=" text-[1.8rem] text-black font-bold">$ {vat.toLocaleString()}</h3>
	</div>

	<div class=" flex justify-between items-center ">
		<h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-light ">grand total</h3>
		<h3 class=" text-[1.8rem] text-darkOrange font-bold">$ {grandTotal.toLocaleString()}</h3>
	</div>


</div>
