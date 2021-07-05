<script>
	let innerHeight;
	let localSize;
	import Button from '$lib/ui/Button.svelte';

	$: if (innerHeight >= 1000) {
		localSize = 'desktop';
	} else if (innerHeight >= 400) {
		localSize = 'tablet';
	} else {
		localSize = 'mobile';
	}

	//Consider adding the 'products' store in order to grab data from the object to fill this page about the mark-two headphones
</script>

<style>
	.section-inner-container {
		display: grid;
		grid: 'textAndImage' 1fr / 1fr;
	}

	.textContainer,
	.img-container {
		grid-area: textAndImage;
	}

	@media screen and (min-width: 1024px) {
		.section-inner-container {
			grid: 'text img' 1fr / min-content 1fr;
		}

		.textContainer {
			grid-area: text;
		}

		.img-container {
			grid-area: img;
		}

		.section-inner-container {
			position: relative;
		}

		.section-inner-container::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url(/images/home/desktop/image-hero.jpg) no-repeat center center;
			background-size: cover;
		}
	}
</style>

<svelte:window bind:innerWidth={innerHeight} />

<section
	id="homepage-hero-section"
	class="w-full h-[51rem] mTab:h-[72.9rem] bg-[#191919] lg:h-[63.2rem] overflow-hidden">
	<div class="section-inner-container w-full h-full max-w-[111rem] m-auto md:px-20 lg:px-0">
		<div class="img-container w-full max-w-[37.5rem] mTab:max-w-[76.8rem] m-auto relative">
			<img
				src="/images/home/{localSize}/image-header.jpg"
				alt=""
				class="lg:max-w-none lg:w-[80rem] lg:absolute bottom-[-400px] lg:hidden " />
		</div>
		<div
			class="textContainer flex justify-center items-center flex-col text-center w-[32.8rem]
			mTab:w-[37.9rem] m-auto lg:m-0 lg:pl-20 xl:pl-0 lg:text-left lg:items-start z-10
			transition-all">

			<h4
				class="mb-[1.6rem] text-[1.4rem] tracking-[1rem] text-white opacity-50 font-normal
				transition-all">
				NEW PRODUCT
			</h4>
			<h1
				class="mb-[2.4rem] uppercase text-[3.6rem] leading-[4rem] tracking-[1.29px] text-white
				font-bold lg:text-[5.6rem] lg:leading-[5.8rem] transition-all">
				XX99 Mark II Headphones
			</h1>
			<p
				class="mb-[2.8rem] text-[1.5rem] leading-[2.5rem] font-extralight text-white opacity-75
				lg:w-[34.9rem] transition-all">
				Experience natural, lifelike audio and exceptional build quality made for the passionate
				music enthusiast.
			</p>

			<Button btnType="primary" content="See product" link="/product/xx99-mark-two-headphones" />
		</div>
	</div>
</section>
