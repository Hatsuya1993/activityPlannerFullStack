import React from 'react'

type DropDownComponentProps = {
    inputProps : {data: string[]},
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
    classData: string
}

const DropDownComponent : React.FC<DropDownComponentProps> = ({inputProps, onChange, classData}) => {
    return (
        <div>
            <select className={`${classData}`} onChange={onChange} name="" id="">
                {inputProps && inputProps.data && inputProps.data.map((each: string) => (
                    <option key={each} value={each}>{each}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDownComponent