import {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getRequestLoans } from '../services/spaceTraders'
import LoansView from './loanView'






const LoanScreen = ({userToken}) => {

  const [loan, setLoans] = useState({})
  useEffect(() => {
    const requestLoans = async()=>{

       setLoans(await getRequestLoans('ca8ece4b-f75c-4e1f-a4ab-c06b7c9d1acb'))

    }

    requestLoans()
    
  }, [])

  return (
    <View>
      <Text style={styles.titleLoan}>
        AVALIABLE LOANS
      </Text>

      <View>
          <FlatList style={styles.flatList} data={loan} renderItem={(item)=>{

          return(
          <LoansView
            key={item.index}
            loans ={item.item} />
          )

          }}/>
      </View>
        
    </View>
  )
}


const styles = StyleSheet.create({
  titleLoan:{
    fontWeight:"bold",
    marginBottom:20,
    marginTop:20,
    width:"100%",
    textAlign:"center"
  },
  flatList:{
    height:"100%",
    width:"100%"
  }
})
export default LoanScreen
