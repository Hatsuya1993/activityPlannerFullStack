import React from 'react'

type InputComponentProp = {
    type: string,
    required: boolean,
    placeholder: string,
    value: React.HTMLInputTypeAttribute,
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputComponent : React.FC<InputComponentProp> = ({placeholder, required, type, value, name, onChange}) => {
    return (
        <input onChange={onChange} name={name} value={value} type={type} required={required} placeholder={placeholder} className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
    )
}

export default InputComponent