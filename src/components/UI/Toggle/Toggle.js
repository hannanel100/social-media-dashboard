import React from 'react'

const Toggle = () => {
    return (
        <label htmlFor="toggle">
            Dark Mode
            <input type="checkbox" id="toggle" data-testid="toggle"></input>
        </label>
    )
}

export default Toggle
