import { ScrollView, FlatList } from "react-native"
import { ScaledSheet } from 'react-native-size-matters'
import ItemCrss from "./ItemCrss"


const dados = [
	{ id: 1, horario: '12:00', temperatura: '29°', atual: true, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 2, horario: '14:00', temperatura: '14°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 3, horario: '16:00', temperatura: '11°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 4, horario: '18:00', temperatura: '23°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 5, horario: '20:00', temperatura: '21°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 6, horario: '21:00', temperatura: '17°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
	{ id: 7, horario: '22:00', temperatura: '8°', atual: false, urlImage: 'http://openweathermap.org/img/wn/10d@4x.png' },
]

const renderItem = ({ item }) => {
	return (
		<ItemCrss horario={item.horario} temperatura={item.temperatura} atual={item.atual} urlImage={item.urlImage} />
	)
}

export default function Carrossel() {
	return (

		<FlatList
			style={styles.container}
			data={dados}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		/>

	)
}

const styles = ScaledSheet.create({
	container: {
		width: '100%',
		marginTop: '20@s',
	},
})