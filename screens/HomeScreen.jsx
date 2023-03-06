import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { getUserProfile } from "../services/spaceTraders"

function HomeScreen() {

    const [profile, setProfile] = useState();

    useEffect(() => {
        const fetcUserAccount = async () => {

            const userProfile = await getUserProfile();
            setProfile(userProfile);
        }

        fetcUserAccount()
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/avatar.png')}
                style={styles.img}
            />

            {
                profile ? <Text> username {profile.user.username} </Text> : <Text>Loading ...</Text>
            }
            {
                profile ? <Text> Número de naves: {profile.user.shipCount} </Text> : <Text>Loading ...</Text>
            }
            {
                profile ? <Text> numero de estructuras: {profile.user.structureCount} </Text> : <Text>Loading ...</Text>
            }
            {
                profile ? <Text> Creditos: {profile.user.credits} </Text> : <Text>Loading ...</Text>
            }


        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        marginTop: 30
    },
    img:{
        width: '50%',
        height:'50%'
    }
});

export default HomeScreen