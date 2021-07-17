// Write your Character component here
import React from 'react'
import CharacterDetails from './CharacterDetails.js'
import styled from 'styled-components'

const StyledCharacters = styled.div`
    border: 2px dotted goldenrod;
    margin: 1.5% auto;
    max-width: 80%;
    color:dodgerblue;
    font: 1.3rem 'Trebuchet MS';
    &:hover {
        transition: 0.8s ease-in-out;
        color: firebrick;
    }
`

export default function Character(props) {
    const { characterData } = props
    return (
        <StyledCharacters className='character-container'>
            <h4>{characterData.name}</h4>
            <CharacterDetails characterData={characterData} />
        </StyledCharacters>
    )
}