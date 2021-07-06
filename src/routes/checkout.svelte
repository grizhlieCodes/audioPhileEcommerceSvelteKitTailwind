<script>
	import Input from '$lib/checkout/NormalInput.svelte';
	import Radio from '$lib/checkout/RadioInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import Summary from '$lib/checkout/Summary.svelte';
	import { getContext, onMount, onDestroy, createEventDispatcher, setContext } from 'svelte';
	import Button from '$lib/UI/Button.svelte';
	import OrderCompleted from '$lib/checkout/OrderCompleted.svelte';
	import isNotEmpty from '$lib/checkout/isNotEmpty';
	import emailValid from '$lib/checkout/emailValid';
	import userStore from '$lib/checkout/userStore.js';
	import OrderConfirmation from '$lib/checkout/OrderConfirmation.svelte';
	import cartStore from '$lib/products/cartStore.js';
	import { writable } from 'svelte/store';
	import hideFooterBottom from '$lib/checkout/hideFooterBottom.js'

	const dispatch = createEventDispatcher();

	let size = getContext('size');

	let name = '',
		email = '',
		tel = '',
		address = '',
		zip = '',
		city = '',
		country = '';
	let selectedPayment,
		eMoneyNumber = '',
		eMoneyPin = '';

	$: isNameValid = isNotEmpty(name);
	$: isEmailValid = emailValid(email);
	$: isTelValid = isNotEmpty(tel);
	$: isAddressValid = isNotEmpty(address);
	$: isZipValid = isNotEmpty(zip);
	$: isCityValid = isNotEmpty(city);
	$: isCountryValid = isNotEmpty(country);
	$: isEmoneyNumberValid = isNotEmpty(eMoneyNumber);
	$: isEmoneyPinValid = isNotEmpty(eMoneyPin);

	let userData;

	const updateUserData = () => {
		userData = {
			name,
			name,
			email,
			tel,
			address,
			zip,
			city,
			country,
			selectedPayment,
			eMoneyNumber,
			eMoneyPin
		};
		userStore.updateUserInfo(userData);
	};

	let nameTouched,
		emailTouched,
		telTouched,
		addressTouched,
		zipTouched,
		cityTouched,
		countryTouched,
		eMoneyNumberTouched,
		eMoneyPinTouched;

	let dataValid;

	const validateData = () => {
		nameTouched = true;
		emailTouched = true;
		telTouched = true;
		addressTouched = true;
		zipTouched = true;
		cityTouched = true;
		countryTouched = true;
		isNameValid = isNotEmpty(name);
		isEmailValid = emailValid(email);
		isTelValid = isNotEmpty(tel);
		isAddressValid = isNotEmpty(address);
		isZipValid = isNotEmpty(zip);
		isCityValid = isNotEmpty(city);
		isCountryValid = isNotEmpty(country);
		if (selectedPayment === 'eMoney') {
			eMoneyNumberTouched = true;
			eMoneyPinTouched = true;
			isEmoneyNumberValid = isNotEmpty(eMoneyNumber);
			isEmoneyPinValid = isNotEmpty(eMoneyPin);
		} else if (selectedPayment === 'cash') {
			eMoneyNumberTouched = false;
			eMoneyPinTouched = false;
			isEmoneyNumberValid = true;
			isEmoneyPinValid = true;
		}

		dataValid =
			isNameValid &&
			isEmailValid &&
			isTelValid &&
			isAddressValid &&
			isZipValid &&
			isCityValid &&
			isCountryValid &&
			isEmoneyNumberValid &&
			isEmoneyPinValid;
	};

	const updateName = (e) => {
		name = e.target.value;
		updateUserData();
	};
	const updateEmail = (e) => {
		email = e.target.value;
		updateUserData();
	};
	const updateTel = (e) => {
		tel = e.target.value;
		updateUserData();
	};
	const updateAddress = (e) => {
		address = e.target.value;
		updateUserData();
	};
	const updateZip = (e) => {
		zip = e.target.value;
		updateUserData();
	};
	const updateCity = (e) => {
		city = e.target.value;
		updateUserData();
	};
	const updateCountry = (e) => {
		country = e.target.value;
		updateUserData();
	};
	const updateEmoneyNumber = (e) => {
		eMoneyNumber = e.target.value;
		updateUserData();
	};
	const updateEmoneyPin = (e) => {
		eMoneyPin = e.target.value;
		updateUserData();
	};

	let hideCheckout = false;

	const confirmOrderClicked = (e) => {
		e.preventDefault();
		validateData();
		if (dataValid) {
			//Hide all grid items and show 'order-confirmation'
			hideCheckout = true;
			// showOrderConfirmation = true;
		} else {
			return;
		}
	};

	const finalCheckout = () => {
		orderComplete = true;
	};

	let orderComplete = false;

	let contentReady = false;

	const updateInputsWithUserStoreOnLoad = () => {
		name = $userStore.name;
		email = $userStore.email;
		tel = $userStore.tel;
		address = $userStore.address;
		zip = $userStore.zip;
		city = $userStore.city;
		country = $userStore.country;
		selectedPayment = $userStore.selectedPayment;
		eMoneyNumber = $userStore.eMoneyNumber;
		eMoneyPin = $userStore.eMoneyPin;
		validateData();
		if (dataValid) {
			console.log(dataValid);
			setTimeout(() => {
				const button = document.querySelector('#continueToPaymentButton')
				const buttonLocation = button.getBoundingClientRect().top
				const buttonHeight = button.offsetHeight
				const buttonHeightHalf = buttonHeight / 2
				const viewportCenter = window.innerHeight / 2

				const options = {
					top: buttonLocation - viewportCenter + buttonHeightHalf ,
					left: 0,
					behavior: 'smooth'
				};
				window.scrollTo(options);
			}, 500);
		}
	};

	onMount(() => {
		hideFooterBottom.set(true)
		contentReady = true;
		userStore.setUserFromLocalStorage();
		if ($userStore) {
			updateInputsWithUserStoreOnLoad();
		}
	});

	onDestroy(() => {
		hideFooterBottom.set(false);
	});
