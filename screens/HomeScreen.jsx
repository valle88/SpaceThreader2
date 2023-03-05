import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import spaceTraders  from "../services/spaceTraders"

function HomeScreen() {

    const [profile, setProfile] = useState();

    useEffect(() => {
        const fetcUserAccount = async () => {
            const userProfile = await spaceTraders.getUserProfile();
            setProfile(userProfile);
        }


        fetcUserAccount()
    }, []);

    return (
        <View>
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

    /* Interfaz grafica que se vea bonito y servidor el punto verde y rojo */
}

export default HomeScreen