const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);

// function signJwt(username, jwtPassword) {    
//     const usernameResponse = emailSchema.safeParse(username);
//     const passwordResponse = passwordSchema.safeParse(jwtPassword);
//     if (!usernameResponse.success || !passwordResponse.success) {
//         return null;
//     }

//   const signature = jwt.sign({ username }, jwtPassword);
//   return signature;
// }
const auth= zod.object({
    user:zod.string().email(),
    pass: zod.string().min(6)
})


function signJwt(username, password) {
    if (auth.safeParse({user:username,pass:password}).success){

        const token =jwt.sign({username},password)

        return token
    } else{
        return null
    }
}
function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}