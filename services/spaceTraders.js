import * as credentials from '../credentials.json'

const endPoinsts = {
    userProfie: `https://api.spacetraders.io/my/account?token="980c66ae-9c79-4711-a1b8-10c12291c51b`,
    newUser : `https://api.spacetraders.io/users/:username/claim`
}

export const getUserProfile = async () => {

    try {
        console.log("Estoy pidiendo los datos")

        const response = await fetch(endPoinsts.userProfie)
        const data = await response.json();

        console.log(data)

        return data
    } catch (error) {
        console.error(error)
        return {}
    }
    
}