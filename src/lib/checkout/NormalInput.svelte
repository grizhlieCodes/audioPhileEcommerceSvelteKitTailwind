<script>
	export let name = '',
		placeholder = '',
		type = 'text',
		width = '',
		value = '',
		isValid = true;

	// import {createEventDispatcher} from 'svelte'
	// const dispatch = createEventDispatcher();
</script>

<style>
	input {
		caret-color: #d87d4a;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>

{#if width === 'full'}
	<!-- content here -->
	<div class="input-field min-w-[28rem] flex-auto {width === 'full' ? 'w-full' : ''}">
		<div class="container flex flex-row justify-between w-full items-center mb-[0.9rem] ">
			<p class=" text-[1.2rem] font-bold tracking-[-0.21px] ">{name}</p>
			{#if !isValid}
				<p class=" text-red-500 text-[1.2rem] font-bold tracking-[-0.21px] ">
					{#if type === 'email'}
						Wrong Format
					{:else}
						Can't be empty
					{/if}
				</p>
			{/if}
		</div>
		<input
			{type}
			{placeholder}
			{value}
			on:input
			class=" w-full h-[5.6rem] rounded-[0.8rem] focus-within:border-[2px] outline-none px-[2.4rem]
			font-bold text-[1.4rem] tracking-[-0.25px] transition-all {isValid ? 'border-[1px] border-[#CFCFCF] text-black focus-within:border-darkOrange' : 'border-red-500 border-[2px] text-red-500'}
			" />
	</div>
{:else}
	<!-- else content here -->
	<div class="input-field min-w-[28rem] flex-auto lg:max-w-[33.3rem]">
		<div class="container flex flex-row justify-between w-full items-center mb-[0.9rem] ">
			<p class=" text-[1.2rem] font-bold tracking-[-0.21px] ">{name}</p>
			{#if !isValid}
				<p class=" text-red-500 text-[1.2rem] font-bold tracking-[-0.21px] ">
					{#if type === 'email'}
							Wrong Format
					{:else}
						Can't be empty
					{/if}
				</p>
			{/if}
		</div>
		<input
			{type}
			{placeholder}
			{value}
			class=" w-full h-[5.6rem] rounded-[0.8rem] focus-within:border-[2px] outline-none px-[2.4rem]
			font-bold text-[1.4rem] tracking-[-0.25px] caret-red-500 {isValid ? 'border-[1px] border-[#CFCFCF] text-black focus-within:border-darkOrange' : 'border-red-500 border-[2px] text-red-500'}
			"
			on:input />
	</div>
{/if}
