<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';
    import {fly} from 'svelte/transition';

	let size = getContext('size');

	let cards = [
		{
			name: 'headphones',
            width:{
                mobile: '14.5rem',
                desktop: '21.5rem',
            },
            translateY: {
                mobile: '5.2rem',
                desktop: '7.6rem',
            },
		},
		{
			name: 'speakers',
            width:{
                mobile: '14.5rem',
                desktop: '22rem',
            },
            translateY: {
                mobile: '4.5rem',
                desktop: '7.2rem',
            },
		},
		{
			name: 'earphones',
            width:{
                mobile: '18rem',
                desktop: '22rem',
            },
            translateY: {
                mobile: '5.2rem',
                desktop: '6.2rem',
            },
		}
	];

</script>

<style>
    .img-container img {
        max-width: none;
    }
</style>

<!-- 
[32.7rem] 

    1. Create identical card x3
        - 
    2. Make it function correctly (size) within a container

-->

<div class="cards-container flex {$size === 'mobile' ? 'flex-col' : 'flex-row'} gap-x-[3rem] justify-center items-center gap-y-[1.6rem] m-auto"
    transition:fly={{duration: 150, x: -100}}
>
    {#each cards as { name, width, translateY }}
        <div
            class="card h-[21.7rem] xl:h-[28.4rem] w-[32.7rem] md:w-[22.3rem] xl:w-[35rem] flex
            items-end transition-all">
    
            <div
                class="text-container p-[2.2rem] xl:p-[3rem] bg-lightGray w-full h-[16.5rem] xl:h-[20.4rem] flex flex-col
                items-center gap-y-[1.5rem] justify-end rounded-[0.8rem] relative">
    
                <div class="img-container absolute left-1/2 top-0" 
                style="transform: translate(-50%, -{$size === 'desktop' ? translateY.desktop : translateY.mobile});">
                    <img src="/static/images/shared/desktop/image-{name}.png" alt="" 
                    style="width: {$size === 'desktop' ? width.desktop : width.mobile}">
                </div>
    
                <h3 class="uppercase tracking-[1.29px] text-[1.8rem] font-bold">{name}</h3>
                <Button content="SHOP" btnType="link" link="/{name}" />
    
            </div>
    
        </div>
    {/each}

</div>
