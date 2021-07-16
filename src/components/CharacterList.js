import React from 'react'
import Character from './Character.js'

export default function CharacterList(props) {
    const { characters } = props
    return (
        <div className = 'list-characters container'>
            <h3>Hi There from Characterlist</h3>
            {characters.map(character => <Character key={character.url} characterData={character} />)}
        </div>
    )
}