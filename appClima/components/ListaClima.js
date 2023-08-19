import { View, FlatList, Text } from "react-native";
import Style from '../style/List'

export default function ListaClima({ array }) {


  const renderClima =(objeto) => {
    // Formatar Data
    const data = objeto.data.split(' ')[0]
    const dia = data.split('-')[2]
    const mes = data.split('-')[1]
    const dataFormatada = `${dia}/${mes}`
    
    // Formatar Clima
    const HoraFormatada = objeto.data.split(' ')[1].substr(0, 5)
    
    const climaFormatado = objeto.temp
    console.log(climaFormatado)
    return (
      <View style={Style.item}>
        <Text>{dataFormatada}</Text> 
        <Text>{HoraFormatada}</Text> 
        <Text>{`${climaFormatado}°C`}</Text> 
      </View>
     
    )
  }

  return (
    <View style={Style.container}>
      <FlatList 
      style={Style.FlatList}
        data={array}
        keyExtractor={item => item.data}
        renderItem={({ item }) => renderClima(item)}

      />

</View>
  )
}