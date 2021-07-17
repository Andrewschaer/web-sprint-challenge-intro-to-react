import React from 'react'
import Character from './Character.js'
import styled from 'styled-components'

const StyledCharacterList = styled.div`
    border: 10px groove gold;
    max-width: 80%;
    margin: auto;
    h3 {
        color: goldenrod;
        font: bold 2rem 'Trebuchet MS';
    }
`

export default function CharacterList(props) {
    const { characters } = props
    const reptiles = ['1 ','2 ','3 ','4 ']
    return (
        <StyledCharacterList className = 'list-characters container'>
            <h3>Learn More About Each Star Wars Character:</h3>
            {characters.map(character => <Character key={character.url} characterData={character} />)} 
        </StyledCharacterList>
    )
}