import { Text, View, Image } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { Themes } from '../../config/index.json'

const Theme = Themes.Default

export default function ItemCrss({ urlImage, horario, temperatura, atual = false }) {

  const verificaAtivo = () => {
    if (atual) return styles.blue
    return {}
  }

  return (
    <View style={[styles.container, verificaAtivo()]}>
      <Text style={[styles.texto, verificaAtivo()]}> {horario} </Text>
      <Image source={{ uri: urlImage }} style={styles.imagem} />
      <Text style={[styles.texto, verificaAtivo(), { fontWeight: 'bold' }]}>{atual ? "Atual" : temperatura}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '60@s',
    height: '100@s',
    alignItems: 'center',
    borderWidth: '1@s',
    borderColor: Theme.CorBorderCard,
    padding: '5@s',
    marginRight: '7@s',
    borderRadius: '10@s',
    gap: '10@s',
  },

  imagem: {
    width: '100%',
    flexGrow: 1,
  },

  texto: {
    fontSize: '10@s',
    color: Theme.CorTitulo,
  },

  blue: {
    borderColor: Theme.CorCard,
    color: Theme.CorTexto,
    backgroundColor: Theme.CorCard,
  },
})