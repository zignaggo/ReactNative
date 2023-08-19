import { Text, View, Image } from "react-native"
import { Themes } from '../../config/index.json'
import { ScaledSheet } from 'react-native-size-matters'
const Theme = Themes.Default

export default function CardPrincipal({ titulo, subTitulo, urlImagem, temperatura }) {

    return (
        <View style={styles.cardPrincipal}>
            <Image
                source={{ uri: urlImagem }} style={styles.Image}>
            </Image>
            <Text style={[styles.titulo, styles.color]}>{titulo}</Text>
            <Text style={[styles.subTitulo]}>{subTitulo}</Text>
            <Text style={[styles.temperatura, styles.color]}>{temperatura}</Text>
        </View>
    )
}

const styles = ScaledSheet.create({
    Image: {
        width: '150@s',
        height: '80@s',
        marginVertical: '20@s',
    },

    cardPrincipal: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25@s'
    },

    titulo: {
        fontSize: '25@s',
    },

    subTitulo: {
        fontSize: '14@s',
        color: Theme.CorSubTitulo,
        paddingBottom: '10@s'
    },

    color: {
        color: Theme.CorTexto,
    },

    temperatura: {
        fontSize: '65@s',
    }
})