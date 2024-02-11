const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// function signJwt(username, jwtPassword) {    
//     const usernameResponse = emailSchema.safeParse(username);
//     const passwordResponse = passwordSchema.safeParse(jwtPassword);
//     if (!usernameResponse.success || !passwordResponse.success) {
//         return null;
//     }

//   const signature = jwt.sign({ username }, jwtPassword);
//   return signature;
// }
function signJwt(username, password) {
    const usr = zod.string().email();
    const pwd = zod.string().length(6);
    try {
        if (usr.parse(username) && pwd.parse(password)){
            const token = jwt.sign({username,password}, jwtPassword)
            console.log(token);
            return token;
        }
    } catch (error) {
        return null;
    }
}
// const auth= zod.object({
//     user:zod.string().email(),
//     pass: zod.string().min(6)
// })


// function signJwt(username, password) {
//     if (auth.safeParse({user:username,pass:password}).success){

//         const token =jwt.sign({username},password)

//         return token
//     } else{
//         return null
//     }
// }
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

// function verifyJwt(token) {
//     jwt.verify(token, jwtPassword, function(err){
//         if(!err) return true;
//         else return false;
//     })
// }

// function decodeJwt(token) {
//     jwt.decode(token, function(err){
//         if(err) return false;
//         else return true;
//     })
// }

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}