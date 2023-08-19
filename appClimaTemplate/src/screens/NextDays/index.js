import { FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { 
    ContainerMain, 
    Header, 
    Titulo, 
    SubTitulo, 
    ContainerDays, 
    ContainerInner, 
    TituloDias,
    ContainerItem,
    Icone,
    ContainerInfo
    
} from './styles'
import { Themes } from '../../../config'

const Theme = Themes.Default

const dados = [
    { id: 1, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Segunda', data: '05/09', temperatura: 32, maxTemp: 31 },
    { id: 2, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Terça', data: '06/09', temperatura: 22, maxTemp: 33 },
    { id: 3, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Quarta', data: '07/09', temperatura: 12, maxTemp: 21 },
    { id: 4, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Quinta', data: '08/09', temperatura: 18, maxTemp: 15 },
    { id: 5, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Sexta', data: '09/09', temperatura: 2, maxTemp: 1 },
    { id: 6, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Sábado', data: '10/09', temperatura: 25, maxTemp: 9 },
    { id: 7, urlImagem: "http://openweathermap.org/img/wn/10d@4x.png", dia: 'Domingo', data: '11/09', temperatura: 21, maxTemp: 27 }
]

const renderItem = ({ item }) => {
    return (
        <ContainerItem>
            <Icone source={{ uri: item.urlImagem }} />
            
            <ContainerInfo>
                <ContainerInner>
                    <Titulo>{item.dia},</Titulo>
                    <SubTitulo>{item.data}</SubTitulo>
                </ContainerInner>

                <ContainerInner>
                    <Titulo>{item.temperatura}°</Titulo>
                    <SubTitulo>/  {item.maxTemp}</SubTitulo>
                </ContainerInner>
            </ContainerInfo>
        </ContainerItem>
    )
}


export default function proximosDias({ navigation }) {
    return (
        <ContainerMain>
            <Header>
                <AntDesign name="left" size={20} color={Theme.CorTexto} onPress={() => navigation.goBack()} />
                <ContainerInner>
                    <Titulo>Maceió,</Titulo>
                    <SubTitulo>Alagoas</SubTitulo>
                </ContainerInner>
            </Header>

            <TituloDias>Próximos 7 dias</TituloDias>

            <ContainerDays>
                <FlatList
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    
                />
            </ContainerDays>
        </ContainerMain>
    )
}