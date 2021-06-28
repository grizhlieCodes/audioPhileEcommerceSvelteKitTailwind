<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	let size = getContext('size');

	let cards = [
		{
			name: 'headphones',
			width: {
				mobile: 14.5,
				desktop: 21.5
			},
			translateY: {
				mobile: 5.2,
				desktop: 7.6
			}
		},
		{
			name: 'speakers',
			width: {
				mobile: 14.5,
				desktop: 22
			},
			translateY: {
				mobile: 4.5,
				desktop: 7.2
			}
		},
		{
			name: 'earphones',
			width: {
				mobile: 18,
				desktop: 22
			},
			translateY: {
				mobile: 5.2,
				desktop: 6.2
			}
		}
	];

	let translateYArray = [];

	for (let i = 0; i < cards.length; i++) {
		translateYArray = [
			...translateYArray,
			{
				mobile: cards[i].translateY.mobile + 3,
				desktop: cards[i].translateY.desktop + 3
			}
		];
	}
</script>

<style>
	.img-container img {
		max-width: none;
	}
</style>

<div
	class="cards-container flex {$size === 'mobile' ? 'flex-col' : 'flex-row'} gap-x-[1rem]
	lg:gap-x-[3rem] justify-center items-center gap-y-[1.6rem] m-auto px-[2.4rem] md:px-[4rem]
	xl:px-0 md:w-full md:max-w-[111rem]"
	transition:fly={{ duration: 150, x: -100 }}>
	{#each cards as { name, width, translateY }, i}
		<a
			href="/product-category/{name}"
			class="card h-[21.7rem] lg:h-[28.4rem] w-[32.7rem] md:w-full lg:w-[35rem] flex items-end
			transition-all group"
			on:click>

			<div
				class="text-container p-[2.2rem] lg:p-[3rem] bg-lightGray w-full h-[16.5rem] lg:h-[20.4rem]
				flex flex-col items-center gap-y-[1.5rem] justify-end rounded-[0.8rem] relative">

				<div
					class="img-container absolute left-1/2 top-0 transform group-hover:pb-[5rem]"
					style="transform: translate(-50%, -{$size === 'desktop' ? `${translateY.desktop}rem` : `${translateY.mobile}rem`});">
					<img
						src="/images/shared/desktop/image-{name}.png"
						alt=""
						style="width: {$size === 'desktop' ? `${width.desktop}rem` : `${width.mobile}rem`}" />
				</div>

				<h3
					class="uppercase tracking-[1.29px] text-[1.8rem] font-bold group-hover:transform
					transition-all group-hover:translate-y-[-0.5rem]">
					{name}
				</h3>
				<Button content="SHOP" btnType="link" link="/product-category/{name}" />

			</div>

		</a>
	{/each}

</div>
