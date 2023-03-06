
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useEffect } from 'react'

const GoodView = ({ good }) => {
    useEffect(() => {
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.text}> 
                <Text>
                    name: {good.name}
                </Text>
                <Text>
                    symbol: {good.symmbol}
                </Text>
                <Text>
                    volumePerUnit: {good.volumePerUnit}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex'
    },
    text:{
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#3b83bd'
    }
})


export default GoodView
