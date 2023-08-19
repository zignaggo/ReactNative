import { TextInput, View } from 'react-native';
import { useState } from 'react';
import { ScaledSheet } from "react-native-size-matters";

export default function SearchField({ funcao }) {

    const [timer, setTimer] = useState(null)

    const inputChanged = (value, funcao) => {

        clearTimeout(timer)
    
        const newTimer = setTimeout(() => {
          funcao(value)
         
        }, 1000)
    
        setTimer(newTimer)
    }

    return (
        <View style={styles.linha} >
            <TextInput 
            style={styles.input}
            
            multiline={false}
            onChangeText={text => inputChanged(text, funcao)}
            />
        </View>
    );

    
}

const styles = ScaledSheet.create({
    linha: {
        width: '100%',
        flexDirection: 'row',
    },

    input: {
        width:'100%',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#6E4FCB',
        marginRight: 15,
        padding: 3,
    },
});

