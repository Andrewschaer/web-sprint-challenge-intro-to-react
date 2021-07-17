import React from 'react'
import styled from 'styled-components'

const StyledCharacterDetails = styled.div`
    border: 1px dotted goldenrod;
    margin: 1.5% auto;
    max-width: 50%;
    color:greenyellow;
    font: 1.1rem 'Trebuchet MS';
    &:hover {
        transition: 0.8s ease-in-out;
        color: whitesmoke;
    }
`
export default function CharacterDetails(props) {
    const { characterData } = props
    console.log('this is', characterData)
    return (
        <StyledCharacterDetails className='character-container'>
            <h5>Birth Year: {characterData.birth_year}</h5>
            <h5>Gender: {characterData.gender}</h5>
            <h5>Height: {characterData.height}</h5>
            <h5>Mass: {characterData.mass}</h5>
        </StyledCharacterDetails>
    )
}