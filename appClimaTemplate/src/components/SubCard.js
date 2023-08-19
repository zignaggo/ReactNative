import { Text, View} from "react-native"
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Themes } from '../../config/index.json'
import { ScaledSheet } from 'react-native-size-matters'

const Theme = Themes.Default

export default function SubCard({ titulo, info, tipo, borderRight, radiosRight, radiosLeft }) {

    const verificaIcone = (type) => {
        switch (type) {
            case 1:
                return <Feather name="wind"  color="#fff" style={styles.icone}/>
            case 2:
                return <Ionicons name="thermometer-sharp"  color="#fff" style={styles.icone}/>
            case 3:
                return <Entypo name="light-up"  color="#fff" style={styles.icone}/>
            case 4:
                return <Entypo name="line-graph"  color="#fff" style={styles.icone}/>
        }
    }

    return (
        <View style={[styles.containerPrincipal, { borderRightWidth: borderRight, borderBottomRightRadius: radiosRight, borderBottomLeftRadius: radiosLeft }]}>
            <View style={styles.icone}>
                {verificaIcone(tipo)}
            </View>
            <View style={styles.info} >
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    containerPrincipal: {
        width: '50%',
        padding: '10@s',
        backgroundColor: Theme.CorCard,
        borderColor: Theme.CorTexto,
        padding: '20@s',
        borderTopWidth: '1@s',
        borderRightWidth: '1@s',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: '15@s',
    },

    info: {
        fontSize: '12@s',
        flexGrow: 1,
        alignItems: 'flex-start',
        color: Theme.CorTexto,
        fontWeight: 'bold',
    },

    titulo: {
        fontSize: '10@s',
        color: Theme.CorSubTitulo,
    },

    icone: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25@s',
    },
})