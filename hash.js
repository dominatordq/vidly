const bcrypt = require('bcrypt');

// Pass: 1234 -> (after hash) abcd
// We need a Salt: a random string that is added before or after a password, so the resulting 
//                 hash password will be different each time based on the salt that is used

async function run() {
    const salt = await bcrypt.genSalt(10);  // genSalt(<# of rounds you want to generate salt>, <optional: callback>)
    
    // use salt to hash our password
    const hashword = await bcrypt.hash('1234', salt);

    console.log(salt);
    console.log(hashword);
}
run();