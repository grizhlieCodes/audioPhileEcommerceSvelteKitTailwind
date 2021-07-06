<script>
	import { fly } from 'svelte/transition';

	export let content,
		btnType,
		type = 'button',
		link = '',
		isDisabled = false,
		id = '';
</script>

<style>
	button,
	a {
		grid-area: button;
	}
</style>

<div transition:fly={{ x: 100, duration: 200 }}>

	{#if btnType === 'primary'}
		{#if link === ''}
			<button
				class="text-[1.3rem] font-bold uppercase bg-darkOrange px-[3.4rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-max"
				on:click
				{type}>
				{content}
			</button>
		{:else}
			<a
				on:click
				sveltekit:prefetch
				href={link}
				class=" text-[1.3rem] font-bold uppercase bg-darkOrange px-[3.4rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-max block
				group-hover:bg-lightOrange">
				{content}
			</a>
		{/if}
	{:else if btnType === 'grey'}
		{#if link === ''}
			<button
				class="text-[1.3rem] font-bold uppercase bg-[#808080] px-[2.45rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-max"
				on:click
				{type}>
				{content}
			</button>
		{:else}
			<a
				on:click
				sveltekit:prefetch
				href={link}
				class=" text-[1.3rem] font-bold uppercase bg-[#808080] px-[2.45rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-max block
				group-hover:bg-lightOrange">
				{content}
			</a>
		{/if}
	{:else if btnType === 'secondary'}
		<a
			sveltekit:prefetch
			href={link}
			class="block text-[1.3rem] font-bold uppercase bg-white px-[3.4rem] py-[1.5rem] hover:bg-black
			hover:text-white text-black tracking-[1px] border-[1px] border-black transition-all w-max">
			{content}
		</a>
	{:else if btnType === 'link'}
		<a
			disabled={isDisabled ? 'true' : false}
			sveltekit:prefetch
			href={link}
			class=" text-[1.3rem] font-bold uppercase hover:text-darkOrange text-black tracking-[1px]
			transition-all flex flex-row justify-center items-center group-hover:text-darkOrange w-max">
			<p class="mr-[1.3rem]">{content}</p>
			<div class="transform group-hover:transform group-hover:rotate-180 transition-all">
				<img src="/images/shared/desktop/icon-arrow-right.svg" alt="" />
			</div>
		</a>
	{:else if btnType === 'homepage'}
		<a
			sveltekit:prefetch
			href={link}
			class=" text-[1.3rem] font-bold uppercase bg-black px-[3.4rem] py-[1.5rem] w-max
			hover:bg-[#4C4C4C] hover:text-white text-white tracking-[1px] transition-all">
			{content}
		</a>
	{:else if btnType === 'fullWidthPrimary'}
		{#if link !== ''}
			<a  
				{id}
				href={isDisabled ? '' : link}
				class="block text-[1.3rem] font-bold uppercase bg-darkOrange px-[3.4rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-full text-center"
				on:click
				type>
				{content}
			</a>
			<!-- content here -->
		{:else}
			<!-- else content here -->
			<button
				{id}
				class="text-[1.3rem] font-bold uppercase bg-darkOrange px-[3.4rem] py-[1.5rem]
				hover:bg-lightOrange text-white tracking-[1px] transition-all w-full text-center"
				on:click
				type>
				{content}
			</button>
		{/if}
	{/if}
</div>
