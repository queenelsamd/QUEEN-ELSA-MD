const config = require('../config')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "song download",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("𝗽𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘂𝗿𝗹 & 𝗻𝗮𝗺𝗲"
const search = await yts(q)
const deta = search.videos [0];
const url =deta.url

les desc = `
🎵 𝗤𝗨𝗘𝗘𝗡 𝗘𝗟𝗦𝗔 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🎵

title: ${deta.title}

description: ${deta.description}

time: ${deta.timestamp}
ago: ${deta.ago}
views: ${deta.views}

💙𝗠𝗔𝗗𝗘 𝗕𝗬 𝗤𝗨𝗘𝗘𝗡 𝗘𝗟𝗦𝗔 𝗠𝗗💙
`
await conn.sendmessage(from,{image:{url: deta,thumbanil},caption:deas},{quoted:mek});

 //download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio
await conn.sendmessage(audio: {url:downloadUrl},mimemype;"audio/mpeg"},{quoted:mek});

  
}catch(e){
concole.log(e)
reply('${e}' )
}
})
