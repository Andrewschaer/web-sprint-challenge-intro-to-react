// Write your Character component here
import React from 'react'

export default function Character(props) {
    const { characterData } = props
    console.log(characterData.name)
    return (
        <div className='character-container'>
            <h4>{characterData.name}</h4>
        </div>
    )
}