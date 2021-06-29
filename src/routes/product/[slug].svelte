<script context="module">
	export async function load({ page }) {
		const slug = page.params.slug;
		return {
			props: {
				slug
			}
		};
	}
</script>

<script>
	import data from '$lib/products/products.js';
	export let slug;

	import { getContext } from 'svelte';

	import Button from '$lib/UI/Button.svelte';

	let size = getContext('size');

	let products = $data;
	console.log(products);
	let product = products.filter((p) => p.productSlug === slug)[0];
	console.log(product);
	let {
		newProduct,
		displayName,
		productType,
		topDescription,
		price,
		features,
		boxContents,
		imageGallery,
		productCode
	} = product;

	let unitsSelected = 1;

	const incrementUnits = () => {
		unitsSelected++;
	};
	const decrementUnits = () => {
		if (unitsSelected === 1) return;
		unitsSelected--;
	};

	let randomProducts = [];

	function generateRandomProducts(iterations) {
		let tempArray = [...products];
		tempArray = tempArray.filter((prod) => prod.productSlug !== slug);
		let randomNumber
		for (let i = 0; i < iterations; i++) {
			randomNumber = Math.floor(Math.random() * tempArray.length)
			randomProducts = [
				...randomProducts,
				tempArray[randomNumber]
			];
			tempArray = tempArray.filter((p,i) => i !== randomNumber)
		}
		console.log(randomProducts)
	}
	generateRandomProducts(3);
</script>

<style>
	.gallery-grid {
		display: grid;
		max-height: 75.6rem;
		grid: 1fr 1fr 2fr / 1fr;
		gap: 2rem;
	}

	.gallery-grid img {
		max-height: 17.4rem;
		width: 100%;
		/* height: 100%; */
		object-fit: cover;
		object-position: center;
	}
	.gallery-grid img:nth-child(3) {
		max-height: 36.8rem;
	}

	@media screen and (min-width: 768px) {
		.gallery-grid {
			grid: 1fr 1fr / minmax(27.7rem, 1fr) minmax(39.5rem, 2fr);
			max-height: 36.8rem;
		}

		.gallery-grid img:nth-child(3) {
			grid-row: 1/3;
			grid-column: 2/3;
		}
	}

	@media screen and (min-width: 1024px) {
		.gallery-grid {
			grid: 1fr 1fr / minmax(44.5rem, 1fr) minmax(63.5rem, 2fr);
			max-height: 59.2rem;
		}

		.gallery-grid img:nth-child(3) {
			grid-row: 1/3;
			grid-column: 2/3;
		}
	}
</style>

<section
	class="w-full max-w-[111rem] mx-auto my-[1.6rem] md:my-[3.3rem] lg:my-[7.9rem] px-[2.4rem]
	md:px-[4rem] xl:px-0 ">

	<a
		href="/products/{productType}"
		class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 hover:opacity-75 h-max ">
		Go Back
	</a>

	<div
		class="w-full h-[75.5rem] flex flex-col items-center justify-start gap-y-[3.2rem] mt-[2.4rem]
		lg:mt-[5.6rem] md:flex-row md:h-[48rem] md:gap-x-[6.9rem] lg:h-[56rem] lg:gap-x-[12.5rem]
		mb-[8.8rem] md:mb-[12rem] lg:mb-[16rem] ">
		<img
			src="/images/product-{productCode}-{productType}/{$size}/image-product.jpg"
			alt=""
			class="w-full rounded-[0.8rem] h-[32.7rem] bg-lightGray object-contain md:object-cover
			object-center md:h-[48rem] md:w-[28.1rem] lg:w-[54rem] lg:h-full " />

		<div class="w-full flex flex-col gap-y-[2.4rem] ">

			{#if newProduct}
				<h3 class=" text-darkOrange uppercase font-normal tracking-[1rem] text-[1.4rem] ">
					new product
				</h3>
			{/if}

			<h1
				class=" text-[2.8rem] uppercase font-bold tracking-[0.1rem] w-[22rem] lg:text-[4rem]
				lg:leading-[4.4rem] lg:tracking-[0.143rem] ">
				{displayName}
			</h1>

			<p class=" text-black opacity-50 font-normal leading-[2.5rem] text-[1.5rem] ">
				{topDescription}
			</p>

			<p class=" text-[1.8rem] tracking-[0.129rem] font-bold ">$ {price.toLocaleString()}</p>

			<div class="flex gap-x-[1.6rem] ">
				<div class=" w-[12rem] h-[4.8rem] bg-lightGray flex justify-around items-center">
					<button
						class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full
						w-[2rem] "
						on:click={decrementUnits}>
						-
					</button>
					<input
						type="text"
						class=" text-[1.3rem] font-bold tracking-[0.1rem] w-[2rem] bg-transparent text-center"
						bind:value={unitsSelected} />
					<button
						class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full
						w-[2rem] "
						on:click={incrementUnits}>
						+
					</button>
				</div>

				<Button content="add to cart" btnType="primary" />
			</div>
		</div>
	</div>

	<div
		class=" w-full flex flex-col gap-y-[8.8rem] mb-[12.1rem] md:mb-[15.3rem] lg:mb-[10.8rem]
		lg:flex-row lg:gap-x-[12.5rem] ">

		<div class="features flex flex-col gap-y-[2.4rem] lg:w-[63.5rem] ">
			<h2
				class=" text-[2.4rem] leading-[3.6rem] tracking-[0.086px] font-bold uppercase
				md:text-[3.2rem]">
				Features
			</h2>
			{#each features as feature}
				<p class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 ">{feature}</p>
			{/each}
		</div>

		<div class=" flex flex-col gap-y-[2.4rem] md:flex-row lg:flex-col">
			<h2
				class=" text-[2.4rem] leading-[3.6rem] tracking-[0.086px] font-bold uppercase md:w-[50%]
				md:text-[3.2rem] lg:w-[100%]">
				in the box
			</h2>
			<div class="flex flex-col gap-y-[0.8rem]">
				{#each boxContents as content}
					<div class=" text-[1.5rem] flex gap-x-[2.4rem] ">
						<p class=" inline-block text-darkOrange font-bold">{content.quantity}x</p>
						<p class=" inline-block text-black opacity-50 ">{content.name}</p>
					</div>
				{/each}
			</div>
		</div>

	</div>

	<!-- See actual styling, not tailwind -->

	<div class="gallery-grid mb-[12rem] lg:mb-[16rem]">
		{#each imageGallery as image}
			<img
				class=" h-full rounded-[8px]"
				src="/images/product-{productCode}-{productType}/{$size}/{image}.jpg"
				alt={displayName} />
		{/each}
	</div>

</section>
