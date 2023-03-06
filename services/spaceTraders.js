import * as credentials from '../credentials.json'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=980c66ae-9c79-4711-a1b8-10c12291c51b`,
    newUser: `https://api.spacetraders.io/users/:username/claim`
}
const getUserProfile = async () => {

    try {

        const response = await fetch(endpoints.userProfile)
        const data = await response.json();

        return data
    } catch (error) {
        console.log("ds")
        console.error(error)
        return {}
    }

}


const getRequestLoans = async (token) => {
    try {
        const response = await fetch(`http://api.spacetraders.io/types/loans/?token=${token}`)
        const data = await response.json()
        console.log(data)
        return data.loans
    } catch (err) {
        console.log(err);
    }
}
const getRequestGood = async (token) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/types/goods?token=980c66ae-9c79-4711-a1b8-10c12291c51b`)
        const data = await response.json()
        console.log(data)
        return data.goods
    } catch (err) {
    }
}
export {
    getUserProfile,
    getRequestLoans,
    getRequestGood
}