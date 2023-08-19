import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScaledSheet } from "react-native-size-matters";

export default function BannerPrincipal({ cidade, temperatura, descricao, urlImage, pais }) {
    return (


        <LinearGradient
            // colors={['#6E4FCB', '#4f359d']} 
            colors={['#6E4FCB', '#4ff59d']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <View style={styles.linha}>

                <Text style={styles.titulo}>{cidade}</Text>

                <View style={styles.linha}>
                    <Image uri={urlImage} source={{ uri: urlImage }} style={styles.icon} />
                    <Text style={styles.titulo}> {descricao} </Text>
                </View>

            </View>

            <View>
                <Text style={[styles.titulo, styles.subtitulo]}>{pais}</Text>
            </View>

            <View style={styles.containerTemp}>
                <Text style={[styles.titulo, styles.temp]}>{temperatura}</Text>
            </View>

            <View style={styles.retangulo}></View>

        </LinearGradient>


    )
}

const styles = ScaledSheet.create({
    
    gradient: {
        width: '100%',
        aspectRatio: 1.7 / 1,
        borderRadius: 15,
        shadowRadius: 15,
        shadowOpacity: 0.7,
        shadowColor: '#6E4FCB',
        borderRadius: 10,
        padding: '15@s',
        gap: '10@s'
    },

    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxHeight: 20,
    },

    icon: {
        width: '35@s',
        aspectRatio: 1 / 1,
    },

    titulo: {
        color: '#fff',
        fontSize: '15@s',
        fontFamily: 'Helvetica',
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },

    subtitulo: {
        opacity: 0.6,
        fontSize: '12@s',
    },

    temp: {
        fontSize: '90@s',
        opacity: 0.6,
    },
    
    containerTemp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    retangulo: {
        width: '100%',
        alignSelf: 'flex-start',
        backgroundColor: '#9775FD',
        height: '20@s',
        opacity: 0.43,
        borderRadius: 5,
    },
});
