
const zod = require('zod');
const userSchema = zod.object({
    name:zod.string(),
    email:zod.string(),
    password:zod.string()
});

module.exports = userSchema;