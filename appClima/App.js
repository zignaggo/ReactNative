import { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import SearchField from './components/SearchField'
import config from './config'
import Style from './style/style'
import ListaClima from './components/ListaClima'

export default function App() {
    
    const [cidade, setCidade] = useState('Maceió')
    const [listaClima, setListaClima] = useState([])
    const [carregando, setCarregando] = useState({ status: true, mensagem: 'Carregando...' })


    const buscaCordenadas = async (cidade) => {

        try {
            setCarregando({ status: true, mensagem: 'Carregando...' }) // importante para evitar o undefined

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${config.OpenWeatherKey}&lang=${config.Linguagem}`)

            const data = await response.json()

            // Retirar a Latitude, Longitude, Nome e Sigla 
            const dados = retiraCordenadas(data)

            // Buscar o clima completo da cidade pelos dados colhidos
            buscaClima(dados.latitude, dados.longitude)

        } catch (error) {
            setCarregando({ status: true, mensagem: 'Não encontrado' })
            console.log('erro!', error)
        }
    }

    const retiraCordenadas = (objetoAPI) => { // referente a 1° consulta
        const { name, coord, sys } = objetoAPI
        const { lon, lat } = coord
        const { country } = sys

        return {
            nome: name,
            latitude: lat,
            longitude: lon,
            sigla: country,
        }
    }

    const buscaClima = async (latitude, longitude) => {

        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${config.OpenWeatherKey}&units=metric`) // Não mexa nas URL's já estão certas

            const data = await response.json()

            const lista = pegaLista(data)

            setListaClima(lista)
            setCarregando({ status: false, mensagem: 'pronto' })

        } catch (error) {
            setCarregando({ status: true, mensagem: 'Não encontrado!' })
            console.log('Erro: ' + error)
        }
    }


    const pegaLista = (objetoAPI) => {
        const { list } = objetoAPI
        return list.map((item) => retiraClima(item))
    }

    const retiraClima = (lista) => {
        const { main, weather, wind, dt_txt } = lista
        const { temp, feels_like, temp_min, temp_max, pressure } = main
        const { description, icon } = weather[0]
        const { speed } = wind

        return {
            temp: temp,
            sensacao: feels_like,
            tmin: temp_min,
            tmax: temp_max,
            pressao: pressure,
            desc: description,
            icone: icon,
            velo_vento: speed,
            data: dt_txt,
        }
    }

    const getIconUrl = (codigoIcone) => {
        return `http://openweathermap.org/img/wn/${codigoIcone}@2x.png`
    }


    useEffect(() => {
        console.log(cidade)
        buscaCordenadas(cidade) // não adianta trocar esse parâmetro, o React 'obriga' que seja passado o parâmetro do useState
    }, [cidade])


    // acessar os dados dos dias é 'listaClima[dia relativo].propriedade'

    // O searchField chama uma função depois de um determinado tempo que o usuário para de digitar

    // Se ficar aparecendo 'Carregando...' é porque deu erro em algum lug

    return (
        <View style={Style.container}>
            <SearchField funcao={setCidade} ></SearchField>
            <Text>{cidade}</Text>
            {carregando.status ? <Text> {carregando.mensagem} </Text> : <ListaClima array={listaClima} />}
        </View>
    )
}