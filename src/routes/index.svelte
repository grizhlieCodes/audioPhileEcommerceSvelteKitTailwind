<script>
    import Button from '$lib/UI/Button.svelte'    

    let btnTesting = {
        content:'shop',
        btnType: 'secondary'
    }
    let btnTestingTwo = {
        content:'Testing Another One',
        btnType: 'primary'
    }
    let btnTestingThree = {
        content: `third's the charm`,
        btnType: 'minimal'
    }

</script>



<Button {...btnTesting} />
<Button {...btnTestingTwo} />
<Button {...btnTestingThree} />


<!-- <script>

let products = [
    {
        name: "yx1 wireless earphones",
        productName: "yx1-earphones",
        descr: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        price: 599,
        featuresDescr: [
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
            `
The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`
        ],
        imageTrio: [
            {
                imagePosition: "top-left",
                imageName: "image-gallery-1"
            },
            {
                imagePosition: "bottom-left",
                imageName: "image-gallery-2"
            },
            {
                imagePosition: "right",
                imageName: "image-gallery-3"
            }
        ]
    }
] -->

<!-- </script> -->
<!-- {#each products as {name}}
     {#each imageTrio as {imagePosition, imageName}}
         <img src="/media/images/product-{name}/{size}/{imageName}" alt="" class="{imagePosition}">
     {/each}
{/each} -->

<!-- 
    we have now output 3 images
    create a grid and let grid handle how it's position implicitly
    or be explicit and give each image a grid-area
 -->