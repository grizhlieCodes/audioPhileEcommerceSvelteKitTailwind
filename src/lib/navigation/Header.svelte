<script>
	import { getContext } from 'svelte';
	import ProductCatCards from '$lib/navigation/ProductCatCards.svelte';
	import { fade } from 'svelte/transition';

	let size = getContext('size');

	let menuOpened = false;

	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};

	let desktopLinks = [
		{
			name: 'home',
			link: '/'
		},
		{
			name: 'headphones',
			link: '/product-category/headphones'
		},
		{
			name: 'speakers',
			link: '/product-category/speakers'
		},
		{
			name: 'earphones',
			link: '/product-category/earphones'
		}
	];

	$: if ($size === 'desktop') menuOpened = false;
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
		background: #d87d4a;
	}

	a.desktop-link:hover {
		transform: translateY(0.25rem);
	}

	a.desktop-link:hover::after {
		opacity: 1;
		transform: translateX(0);
	}
</style>

<header class="h-[9rem] bg-[#191919] flex justify-center items-center z-20">
	<div class="inner-container h-full w-full sm:max-w-[90%] xl:max-w-[111rem] flex items-center justify-between border-b border-white px-[3.2rem] py-[2.4rem] lg:px-0 lg:py-0 border-opacity-20">

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
			<img src="/images/shared/desktop/logo.svg" alt="audiophile logo" />
		</a>

		{#if $size === 'desktop'}
			<div class="flex gap-x-[3.2rem] flex-1">
				{#each desktopLinks as { name, link }}
					<a
						href={link}
						class="desktop-link text-white uppercase text-[1.3rem] font-bold hover:text-darkOrange
						tracking-[2px] relative transition-all">
						{name}
					</a>
				{/each}
			</div>
		{/if}

		<div class="cursor-pointer transition-all transform hover:rotate-12">
			<img src="/images/shared/desktop/icon-cart.svg" alt="shopping cart icon" />
		</div>

	</div>
</header>

{#if $size !== 'desktop'}
	{#if menuOpened}

		<div
			class="mobile-menu-container fixed top-[9rem] w-full left-0 h-auto z-30 bg-white
			rounded-br-[8px] rounded-bl-[8px] px-[2.4rem] py-[3.5rem]"
			transition:fade={{ duration: 150 }}>
			<ProductCatCards on:click={toggleMenu}/>
		</div>

		<div
			class="z-5 fixed top-[9rem] left-0 w-full h-full bg-black opacity-30 z-20"
			on:click={toggleMenu}
			transition:fade={{ duration: 150 }} />

	{/if}
{/if}

