<script>
    import Button from '$lib/ui/Button.svelte'
	import { getContext } from 'svelte';

	let size = getContext('size');
</script>

<style>
	/* your styles go here */
</style>

<section
	class="mb-[12rem] md:mb-[9.6rem] xl:mb-[20rem] mx-auto w-full max-w-[111rem] px-[2.4rem] md:px-[4rem] xl:px-0 flex
	gap-y-[2.4rem] md:gap-y-[3.2rem] lg:gap-y-[4.8rem] md:gap-x-[1.1rem] lg:gap-x-[3rem] flex-wrap">
	<article
		class="w-full h-[60rem] md:h-[72rem] lg:h-[56rem] bg-darkOrange rounded-[8px] flex flex-col
		justify-start items-center px-[2.3rem] py-[5.5rem] lg:py-[0] text-center relative
		overflow-hidden lg:grid lg:grid-cols-2 lg:text-left">
		<div
			class="img-container w-[17.5rem] mb-[3.2rem] z-10 lg:-mb-6 lg:justify-self-end lg:self-end
			lg:w-[38rem] ">
			<img src="/images/home/{$size}/image-speaker-zx9.png" alt="speaker-zx9" />
		</div>
		<div class="text-container z-10 lg:justify-self-center">
			<h1
				class="mb-[2.4rem] text-[3.6rem] leading-[4rem] tracking-[1.29px] font-bold uppercase
				text-white md:text-[5.6rem] md:tracking-[2px] md:leading-[5.8rem] ">
				zx9
				<br />
				speaker
			</h1>
			<p
				class="mb-[2.4rem] font-extralight text-[1.5rem] leading-[2.5rem] text-white opacity-75
				lg:mb-[4rem] ">
				Upgrade to premium speakers that are
				<br />
				phenomenally built to deliver truly
				<br />
				remarkable sound.
			</p>
			<Button content="see product" btnType="homepage" link="/product/zx9-speakers" />
		</div>
		<div
			class="span-container absolute grid place-items-center -top-40 md:-top-96 select-none lg:top-0
			lg:-left-48 ">
			<div
				class=" w-[55.8rem] h-[55.8rem] md:w-[94.4rem] md:h-[94.4rem] rounded-full border opacity-30
				col-start-1 col-end-1 row-start-1 row-end-1" />
			<div
				class=" w-[32rem] h-[32rem] md:w-[54.2rem] md:h-[54.2rem] rounded-full border opacity-30
				col-start-1 col-end-1 row-start-1 row-end-1" />
			<div
				class=" w-[27.9rem] h-[27.9rem] md:w-[47.2rem] md:h-[47.2rem] rounded-full border opacity-30
				col-start-1 col-end-1 row-start-1 row-end-1" />
		</div>
	</article>
	<article
		class=" zx7-speaker w-full h-[32rem] bg-darkOrange rounded-[8px] relative overflow-hidden flex">
		<div
			class="text-container h-full flex flex-col gap-y-[3.2rem] m-auto w-full justify-center
			md:items-start mTab:px-[4.2rem] xl:px-[9.5rem] z-10">
			<h2 class=" text-[2.8rem] tracking-[2px] font-bold uppercase">zx7 speaker</h2>
			<Button content="see product" btnType="secondary" link="/product/zx7-speakers"/>
		</div>
		<div class="img-container h-full w-full absolute left-0 top-0">
			<img
				src="/images/home/{$size}/image-speaker-zx7.jpg"
				alt="speaker-zx7"
				class="object-cover h-full w-full object-center z-0" />
		</div>
	</article>
	<article
		class="w-full md:w-auto h-[20rem] md:h-[32rem] bg-darkOrange rounded-[8px] md:flex-1
		overflow-hidden">
		<div class="img-container h-full w-full">
			<img
				src="/images/home/{$size}/image-earphones-yx1.jpg"
				alt="earphones-yx1"
				class="object-cover object-center w-full h-full" />
		</div>
	</article>
	<article
		class="w-full md:w-auto h-[20rem] md:h-[32rem] bg-lightGray rounded-[8px] md:flex-1 flex
		justify-start items-center">

		<div
			class="text-container h-auto flex flex-col gap-y-[3.2rem] m-auto w-full items-center
			md:items-start mTab:px-[4.2rem] xl:px-[9.5rem] ">
			<h2 class=" text-[2.8rem] tracking-[2px] font-bold ">YX1 EARPHONES</h2>
			<Button content="see product" btnType="secondary" link="/product/yx1-wireless-earphones"/>
		</div>
	</article>
</section>
