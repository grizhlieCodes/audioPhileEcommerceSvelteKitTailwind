<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';

	let size = getContext('size');

	let btnTest = {
		content: 'Testing',
		btnType: 'minimal'
	};

	let menuOpened = false;
	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};
</script>

<style>
	#homepage-hero-section {
		display: grid;
		grid: 'textAndImage' 1fr / 1fr;
	}

	.textContainer,
	.img-container {
		grid-area: textAndImage;
	}
</style>

<!-- HOMEPAGE -->

<!-- HERO -->

<section id="homepage-hero-section" class="w-full h-[51rem] md:h-[72.9rem] bg-[#191919]">

	<div class="img-container w-full max-w-[37.5rem] md:max-w-[76.8rem] m-auto">
		<img src="/static/images/home/{$size}/image-header.jpg" alt="" class=""/>
	</div>

	<div class="textContainer flex justify-center items-center flex-col text-center">
		<h4 class="mb-[1.6rem] text-[1.4rem] tracking-[1rem] text-white opacity-50 font-normal">
			NEW PRODUCT
		</h4>
		<h1
			class="mb-[2.4rem] uppercase text-[3.6rem] leading-[4rem] tracking-[1.29px] text-white
			font-bold ">
			XX99 Mark II Headphones
		</h1>
		<p class="mb-[2.8rem] text-[1.5rem] leading-[2.5rem] font-extralight text-white opacity-75 ">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<Button btnType="primary" content="See product" />
	</div>

</section>

<!-- TODO:

    MOBILE FIRST.
    Keep the data structure in mind whilst creating and compare if it will work
    or not.

    3. Created Homepage-Hero component. 
        3.1 Overlal it will be a single component with a button comp
    4. Create ProdCategoryLink component
        4.1 Keep in mind to create it as a container of 3. 
    5. Create 'main' for Homepage. It's essentially links to single categories
       of products
    6. Create pre-footer-banner
    7. Creater footer 


-->

<!-- 

	class="btn-primary-homepage"


	class="btn-primary-large" 
 -->
