<script>
	import { getContext } from 'svelte';

	let size = getContext('size');
</script>

<style>
	/* your styles go here */
</style>

<section class="bottom-about w-full p-[2.4rem] flex flex-col items-center lg:flex-row-reverse lg:justify-between max-w-[111rem] mx-auto md:px-[4rem] xl:px-0 mb-[12rem]">

	<div class="img-container w-full h-[32.7rem] mb-[3.6rem] rounded-[0.8rem] overflow-hidden lg:h-[58.8rem] lg:w-[54rem] lg:flex-initial">
		<img
			src="/images/shared/{$size}/image-best-gear.jpg"
			alt="man adjusting headphones"
			class=" w-full h-full object-cover " />
	</div>

	<div class="text-container lg:max-w-[44.5rem] lg:flex-initial flex flex-col items-center text-center lg:text-left">
		<h2 class=" text-[2.8rem] tracking-[1px] text-black font-bold uppercase mb-[3.6rem] px-[2rem] 
					md:text-[4rem] md:leading-[4.4rem] md:tracking-[1.43px] max-w-[57.3rem] lg:px-0 ">
			bringing you the
			<p class=" text-darkOrange inline-block ">best</p> audio gear
		</h2>
	
		<p class=" text-[1.5rem] leading-[2.5rem] text-black font-extralight max-w-[45rem] ">
			Located at the heart of New York City, Audiophile is the premier store for high end headphones,
			earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
			rooms available for you to browse and experience a wide range of our products. Stop by our store
			to meet some of the fantastic people who make Audiophile the best place to buy your portable
			audio equipment.
		</p>

	</div>
</section>
