const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "WfglxL6Z#b0eantiFdPr2_jBeb_ju7ibjdITmwGr5WWP7vC_1LQA",
    MONGODB: process.env.MONGODB || "",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/queenelsamd/Queen-Elsa-help-/blob/main/Vmake1740248561141%20(1).png?raw=true",
    ALIVE_MSG: process.env.ALIVE_MSG || "👋 𝗵𝗲𝗹𝗹𝗼, 𝗶𝗺 𝗤𝘂𝗲𝗲𝗻 𝗘𝗹𝘀𝗮 𝗶𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true"
};
