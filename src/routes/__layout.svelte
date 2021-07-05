<script>
	import Header from '$lib/navigation/Header.svelte';
	import { writable } from 'svelte/store';
	import { setContext, onMount } from 'svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Cart from '$lib/products/Cart.svelte';
	import CartStore from '$lib/products/cartStore.js';

	let width;
	let size = writable('');
	setContext('size', size);

	let currentTitle;

	$: if (width >= 1024) {
		size.set('desktop');
	} else if (width >= 768) {
		size.set('tablet');
	} else {
		size.set('mobile');
	}

	onMount(() => {
		CartStore.setStoreFromLocalStorage();
		currentTitle = document.title;
	});
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(:root) {
		font-family: 'manrope', sans-serif;
		font-size: 62.5%;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>

<svelte:window bind:innerWidth={width} />

<Header />

<main class=" relative transition-all">

	<slot />

</main>
<Footer {currentTitle} />
