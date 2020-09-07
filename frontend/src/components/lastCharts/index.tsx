import React, {useEffect} from 'react'

import { Container } from './styles'

import api from '../../api/api'

const LastChart:React.FC = () => {


    useEffect(() => {
        async function GetData(){
            const result = await api.get('/weeks/view/5edc1f66c4226ade2c30135a')
            console.log(result.data.week)
        }

        GetData()
    }, [])
    return (
        <Container>
            <h1>graficos</h1>
        </Container>
    )
}

export default LastChart;