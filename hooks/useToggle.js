import { useState } from "react"

export default function useToggle(defaultValue){
    const [value, setValue] = useState(defaultValue)
    function toggle(newValue){
        setValue(value => typeof newValue === 'boolean' ? newValue : !value)
    }

    return [value, toggle]
}