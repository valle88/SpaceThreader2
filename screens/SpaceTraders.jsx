import { StyleSheet, Text, Pressable, Modal, View, Image} from 'react-native'
import { useState, useEffect} from 'react';
import { getUserProfile } from "../services/spaceTraders";

const SpaceTraders = () => {

    const [ showMovementInput, setShowMovementInput ] = useState( true );

    const [profile, setProfile] = useState({})

    useEffect(() => {
        const fetcUserAccount = async () => {
            const userProfile = await getUserProfile()
            setProfile(userProfile);
        }

        fetcUserAccount()
    }, []);


    return (
        <View>
            <Modal visible = { showMovementInput } animationType = { 'fade' }>
                <Pressable onPress={() => {setShowMovementInput(false)}} style = {({ pressed }) => [
                    {
                        backgroundColor: pressed
                        ?  "red"
                        :  "green"
                    },
                    styles.pressableStyle
                ]}>
                    <Text style = { styles.newMovement }> Login </Text>
                </Pressable>
            </Modal>
            <View>
                <Image style = { styles.icon } source = { require('../assets/avatar.png') } />
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    pressableStyle: {
        position: 'absolute',
        right: 150,
        bottom: 380,
        borderRadius: 10
    },

    newMovement: {
        textAlign: 'center',
        width: 100,
        padding: 10,
        borderRadius: 50,
        fontSize: 20
    },

    icon: {
        width: 200,
        height: 200,
        margin: 5,
    },

});

export default SpaceTraders

