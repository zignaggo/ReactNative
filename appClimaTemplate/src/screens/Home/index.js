import { Text, View, SafeAreaView } from 'react-native'
import { styles } from './styles'
import Card from '../../components/Card'
import Carrossel from '../../components/Carrossel'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'


export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.containerIcons}>
          <FontAwesome5 name="grip-lines" style={styles.icone} color="black" />
          <Entypo name="dots-three-horizontal" style={styles.icone} color="black" />
        </View>

        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Maceió,</Text>
          <Text style={styles.subTitulo}>Alagoas</Text>
        </View>

        <Card />

        <View style={[styles.carrosselText, styles.linha]}>

          <Text style={styles.titulo}>Hoje</Text>

          <View style={styles.linha}>
            <Text style={styles.subTitulo} onPress={() => navigation.navigate('NextDays')}>Próximos 7 dias</Text>
            <MaterialIcons name="keyboard-arrow-right" color='grey' style={styles.icone} />
          </View>
        </View>

        <Carrossel />

      </View>
    </SafeAreaView>
  )
}
