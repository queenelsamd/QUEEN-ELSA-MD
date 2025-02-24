const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 𝗵𝗲𝗹𝗹𝗼, 𝗶𝗺 𝗤𝘂𝗲𝗲𝗻 𝗘𝗹𝘀𝗮 𝗶𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
};
