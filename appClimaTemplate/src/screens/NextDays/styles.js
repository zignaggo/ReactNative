import { ScaledSheet } from 'react-native-size-matters'
import styled from 'styled-components/native'
import { Themes } from '../../../config'

const Theme = Themes.Default


export const ContainerMain = styled.View`
    flex: 1;
    padding: 8vw;
    gap: 5%;
    justify-content: center;
    align-items: center;
    background-color: #477fff;
`
export const Header = styled.View`
    width: 100%;
    justify-content: flex-start;
    gap: 25%;
    flex-direction: row;
    align-items: center;
`
export const ContainerDays = styled.View`
    width: 100%;
    flex-grow: 1;
    gap: 1rem;
`

export const ContainerInner = styled.View`
    flex-direction: row;
    gap: 0.5rem;
`

export const Titulo = styled.Text`
    font-size: clamp(2vw, 5vw, 8vw);
    color: #fff;
    font-weight: 700;
`
export const SubTitulo = styled(Titulo)`
    font-weight: 200;
`
export const TituloDias = styled(Titulo)`
    flex-direction: column;
    align-self: flex-start;
`


// Item e Lista do item

export const ContainerItem = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 3vh 0;
    
`
export const ContainerInfo = styled.View`
    flex-grow: 1;
    margin-left: clamp(0.5rem, 1.5rem, 3rem);
    justify-content: space-between;
    flex-direction: row;

`
export const Icone = styled.Image`
    width: clamp(10vw, 50px, 15vw);
    aspect-ratio: 1.8 / 1;
`
