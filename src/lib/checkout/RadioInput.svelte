<script>
	export let name = 'payment-method',
		value = '',
		id = '',
		content,
		selectedRadio = 'eMoney',
        selectedPayment = 'eMoney';

    	import {fly} from 'svelte/transition'

</script>

<style>

</style>

<div class="input-field min-w-[28rem] flex-1 flex flex-col">
	<input
		type="radio"
		{value}
		{name}
		{id}
		class="hidden"
		bind:group={selectedRadio}/>
	<label 
		for={id}
		class=" w-full h-[5.6rem] rounded-[0.8rem] border-[1px]  outline-none
		px-[5.2rem] font-bold text-black text-[1.4rem] tracking-[-0.25px] grid items-center pb-[0.3rem]
		relative {selectedPayment === id ? 'border-darkOrange' : 'border-[#CFCFCF]'} transition-all">
		<div
			class="absolute left-[1.6rem] w-[2rem] h-[2rem] rounded-full border-[1px] border-[D8D8D8] " />
		<div
			class="absolute left-[2.1rem] w-[1rem] h-[1rem] rounded-full bg-darkOrange transition-all
            {selectedPayment === id ? 'opacity-1' : 'opacity-0'}
            " />
		{content}
	</label>
</div>


<!-- style="{selectedRadioThingie === id ? 'opacity: 1;' : ''}" -->