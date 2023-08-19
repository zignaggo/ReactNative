import { Text, View, StyleSheet } from "react-native"
import SubCard from "./SubCard"
import CardPrincipal from "./CardPrincipal"
import { Themes } from '../../config/index.json'

const Theme = Themes.Default

export default function Card() {
    return (
        <View style={styles.ContainerPrincipal}>
            <CardPrincipal titulo='Tá Chuva' urlImagem="http://openweathermap.org/img/wn/10d@4x.png" subTitulo="Quarta-feira, 31/08" temperatura='28°C' style={styles.infoCard} />

            <View style={styles.subCardsContainer}>
                <SubCard titulo='Vento' info='19km/h' tipo={1} />
                <SubCard titulo='Sensação' info='25°C' tipo={2} borderRight={0} />
                <SubCard titulo='Índice UV' info='2' tipo={4} radiosLeft={20} />
                <SubCard titulo='Pressão' info='1014 mbar' radiosRight={20} borderRight={0} tipo={3} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerPrincipal: {
        backgroundColor: Theme.CorCard,
        width: '100%',
        borderRadius: 20,
    },

    subCardsContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.CorTexto,
    }
})