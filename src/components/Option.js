import React from 'react'

export const Option = () => {
    return (
        <label htmlFor="" className="container">
            One
            <input type="radio" checked="checked" name="radio" />
            <span className="checkmark"></span>
        </label>
    )
}

export default Option;