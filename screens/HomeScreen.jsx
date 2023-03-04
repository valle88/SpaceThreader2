import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { getUserProfile } from "../services/spaceTraders";

function HomeScreen() {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const fetcUserAccount = async () => {
            const userProfile = await getUserProfile()
            console.log(userProfile)
            setProfile(userProfile)
        }


        fetcUserAccount()
    }, []);

    return (
        <View>
            {
                profile ? <Text> username {profile.user.username} </Text> : <Text>Loading ...</Text>
            }
            
        </View>
    )

    /* Interfaz grafica que se vea bonito y servidor el punto verde y rojo */
}

export default HomeScreen