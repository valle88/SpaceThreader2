import {Text, View, Pressable, StyleSheet} from 'react-native'
import { useEffect } from 'react'


const LoansView = ({loans})=>{

    useEffect(()=>{
        console.log(loans)    
    },[])

    return(
        <View style={styles.containerLoan}>
            <View style={styles.containerInfo}>
                <Text>
                    amount: {loans.amount}
                </Text>
                <Text>
                    rate: {loans.rate}
                </Text>
                <Text>
                    termInDays: {loans.termInDays}
                </Text>
                <Text>
                    type: {loans.type}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerLoan:{
        width:"100%",
        height:"100%",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"center"
       
    },
    containerInfo:{
        height:"100%",
        width:"50%",
        backgroundColor:"gray",
        padding: 10
    }
})

export default LoansView