</script>

<style>
	#checkout-section {
		grid:
			'link' max-content
			'summary' max-content
			'checkout' max-content
			/ 1fr;
	}

	a {
		grid-area: link;
	}

	form {
		grid-area: checkout;
	}

	.summary {
		grid-area: summary;
	}

	#info {
		grid-area: info;
		justify-self: start;
	}

	@media screen and (min-width: 1110px) {
		#checkout-section {
			/* height: 160rem; */
			grid:
				'link link' min-content
				'checkout summary' min-content
				'checkout info' 1fr / minmax(73rem, 1fr) 1fr;
			gap: 3rem;
		}

		#back-button {
			justify-self: start;
		}
	}

	#checkout-section.order-confirmation {
		grid:
			'link' min-content
			'confirmation ' 1fr / 1fr;
		place-items: center;
	}
</style>

<svelte:head>

	<title>Checkout</title>

	<style>
		body {
			background: #f1f1f1;
		}
	</style>
</svelte:head>
<section
	id="checkout-section"
	class:order-confirmation={hideCheckout}
	class="w-full max-w-[111rem] mx-auto pt-[1.6rem] pb-[9.7rem] md:pb-[11.6rem] md:pt-[3.3rem]
	lg:pt-[7.9rem] px-[2.4rem] md:px-[4rem] xl:px-0 lg:mb-0 lg:pb-[16rem] grid gap-[3.2rem]">

	<a
		id="back-button"
		sveltekit:prefetch
		href="/"
		class=" text-[1.5rem] leading-[2.5rem] text-black opacity-50 hover:opacity-75 mb-[2.4rem] ">
		Go Back
	</a>

	{#if contentReady && !hideCheckout}
		<form
			on:submit={confirmOrderClicked}
			in:fly={{ x: -100, duration: 450, delay: 300 }}
			out:fly={{ x: 25, duration: 300 }}
			class="checkout bg-white w-full rounded-[0.8rem] p-[2.4rem] flex flex-col gap-y-[3.2rem]
			md:px-[2.8rem] md:py-[3rem] lg:px-[4.8rem] lg:py-[5.4rem]">
			<h2
				class=" text-[2.4rem] leading-[3.6rem] tracking-[0.086px] font-bold uppercase
				md:text-[3.2rem]">
				checkout
			</h2>

			<div class="">
				<h3
					class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange
					uppercase mb-[1.6rem] ">
					Billing details
				</h3>
				<div id="checkoutSection" class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap">
					<Input
						name="Name"
						type="text"
						placeholder="Alexei Ward"
						value={name}
						on:input={updateName}
						isValid={isNameValid}
						touched={nameTouched} />
					<Input
						name="Email Address"
						type="email"
						placeholder="alexei@mail.com"
						value={email}
						on:input={updateEmail}
						isValid={isEmailValid}
						touched={emailTouched} />
					<Input
						name="Phone Number"
						type="tel"
						placeholder="+1 202-555-0136"
						value={tel}
						on:input={updateTel}
						isValid={isTelValid}
						touched={telTouched} />
				</div>
			</div>
			<div class="">
				<h3
					class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange
					uppercase mb-[1.6rem] ">
					Billing details
				</h3>
				<div id="checkoutSection" class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap">
					<Input
						name="Address"
						type="text"
						placeholder="1137 Williams Avenue"
						width="full"
						value={address}
						on:input={updateAddress}
						isValid={isAddressValid}
						touched={addressTouched} />
					<Input
						name="ZIP Code"
						type="text"
						placeholder="10001"
						value={zip}
						on:input={updateZip}
						isValid={isZipValid}
						touched={zipTouched} />
					<Input
						name="City"
						type="text"
						placeholder="New York"
						value={city}
						on:input={updateCity}
						isValid={isCityValid}
						touched={cityTouched} />
					<Input
						name="Country"
						type="text"
						placeholder="United States"
						value={country}
						on:input={updateCountry}
						isValid={isCountryValid}
						touched={countryTouched} />
				</div>
			</div>
			<div class="">
				<h3
					class=" text-[1.3rem] leading-[2.5rem] tracking-[0.93px] font-bold text-darkOrange
					uppercase mb-[1.6rem] ">
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
						id="info"
						class="mb-[3.2rem] flex gap-y-[2.4rem] gap-x-[1.6rem] flex-wrap"
						transition:slide={{ duration: 200 }}>

						<Input
							name="e-Money Number"
							type="number"
							placeholder="238512381"
							value={eMoneyNumber}
							on:input={updateEmoneyNumber}
							isValid={isEmoneyNumberValid}
							touched={eMoneyNumberTouched} />
						<Input
							name="e-Money PIN"
							type="number"
							placeholder="United States"
							value={eMoneyPin}
							on:input={updateEmoneyPin}
							isValid={isEmoneyPinValid}
							touched={eMoneyPinTouched} />
					</div>
				{/if}
			</div>

			<Button
				id="continueToPaymentButton"
				content={selectedPayment === 'eMoney' ? 'Continue & Pay' : 'Continue'}
				btnType="fullWidthPrimary"
				type="submit"
				on:click />

		</form>

		<div
			class="summary"
			in:fly={{ x: 25, duration: 300, delay: 500 }}
			out:fly={{ x: 25, duration: 300 }}>
			<Summary />
		</div>

		<div
			class="info"
			in:fly={{ x: 75, duration: 300, delay: 750 }}
			out:fly={{ x: 75, duration: 300 }}>
			{#if selectedPayment === 'cash' && $size === 'desktop'}
				<div
					transition:fly={{ x: 150, duration: 250 }}
					class=" w-full h-full bg-white z-50 rounded-[0.8rem] md:right-[2.4rem] px-[2.8rem]
					py-[3.2rem] grid place-items-center">
					<div class="div flex flex-col items-center justify-center">
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="mb-[2.4rem]">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704
								11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875
								25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375
								42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0
								46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585
								44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125
								40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317
								13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75
								4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719
								39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806
								34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375
								16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334
								2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287
								47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658
								5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372
								7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039
								11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534
								12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375
								16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652
								12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533
								16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644
								9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696
								12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938
								25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283
								15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891
								17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062
								26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213
								14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894
								19.9393 33.8438 20.7288Z"
								fill="#D87D4A" />
						</svg>
						<p
							class=" text-[1.5rem] leading-[2.5rem] font-light text-black opacity-50
							max-w-[25.5rem] ">
							The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
							arrives at your residence. Just make sure your address is correct so that your order
							will not be cancelled.
						</p>

					</div>
				</div>
			{/if}
		</div>
	{:else if contentReady && hideCheckout}
		<OrderConfirmation on:saveForLater on:placeOrder={finalCheckout} />
	{/if}

	{#if orderComplete}
		<OrderCompleted
			on:closeOrderConfirmation={() => {
				orderComplete = false;
			}} />
	{/if}

</section>
