import {useEffect, useState} from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { getRequestGood } from '../services/spaceTraders'
import GoodView from './GoodView'

const GoodScreen = ({userToken}) => {
    const [good, setGood] = useState([])

    useEffect(() => {
        const requestGood = async()=>{
            setGood(await getRequestGood('980c66ae-9c79-4711-a1b8-10c12291c51b'))
        }

        requestGood();
    
    }, [])
  return (
    <View style={styles.container}>
      <FlatList style={styles.flait} data={good} renderItem={(item)=>{
        return(
            <GoodView
            key={item.index}
            good={item.item} />
        )
      }}/>

     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        with: '100%'
    },
    flait:{
        margin: 10
    }
})

export default GoodScreen
