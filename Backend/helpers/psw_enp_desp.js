const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {


    encrypt_password: async (password) => {
        var hash = await bcrypt.hash(password, saltRounds)
        return hash

    },


    decrypt_password: async (password, encPwd) => {
        // Load hash from your password DB.
        let result = await bcrypt.compare(password, encPwd)
        return result


    }
}