<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let value,
		type = 'big';
</script>

{#if type === 'big'}
	<div class=" w-[12rem] h-[4.8rem] bg-lightGray flex justify-around items-center px-[1rem]">
		<button
			class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full w-[2rem] "
			on:click={() => dispatch('decrementUnits')}>
			-
		</button>
		<input
			type="text"
			class=" text-[1.3rem] font-bold tracking-[0.1rem] w-auto min-w-[2rem] bg-transparent
			text-center mx-[1rem]"
			{value} />
		<button
			class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full w-[2rem] "
			on:click={() => dispatch('incrementUnits')}>
			+
		</button>
	</div>
{:else if type === 'small'}
	<div class=" w-[9.6rem] h-[3.2rem] bg-lightGray flex justify-around items-center px-[1rem]">
		<button
			class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full w-[2rem] "
			on:click={() => dispatch('decrementUnits')}>
			-
		</button>
		<input
			type="text"
			class=" text-[1.3rem] font-bold tracking-[0.1rem] w-auto min-w-[2rem] bg-transparent
			text-center mx-[1rem]"
			{value} />
		<button
			class=" text-[1.3rem] text-black opacity-25 cursor-pointer hover:opacity-75 h-full w-[2rem] "
			on:click={() => dispatch('incrementUnits')}>
			+
		</button>
	</div>
{/if}
