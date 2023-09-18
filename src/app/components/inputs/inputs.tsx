'use client'

interface InputsProps {
    type: string,
    vlaue: string,
    onChange :(event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    textarea: boolean,
    id: string,
    placeholder: string,
    big: boolean,

}

export default function Inputs({
    type ,
    vlaue ,
    onChange ,
    name,
    textarea,
    id,
    placeholder,
    big,
}: InputsProps) {
    return (
         <input 
         type={type} 
         placeholder={placeholder} 
         id={id}
         value={vlaue}
         onChange={onChange}
        name={name}
        
        className=""
         /> 
         
    ) 
}