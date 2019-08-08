import React from 'react';
import './TextInput.css'

export default function TextInput(props){
    return (
        <>
        <input type="search" id="card_textentry" placeholder="Enter your username" value = {props.username} onChange = {props.onChange}></input>
        <button id="btn--click" onClick = {props.clickHandler}>Enter</button>
        </>
    )
}