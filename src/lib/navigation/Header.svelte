<script>
	import { getContext } from 'svelte';
	import ProductCatCards from '$lib/navigation/ProductCatCards.svelte'

	let size = getContext('size');

	let menuOpened = false;
	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};
</script>
<style>
	span {
		transform-origin: 4px 1.2px;
	}



	a.desktop-link {
		position: relative;
	}

	a.desktop-link::after {
		content: '';
		position: absolute;
		transition: all 150ms ease;
		bottom: -5px;
		right: 0;
		opacity: 0;
		transform: translateY(3rem);
		width: 100%;
		height: 3px;
		background: #D87D4A;
	}

	a.desktop-link:hover{
		transform: translateY(0.25rem);
	}

	a.desktop-link:hover::after{
		opacity: 1;
		transform: translateX(0);
	}

</style>

<header class="h-[9rem] bg-black flex justify-center items-center px-[3.2rem] py-[2.4rem]">
	<div class="inner-container h-full w-full max-w-[111rem] flex items-center justify-between">

		{#if $size !== 'desktop'}
			<div
				class="w-[1.6rem] h-full flex flex-col justify-center items-center gap-y-[3px]
				cursor-pointer group"
				on:click={toggleMenu}>
				<span
					class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange
					transform {menuOpened ? ' rotate-45 ' : 'group-hover:translate-x-1'}
					" />
				<span
					class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange {menuOpened ? 'hidden' : ''}
					" />
				<span
					class="h-[3px] w-full bg-white text-white transition-all group-hover:bg-lightOrange
					transform {menuOpened ? ' -rotate-45 ' : 'group-hover:-translate-x-1'}
					" />
			</div>
		{/if}

		<a href="/" class="logo {$size === 'desktop' ? 'mr-[19.2rem]' : ''}">
			<img src="/static/images/shared/desktop/logo.svg" alt="audiophile logo" />
		</a>

		{#if $size === 'desktop'}
			<div class="flex gap-x-[3.2rem] flex-1">
				<a
					href="/"
					class="desktop-link text-white uppercase text-[1.3rem] font-bold hover:text-darkOrange
					tracking-[2px] relative transition-all">
					Home
				</a>
				<a
					href="/headphones"
					class="desktop-link text-white uppercase text-[1.3rem] font-bold hover:text-darkOrange
					tracking-[2px] relative transition-all">
					Headphones
				</a>
				<a
					href="/speakers"
					class="desktop-link text-white uppercase text-[1.3rem] font-bold hover:text-darkOrange
					tracking-[2px] relative transition-all">
					Speakers
				</a>
				<a
					href="/earphones"
					class="desktop-link text-white uppercase text-[1.3rem] font-bold hover:text-darkOrange
					tracking-[2px] relative transition-all">
					Earphones
				</a>
			</div>
		{/if}

		<div class="cursor-pointer transition-all transform hover:rotate-12">
			<img src="/static/images/shared/desktop/icon-cart.svg" alt="shopping cart icon" />
		</div>
	</div>
</header>

{#if $size !== 'desktop'}
	 <div class="mobile-menu-container fixed top-[9rem] w-full left-0 h-auto">
		 {#if menuOpened}
			  <ProductCatCards />
		 {/if}
	 </div>
{/if}

