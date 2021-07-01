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
	import { getContext } from 'svelte';
	import Button from '$lib/UI/Button.svelte';
	import ProductCatCards from '$lib/navigation/ProductCatCards.svelte';
	let size = getContext('size');

	import data from '$lib/products/products.js';
	export let slug;

	let products = $data;
</script>

<section class=" flex flex-col items-center gap-y-[12rem] w-full max-w-[111rem] mx-auto pt-[16rem] mb-[16rem]">
	{#each products.filter((product) => product.productType === slug) as { displayName, newProduct, productCode, topDescription, productSlug }}
		<article
			class="w-full h-auto px-[2.4rem] gap-y-[3.2rem] flex flex-col text-center 
                    lg:flex-row lg:even:flex-row-reverse lg:justify-between lg:gap-x-[12.5rem]">

			<img
				src="/images/category-{slug}/{$size}/image-{productCode}.jpg"
				alt=""
				class=" w-full max-w-[54rem] rounded-[0.8rem] h-[35.2rem] lg:w-[54rem] lg:h-[56rem] object-cover
				object-center lg:flex-initial " />

			<div class="text-container flex flex-col items-center gap-y-[2.4rem] lg:flex-initial justify-between
                        lg:justify-center lg:text-left lg:items-start  ">

				{#if newProduct}
					<h3 class=" text-darkOrange uppercase font-normal tracking-[1rem] text-[1.4rem] ">
						new product
					</h3>
				{/if}

				<h1 class=" text-[2.8rem] uppercase font-bold tracking-[0.1rem] w-[22rem] lg:text-[4rem] lg:leading-[4.4rem] lg:tracking-[0.143rem] ">
					{displayName}
				</h1>

				<p class=" text-black opacity-50 font-normal leading-[2.5rem] text-[1.5rem] ">
					{topDescription}
				</p>

				<Button content="see product" btnType="primary" link="/product/{productSlug}" />
			</div>
		</article>
	{/each}

</section>

<section class="mt-[4rem] mb-[12rem] md:my-[9.6rem] lb-mt-[12rem] lg:mb-[16.8rem] ">
    <ProductCatCards />
</section>