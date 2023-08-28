const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async ( PlaintextPassword ) => {

    const hashedPassword = await bcrypt.hash(PlaintextPassword, saltRounds)
    console.log(hashedPassword)
    return Promise.resolve(hashedPassword)

}
const checkPasswordIntegrity = async ( hash ,  deliveredPassword ) =>{

    try {

        const result = await bcrypt.compare(deliveredPassword, hash);
        console.log(result)
        return result
        
    } catch (error) {
        
    }
    

}

module.exports = {

    hashPassword ,
    checkPasswordIntegrity
}