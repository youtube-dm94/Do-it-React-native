import {useState, useCallback} from 'react'

export const toggle = 
    (initialValue: boolean=false, deps: any[] = []): [boolean, () => void] => {
        const [value, setValue] = useState(initialValue)
        const toggleValue = useCallback(() => setValue((value) => !value), deps)
        return [value, toggleValue]
    }