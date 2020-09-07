import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Content = styled.div`
    max-width: 60%;
    padding-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`

export const ShortDescription = styled.p`
    font-size: 16px;
    margin: 5px 0;
    text-align: center;
    width: 80%;

    a {
        text-decoration: none;
        color: black;
    }
`

export const Buttons = styled.div`
    margin: 26px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

interface ButtonProps {
    typeStyle?: String,
    selected?: boolean,
}

export const Button = styled.button<ButtonProps>`
    height: 30px;
    min-width: 120px;
    margin: 0 20px;
    border-radius: 4px;
    border: 0;
    font-weight: bold;
    font-size: 14px;
    background: ${({typeStyle}: ButtonProps) => typeStyle?.toUpperCase() === 'LINKEDIN' ? '#0077B5' : '#F61590'};
    color: ${({typeStyle}: ButtonProps) => typeStyle?.toUpperCase() === 'LINKEDIN' ? 'white' : '#0023A0'};
    cursor: pointer;
    opacity: ${({selected}: ButtonProps) => selected ? 1 : 0.6}
`