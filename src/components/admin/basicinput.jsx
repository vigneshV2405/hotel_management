import React from 'react'

function Basicinput({className,placeholder,onChange,value,type}) {
  return (
    <input
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
    >
    </input>
  )
}

export default Basicinput