import {writable, get} from 'svelte/store'

import allProducts from './products.js'

const cart = writable([])

const allProds = get(allProducts)

const customCart = {
    cart: cart.subscribe,
    updateQuantity: (slug, quantity) => {
        cart.update(cartStore => {
            let store = [...cartStore]
            let selectedItem = {...cartStore.find(i => i.slug === slug)}
            selectedItem = {
                ...selectedItem,
                unitsSelected: quantity
            }
            let selectedItemIndex = cartStore.findIndex(i => i.slug === slug)
            store[selectedItemIndex] = selectedItem
            return store
            
        })
    },
    deleteAllItems: () => cart.set([]),
    addNewItem: (slug, quantity) => {
        let itemToBeUpdated = customCart.updateIfAddedItemAlreadyInCart(slug, quantity)
        let itemToBeAdded = itemToBeUpdated === false
        if(itemToBeUpdated){
            customCart.updateQuantity(slug, quantity)
        } else if (itemToBeAdded){
            cart.update(cartStore => {
                let productObject = allProds.find(p => p.productSlug === slug)
                cartStore = [
                    ...cartStore,
                    {
                        slug,
                        price: productObject.price,
                        unitsSelected: quantity,
                        shortName: productObject.shortName
                    }
                ]
                console.log(cartStore)
                return cartStore
            })
        }
        console.log(get(cart))
    },
    updateIfAddedItemAlreadyInCart: (slug, quantity) => {
        let tempCart = get(cart)
        let itemAlreadyPresent = tempCart.find(i => i.slug === slug)
        if(itemAlreadyPresent){
            return true
        } else {
            return false
        }
    }
}

export default customCart