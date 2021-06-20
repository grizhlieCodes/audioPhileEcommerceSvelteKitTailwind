<script>
	export let content, btnType;
</script>

<style>

</style>

{#if btnType === 'primary'}
	<button
		class="text-[1.3rem] font-bold uppercase bg-darkOrange px-[3.4rem] py-[1.5rem]
		hover:bg-lightOrange text-white tracking-[1px] transition-all">
		{content}
	</button>
{:else if btnType === 'secondary'}
	<button
		class="text-[1.3rem] font-bold uppercase bg-white px-[3.4rem] py-[1.5rem] hover:bg-black
		hover:text-white text-black tracking-[1px] border-[1px] border-black transition-all">
		{content}
	</button>
{:else if btnType === 'minimal'}
	<button
		class="text-[1.3rem] font-bold uppercase hover:text-darkOrange text-black tracking-[1px]
		transition-all flex flex-row justify-center items-center h-[48px] group">
		<p class="mr-[1.3rem]">{content}</p>
		<div class="transform group-hover:transform group-hover:rotate-180 transition-all">
			<img src="./static/images/shared/desktop/icon-arrow-right.svg" alt="" />
		</div>
	</button>
{:else if btnType === 'homepage'}
	<button
		class="text-[1.3rem] font-bold uppercase bg-black px-[3.4rem] py-[1.5rem] hover:bg-[#4C4C4C]
		hover:text-white text-white tracking-[1px] transition-all">
		{content}
	</button>
{/if}
