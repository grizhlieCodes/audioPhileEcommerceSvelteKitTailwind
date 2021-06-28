<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';
	import ProductCatCards from '$lib/navigation/ProductCatCards.svelte';
	import Hero from '$lib/homePage/Hero.svelte';
	import ProductCards from '$lib/homePage/ProductCards.svelte'
	

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

</style>

<!-- HOMEPAGE -->

<!-- HERO -->

<svelte:head>
	<title>Audiophile - Home</title>
</svelte:head>

<main>

	<Hero />

	<section class="mt-[4rem] mb-[12rem] md:my-[9.6rem] lb-mt-[12rem] lg:mb-[16.8rem] ">
		<ProductCatCards />
	</section>

	<ProductCards />

</main>


