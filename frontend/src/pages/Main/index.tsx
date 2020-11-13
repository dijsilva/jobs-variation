import React from 'react'

import { Container, Title, ShortDescription, Content, Buttons, Button } from './styles'

import BarChartOfLastWeek from '../../components/BarChartOfLastWeek'

const Main:React.FC = () => {
    return(
        <Container>
            <Content>
            <Title>Variação no número de vagas publicadas em função do tempo (em semanas) </Title>
            <ShortDescription>Número de vagas de trabalho ao longo das últimas semanas. Os dados são obtidos por meio de um crawler que pega os dados do LinkedIn e da Catho para 4 cidades brasileiras.</ShortDescription>
            <ShortDescription>O código está disponível <strong><a rel="noopener noreferrer" target="_blank" href="https://github.com/dijsilva/jobs-variation">aqui.</a></strong></ShortDescription>

            <Buttons>
                <Button selected={true} typeStyle="LINKEDIN">Linkedin</Button>
                <Button selected={false}  >Catho</Button>
            </Buttons>

            <Title>Quantidade de vagas nessa semana</Title>

            <BarChartOfLastWeek />            
            </Content>
        </Container>
    )
}

export default Main;