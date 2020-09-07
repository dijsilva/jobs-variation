import React from 'react'
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'

import styled from 'styled-components'

import { IULanguages } from '../../interfaces/languages'

interface Data {
    data: IULanguages[],
    title: String,
}

const Container = styled.div`
    height: 100%;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 22px;
        margin-bottom: 5px;
    }
`


const BarChartComp:React.FC<Data> = (props) => {
    return (
        <Container>
            <h2>{props.title}</h2>
            <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="language" height={40}>
                        <Label value="Linguagens" offset={0} position="insideBottom" dy={1} />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="jobs" fill="#0077B5" />
                    </BarChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default BarChartComp;