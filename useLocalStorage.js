import {useEffect, useState} from 'react'


const PREFIX = 'codeshare-key-'
export default function useLocalStorage(key, initailValue) {
    const PREFIXEDKEY = PREFIX +  key
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(PREFIXEDKEY)
        
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initailValue === 'function'){
            return initailValue()
        }else{
            return initailValue
        }
    })

    useEffect(() => {
       localStorage.setItem(PREFIXEDKEY, JSON.stringify(value));
    }, [PREFIXEDKEY, value])
    
    return [value, setValue]
}


