import React, {useEffect, useState} from 'react'

function Storage({render}) {
    const [localStorageAvailable, setLocalStorageAvailable] = useState(false)
    
    const checkIfLocalStorageExists = () => {
        const testKey = 'test'
        try {
            localStorage.setItem(testKey,testKey)
            localStorage.removeItem(testKey)
            setLocalStorageAvailable(true)
        } catch (e) {
            return e.message
        }
    }

    useEffect(() => {
        checkIfLocalStorageExists()
    })

    const load = (key) => {
        if (localStorageAvailable) {
            return localStorage.getItem(key)
        }
        return null
    } 

    const save = (key, data) => {
        if(localStorageAvailable) {
            localStorage.setItem(key, data)
        }
    }

    const remove = (key) => {
        if(localStorageAvailable) {
            localStorage.removeItem(key)
        }
    }

    return render({
        save: save,
        load: load,
        remove: remove
    })
}

export default Storage