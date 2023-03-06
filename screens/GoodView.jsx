
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useEffect } from 'react'

const GoodView = ({ good }) => {
    useEffect(() => {
    }, [])
    return (
        <View>
            <View>
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


export default GoodView
