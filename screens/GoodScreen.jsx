import {useEffect, useState} from 'react'
import { FlatList, View } from 'react-native'
import { getRequestGood } from '../services/spaceTraders'

const GoodScreen = ({userToken}) => {
    const [good, setGood] = useState({})

    useEffect(() => {
        const requestGood = async()=>{
            setGood(await getRequestGood('ca8ece4b-f75c-4e1f-a4ab-c06b7c9d1acb'))
        }

        requestGood();
    
    }, [])
  return (
    <View>
      <FlatList data={good} renderItem={(item)=>{
        <GoodView 
        key={item.index}
        good={item.item} />
        
      }}/>

     
    </View>
  )
}

export default GoodScreen
