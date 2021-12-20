import React from 'react'
import { FirstName } from '../App';


//React hooks provide a concept  call context
//REact Context API allows you to easily access data at
//diiferent levels of the component tree, 
//without passing prop to every level

//Component A
const ComA = () => {
    return(
        <>
        
        <ComB />
        </>
        
    )
};

//Component B
const ComB = () => {
    return(
        <ComC /> 
    )
};

//Component C
const ComC = () => {
    return(
        <>
        <FirstName.Consumer>
        {(fname)=>{
            return (
                <div>FirstName:{fname}</div>
            )
            
        }}
        </FirstName.Consumer>
        
        </>
        
    )
};

const UseContextHook = () => {
    return (
       <ComA />
    )
}

export default  UseContextHook;

