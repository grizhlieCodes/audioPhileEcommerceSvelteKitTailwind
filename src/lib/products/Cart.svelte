<script>

    import UnitsCounter from '$lib/ui/UnitsCounter.svelte'
    import Button from '$lib/UI/Button.svelte'
    import {fly, fade} from 'svelte/transition'


	let productTypeQuantity = 0;
    let name = "XX99 MK II"
    let price = 2999
    let value = 1
    let total = 2999 * 3

    let cartEmpty = false

</script>

<style>
	#remove-all {
		text-decoration-color: #808080;
	}

    #remove-all:hover {
        text-decoration-color: #D87D4A;
    }
</style>

<div class=" absolute inset-0 bg-black z-40 opacity-40 " transition:fade={{duration: 250}} />

<div transition:fly={{x:150, duration: 250 }}
	class=" w-[32.7rem] md:w-[37.7rem] absolute h-[48.8rem] bg-white z-50 rounded-[0.8rem]
	top-[2.4rem] left-2/4 transform translate-x-[-50%] md:right-[2.4rem] px-[2.8rem] py-[3.2rem] ">

	<div class="w-full flex justify-between mb-[3.2rem]">
		<h3 class=" text-[1.8rem] tracking-[1.29px] font-bold ">CART ({productTypeQuantity})</h3>
		<p
			id="remove-all"
			class="text-[1.5rem] tracking-0 leading-[2.5rem] font-normal underline opacity-50 
                   hover:text-darkOrange cursor-pointer     ">
			Remove all
		</p>
	</div>

    {#if cartEmpty}
        <h3 class=" text-[1.8rem] font-bold my-[6rem] text-center ">No items added yet 🛒😊🎁</h3>
    {:else}
         <!-- else content here -->
         
             <div class=" flex flex-col gap-y-[2.4rem] mb-[3.2rem] ">
         
                 <div class=" flex items-center gap-x-[1.6rem]">
                     <img src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt=""
                     class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] ">
                     <div class=" flex-1 flex flex-col ">
                         <h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black ">{name}</h4>
                         <h4 class=" text-[1.4rem] leading-[2.5rem] font-bold text-black opacity-50 ">$ {price.toLocaleString()}</h4>
                     </div>
                     <UnitsCounter type="small" on:decrementUnits on:incrementUnits {value} />
                 </div>
                 <div class=" flex items-center gap-x-[1.6rem]">
                     <img src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt=""
                     class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] ">
                     <div class=" flex-1 flex flex-col ">
                         <h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black ">{name}</h4>
                         <h4 class=" text-[1.4rem] leading-[2.5rem] font-bold text-black opacity-50 ">$ {price.toLocaleString()}</h4>
                     </div>
                     <UnitsCounter type="small" on:decrementUnits on:incrementUnits {value} />
                 </div>
                 <div class=" flex items-center gap-x-[1.6rem]">
                     <img src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt=""
                     class=" w-[6.4rem] h-[6.4rem] rounded-[0.8rem] ">
                     <div class=" flex-1 flex flex-col ">
                         <h4 class=" text-[1.5rem] leading-[2.5rem] font-bold text-black ">{name}</h4>
                         <h4 class=" text-[1.4rem] leading-[2.5rem] font-bold text-black opacity-50 ">$ {price.toLocaleString()}</h4>
                     </div>
                     <UnitsCounter type="small" on:decrementUnits on:incrementUnits {value} />
                 </div>
         
             </div>
    {/if}

    <div class=" flex justify-between items-center  mb-[2.4rem] ">
        <h3 class=" text-[1.5rem] text-black opacity-50 uppercase font-extralight ">total</h3>
        <h3 class=" text-[1.8rem]  text-black font-bold">$ {total.toLocaleString()}</h3>
    </div>

    <Button content="checkout" on:click btnType="fullWidthPrimary" />

</div>
