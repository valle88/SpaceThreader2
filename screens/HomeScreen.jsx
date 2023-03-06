import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
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
            {
                profile ? <Text> Se unio en:  {profile.user.joinedAt} </Text> : <Text>Loading ...</Text>
            }

        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    }
});

export default HomeScreen