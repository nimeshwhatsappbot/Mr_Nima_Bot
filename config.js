const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EqlQhIYA#3FuS21dKYa6DM0byPKc_8-Lvp5zHf5wMKXx4GWjamRY",
MONGODB: process.env.MONGODB || "mongodb+srv://nimeshchathurnga:Nimesh123@@cluster0.dtrhu.mongodb.net/",
}:
