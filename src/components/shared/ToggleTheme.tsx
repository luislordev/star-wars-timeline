import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { ChangeEvent, useEffect, useState } from 'react'

export const ToggleTheme = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme)
    }, [theme])

    const handleToggle = (evt: ChangeEvent<HTMLInputElement>) =>
        evt.target.checked ? setTheme('dark') : setTheme('light')

    return (
        <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
                <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={theme === 'light' ? false : true}
                />
                <span className='swap-on'>
                    <FontAwesomeIcon icon={faSun} />
                </span>
                <span className='swap-off'>
                    <FontAwesomeIcon icon={faMoon} />
                </span>
            </label>
        </button>
    )
}
