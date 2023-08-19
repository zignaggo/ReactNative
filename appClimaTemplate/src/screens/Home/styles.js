import { ScaledSheet } from 'react-native-size-matters'
import { Themes } from '../../../config'

const Theme = Themes.Default

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.CorFundo,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20@s',
  },

  containerTitulo: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '20@s',
    marginBottom: '10@s',
    gap: '10@s',
  },

  titulo: {
    fontSize: '20@s',
    fontWeight: 'bold',
  },

  subTitulo: {
    fontSize: '15@s',
    color: Theme.CorSubtituloOut,
  },

  containerIcons: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '10@s',
    paddingBottom: '20@s',
  },

  carrosselText: {
    width: '100%',
    marginTop: '40@s',
  },

  linha: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  icone: {
    marginLeft: '5@s',
    fontSize: '20@s',
  },
})