import { writable, get } from 'svelte/store'

import allProducts from './products.js'

const cart = writable([])

const allProds = get(allProducts)

const customCart = {
    subscribe: cart.subscribe,
    setCart: (storeItems) => {
        cart.set(storeItems)
    },
    updateQuantity: (slug, quantity) => {
        cart.update(cartStore => {
            let store = [...cartStore]
            let selectedItem = { ...cartStore.find(i => i.slug === slug) }
            selectedItem = {
                ...selectedItem,
                unitsSelected: quantity,
                itemTotal: selectedItem.price * quantity
            }
            let selectedItemIndex = cartStore.findIndex(i => i.slug === slug)
            store[selectedItemIndex] = selectedItem
            localStorage.setItem('productsStore', JSON.stringify(store))
            return store
        })
    },
    deleteAllItems: () => {
        cart.set([])
        localStorage.removeItem('productsStore')
    },
    addNewItemOrUpdateExisting: (slug, quantity) => {
        let itemToBeUpdated = customCart.updateQuantityItemIfAlreadyInCart(slug, quantity)
        let itemToBeAdded = itemToBeUpdated === false
        if (itemToBeUpdated) {
            customCart.updateQuantity(slug, quantity)
        } else if (itemToBeAdded) {
            customCart.addNewItem(slug, quantity)
        }
    },
    addNewItem: (slug, quantity) => {
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
            localStorage.setItem('productsStore', JSON.stringify(cartStore))
            return cartStore
        })
    },
    updateQuantityItemIfAlreadyInCart: (slug, quantity) => {
        let tempCart = get(cart)
        let itemAlreadyPresent = tempCart.find(i => i.slug === slug)
        if (itemAlreadyPresent) {
            return true
        } else {
            return false
        }
    },
    setStoreFromLocalStorage: () => {
        let storeItems = JSON.parse(localStorage.getItem('productsStore'))
        console.log(storeItems)
        if(!storeItems){
            return
        } else {
            cart.set(storeItems)
        }
    }
}

export default customCart