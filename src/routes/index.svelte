<script>
	import Button from '$lib/UI/Button.svelte';
	import { getContext } from 'svelte';

	let size = getContext('size');

	let btnTest = {
		content: 'Testing',
		btnType: 'minimal'
	};

	let menuOpened = false;
	const toggleMenu = () => {
		menuOpened = !menuOpened;
	};
</script>

<style>
	

</style>




<!-- HOMEPAGE -->
<!-- TODO:

    MOBILE FIRST.
    Keep the data structure in mind whilst creating and compare if it will work
    or not.

    1. Create Header component
    2. Be slow and see what can be a component (anything reusable)
    3. Created Homepage-Hero component. 
        3.1 Overlal it will be a single component with a button comp
    4. Create ProdCategoryLink component
        4.1 Keep in mind to create it as a container of 3. 
    5. Create 'main' for Homepage. It's essentially links to single categories
       of products
    6. Create pre-footer-banner
    7. Creater footer 


-->

<!-- 

	class="btn-primary-homepage"


	class="btn-primary-large" 
 -->
