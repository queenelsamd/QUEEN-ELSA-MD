const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async (conn, msg, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins }) => {
    try {
        await conn.sendMessage(from, { 
            image: { url: config.ALIVE_IMG }, 
            caption: config.ALIVE_MSG 
        }, { quoted: msg });
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { text: `Error: ${e.message}` }, { quoted: msg });
    }
});
