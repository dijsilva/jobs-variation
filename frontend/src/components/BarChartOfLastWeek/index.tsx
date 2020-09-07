import React, {useEffect, useState} from 'react'
import api from '../../api/api'
import {IULanguages} from '../../interfaces/languages'
import BarChartComp from '../BarChartComp'

import { Container } from './styles'


const BarChartOfLastWeek:React.FC = () => {
    const [languages_bsb, setLanguages_bsb] = useState<IULanguages[]>([])
    const [languages_sp, setLanguages_sp] = useState<IULanguages[]>([])
    const [languages_mg, setLanguages_mg] = useState<IULanguages[]>([])
    const [languages_sc, setLanguages_sc] = useState<IULanguages[]>([])
    const [theme, setTheme] = useState('LINKEDIN')

    useEffect(() => {
        async function GetData(){
            const result = await api.get('/weeks/view/5edc1f66c4226ade2c30135a')
            const bsb = result.data.week.languages.filter((language:IULanguages) => {
                return language.state == "BSB" && language.source_site == theme
            })
            const mg = result.data.week.languages.filter((language:IULanguages) => {
                return language.state == "MG" && language.source_site == theme
            })
            const sp = result.data.week.languages.filter((language:IULanguages) => {
                return language.state == "SP" && language.source_site == theme
            })
            const sc = result.data.week.languages.filter((language:IULanguages) => {
                return language.state == "SC" && language.source_site == theme
            })

            setLanguages_bsb(bsb)
            setLanguages_mg(mg)
            setLanguages_sp(sp)
            setLanguages_sc(sc)
        }

        GetData()
    }, [])
    return (
        <Container>
            <BarChartComp  data={languages_bsb} title={"Vagas em BSB"}/>
            <BarChartComp  data={languages_sp} title={"Vagas em SP"} />
            <BarChartComp  data={languages_mg} title={"Vagas em MG"} />
            <BarChartComp  data={languages_sc} title={"Vagas em SC"} />
        </Container>
    )
}

export default BarChartOfLastWeek;