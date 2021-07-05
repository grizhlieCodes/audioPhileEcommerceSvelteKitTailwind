import {writable} from 'svelte/store'

const user = writable({})

const customUser = {
    subscribe: user.subscribe,
    updateUserInfo: (data) => {
        user.set(data)
        localStorage.setItem('userData',JSON.stringify(data))
    },
    deleteUserInfo: () => {
        user.set(null)
        localStorage.removeItem('userData')
    },
    setUserFromLocalStorage: () => {
        let data = JSON.parse(localStorage.getItem('userData'))
        user.set(data)
    },
}


export default customUser