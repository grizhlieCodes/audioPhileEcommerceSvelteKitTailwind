<script>
	export let name = '',
		placeholder = '',
		type = 'text',
		width = '',
		value = '';

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
		<p class=" text-[1.2rem] font-bold tracking-[-0.21px] mb-[0.9rem]">{name}</p>
		<input
			{type}
			{placeholder}
			{value}
			class=" w-full h-[5.6rem] rounded-[0.8rem] border-[1px] border-[#CFCFCF]
			focus-within:border-darkOrange focus-within:border-[2px] outline-none px-[2.4rem] font-bold
			text-black text-[1.4rem] tracking-[-0.25px] caret-red-500 transition-all"
			on:input />
	</div>
{:else}
	<!-- else content here -->
	<div class="input-field min-w-[28rem] flex-auto lg:max-w-[33.3rem]">
		<p class=" text-[1.2rem] font-bold tracking-[-0.21px] mb-[0.9rem]">{name}</p>
		<input
			{type}
			{placeholder}
			{value}
			class=" w-full h-[5.6rem] rounded-[0.8rem] border-[1px] border-[#CFCFCF]
			focus-within:border-darkOrange focus-within:border-[2px] outline-none px-[2.4rem] font-bold
			text-black text-[1.4rem] tracking-[-0.25px] caret-red-500"
			on:input />
	</div>
{/if}
