<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';

	let size = getContext('size');

	let btnTest = {
		content: 'Testing',
		btnType: 'homepage'
	};

	let menuOpened = false;
	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};
</script>

<style>
	span {
		transform-origin: 4px 1.2px;
	}
</style>

<!-- <Button {...btnTest}/> -->

<header class="h-[9rem] bg-black flex justify-center items-center px-[3.2rem] py-[2.4rem]">
	<div class="inner-container h-full w-full max-w-[111rem] flex items-center justify-between">
		<div
			class="menu w-[1.6rem] h-full flex flex-col justify-center items-center gap-y-[3px]
			cursor-pointer group"
			on:click={toggleMenu}>
			<span
				class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange 
                    {menuOpened ? ' rotate-45 group-hover:translate-x-0' : ''} transform group-hover:translate-x-1" />
			<span
				class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange 
                    {menuOpened ? 'hidden' : ''} " />
			<span
				class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange 
                    {menuOpened ? ' -rotate-45 group-hover:translate-x-0' : ''} transform group-hover:-translate-x-1" />
		</div>
		<div class="logo">
			<img src="/static/images/shared/desktop/logo.svg" alt="" />
		</div>

		<div class="cursor-pointer transition-all transform hover:rotate-12">
			<img src="/static/images/shared/desktop/icon-cart.svg" alt="" />
		</div>
	</div>
</header>

<!-- HOMEPAGE -->
<!-- TODO:

    MOBILE FIRST.
    Keep the data structure in mind whilst creating and compare if it will work
    or not.

    1. Create Header component
    2. Be slow and see what can be a component (anything reusable)
    3. Created Homepage-Hero component. 
        3.1 Overlal it will be a single component with a button comp
    4. Create ProdCategoryLink component
        4.1 Keep in mind to create it as a container of 3. 
    5. Create 'main' for Homepage. It's essentially links to single categories
       of products
    6. Create pre-footer-banner
    7. Creater footer 


-->
