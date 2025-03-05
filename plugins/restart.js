const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../lib/functions');

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async (conn, msg, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return reply("You are not authorized to use this command.");
        
        const { exec } = require("child_process");
        reply("Restarting...");
        await sleep(1500);
        exec("pm2 restart all", (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return reply(`Error: ${error.message}`);
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return reply(`Stderr: ${stderr}`);
            }
            console.log(`Stdout: ${stdout}`);
            reply("Bot restarted successfully.");
        });
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
