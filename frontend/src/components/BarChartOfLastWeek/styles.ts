import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
` 