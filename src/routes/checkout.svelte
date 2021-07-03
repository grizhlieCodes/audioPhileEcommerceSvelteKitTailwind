<script>
	import Input from '$lib/checkout/NormalInput.svelte';
	import Radio from '$lib/checkout/RadioInput.svelte';
	import { fly } from 'svelte/transition';
	import {createEventDispatcher, onMount, onDestroy} from 'svelte'

	let name, email, tel, address, zip, city, country;
	let selectedPayment, eMoneyNumber, eMoneyPin;


	const updateName = (e) => {
		name = e.target.value;
	};
	const updateEmail = (e) => {
		email = e.target.value;
	};
	const updateTel = (e) => {
		tel = e.target.value;
	};
	const updateAddress = (e) => {
		address = e.target.value;
	};
	const updateZip = (e) => {
		zip = e.target.value;
	};
	const updateCity = (e) => {
		city = e.target.value;
	};
	const updateCountry = (e) => {
		country = e.target.value;
	};
	const updateEmoneyNumber = (e) => {
		eMoneyNumber = e.target.value;
	};
	const updateEmoneyPin = (e) => {
		eMoneyPin = e.target.value;
	};
</script>

<svelte:head>

	<title>Checkout</title>

</svelte:head>

<style>
	#checkout-section {
		grid:
			'link' max-content
			'checkout' max-content
			'summary' max-content / 1fr;
	}

	a {
		grid-area: link;
	}

	form {
		grid-area: checkout;
	}

	@media screen and (min-width: 1024px) {
		#checkout-section {
			grid:
				'link link'
				'checkout summary' 1fr
				'checkout info' 1fr / minmax(73rem, 1fr) 1fr;
			gap: 3rem;
		}
	}
</style>

<section
	id="checkout-section"
	class="w-full max-w-[111rem] mx-auto pt-[1.6rem] md:mb-[3.3rem] md:pt-[3.3rem] lg:pt-[7.9rem]
	px-[2.4rem] md:px-[4rem] xl:px-0 mb-[12rem] lg:mb-0 lg:pb-[16rem] grid transition-all">

	<a
		sveltekit:prefetch
		href="/"
		class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 hover:opacity-75 h-max mb-[2.4rem] ">
		Go Back
	</a>

	<form class="checkout bg-white w-full rounded-[0.8rem] p-[2.4rem] flex flex-col gap-y-[3.2rem]  transition-all" >
		<h2
			class=" text-[2.4rem] leading-[3.6rem] tracking-[0.086px] font-bold uppercase md:text-[3.2rem]">
			checkout
		</h2>

		<!-- {#each inputSections.filter((s) => s.isPaymentSection === false) as section}
			<InputSection {...section} onInput={(e) => console.log('working')}/>
		{/each} -->

		<div class="">
			<h3
				class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange uppercase
				mb-[1.6rem] ">
				Billing details
			</h3>
			<div id="checkoutSection" class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap">
				<Input
					name="Name"
					type="text"
					placeholder="Alexei Ward"
					value={name}
					on:input={updateName} />
				<Input
					name="Email Address"
					type="email"
					placeholder="alexei@mail.com"
					value={email}
					on:input={updateEmail} />
				<Input
					name="Phone Number"
					type="tel"
					placeholder="+1 202-555-0136"
					value={tel}
					on:input={updateTel} />
			</div>
		</div>
		<div class="">
			<h3
				class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange uppercase
				mb-[1.6rem] ">
				Billing details
			</h3>
			<div id="checkoutSection" class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap">
				<Input
					name="Address"
					type="text"
					placeholder="1137 Williams Avenue"
					width="full"
					value={address}
					on:input={updateAddress} />
				<Input name="ZIP Code" type="text" placeholder="10001" value={zip} on:input={updateZip} />
				<Input name="City" type="text" placeholder="New York" value={city} on:input={updateCity} />
				<Input
					name="Country"
					type="text"
					placeholder="United States"
					value={country}
					on:input={updateCountry} />
			</div>
		</div>
		<div class="">
			<h3
				class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange uppercase
				mb-[1.6rem] ">
				payment details
			</h3>
			<div id="checkoutSection" class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap">
				<Radio
					content="e-Money"
					id="eMoney"
					value="eMoney"
					bind:selectedRadio={selectedPayment}
					{selectedPayment} />
				<Radio
					content="Cash on Delivery"
					id="cash"
					value="cash"
					bind:selectedRadio={selectedPayment}
					{selectedPayment} />
			</div>
			{#if selectedPayment === 'eMoney'}
				<div
					id="checkoutSection"
					class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap"
					transition:fly={{ duration: 200, y: 100 }}>

					<Input
						name="e-Money Number"
						type="number"
						placeholder="238512381"
						value={eMoneyNumber}
						on:input={updateEmoneyNumber} />
					<Input
						name="e-Money PIN"
						type="number"
						placeholder="United States"
						value={eMoneyPin}
						on:input={updateEmoneyPin} />
				</div>
			{/if}
		</div>

	</form>

</section>
