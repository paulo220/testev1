const {default: AnyWASocket,makeInMemoryStore,downloadContentFromMessage,DisconnectReason,useSingleFileAuthState } = require ('@adiwajshing/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./arquivos/lib/color")
const { fetchJson } = require("./arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { banner, banner2 } = require("./arquivos/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")


/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./DONO/config/data.json"))
const upload = require("./arquivos/lib/functions")
const TelegraPh = require("./arquivos/lib/functions")
const sotoy = JSON.parse(fs.readFileSync('./sotoy.json'))
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const img = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const { menu } = require("./arquivos/menus/menu.js")

const { menublack } = require("./arquivos/menus/menublack.js")
const { menuclassic } = require("./arquivos/menus/menuclassic.js")
const { menucorpt } = require("./arquivos/menus/menucorpt.js")
const { menuelomore } = require("./arquivos/menus/menuelomore.js")
const { menugold } = require("./arquivos/menus/menugold.js")
const { menuhiper } = require("./arquivos/menus/menuhiper.js")
const { menuinfinite } = require("./arquivos/menus/menuinfinite.js")
const { menumultiplo } = require("./arquivos/menus/menumultiplo.js")
const { menuplatinum } = require("./arquivos/menus/menuplatinum.js")
const { menustandard } = require("./arquivos/menus/menustandard.js")


///  prefixo e dono aqui ///
const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numeroBot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const dono = config.numeroDono
const prefix = config.prefix
const prefixo = config.prefix
//

let girastamp = speed()
let latensi = speed() - girastamp


async function startjapa () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

// 𝚀𝚁𝙲𝙾𝙳𝙴
const { state, saveState } = useSingleFileAuthState("./cache/japa.json")
// limpar console
console.log(banner.string)
console.log(color('⭐'),color('Conectando....🤔'))
const client = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Japa-V3.5','Firefox','4.0.0'],
auth: state
})

client.ev.on ("creds.update", saveState)

store.bind(client.ev)
client.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

client.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

if(shouldReconnect) {
startjapa()
}

} else if(connection === "open") {
console.log(`${color(`conectado\nprefixo: ${prefix}\nDono: ${nomeDono}\n\nCriador: Paulo bots`,'gold')}`)
client.sendMessage(`${numeroDono}@s.whatsapp.net`,{text: `Bot: ${nomeBot}\nPrefix: ${prefix}`})
}

})

client.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
bidy =  budy.toLowerCase()




///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = client.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
} 

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}



//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
//const isOwner = numeroDono.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = bidy.trim().split(/ +/)







// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel



if(budy == `${prefixo}`) {
enviar('🤔👍')}
const dados = m.messages[0];


// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }




// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: "💦 Aguarde...enviando ",
aguarde: "💦 Aguarde...enviando ",
dono: "💦 Esse comando so pode ser usado pelo meu dono!!! ",
grupo: "💦 Esse comando só pode ser usado em grupo ",
privado: "💦 Esse comando só pode ser usado no privado ",
adm: "💦 Esse comando só pode ser usado por administradores de grupo",
botadm: " 💦 Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚙️️] Você não se registrou utilize ${prefixo}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "💦 Error, tente novamente mais tarde "
}


////////////////////////////////////
if (!isGroup && isCmd) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(comando, "violet"), 'USUARIO', color(pushname, "violet"))
if (!isGroup && !isCmd) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color(pushname, "violet"))
if (isCmd && isGroup) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(comando, "violet"), 'do', color(pushname, "violet"), 'NO GRUPO', color(groupName))
if (!isCmd && isGroup) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color(pushname, "violet"), 'NO GRUPO', color(groupName))

switch (comando) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//



case 'teste':
return enviar(` ok `)
break

case "help":
case "comandos":
case 'menu':
case "start":
case "bot":
enviar(resposta.aguarde)

const sections = [
    {
	title: `${nomeBot}`,
	rows: [
	    {title: "CCS BLACK", rowId: `${prefix}menublack`, description: `VALOR DA CC 45 R$`},
	    {title: "CCS CLASSIC", rowId: `${prefix}menuclassic`, description: `VALOR DA CC 12 R$`},
	    {title: "CCS CORP T&E", rowId: `${prefix}menucorpt`, description: `VALOR DA CCS 20 R$`},
	    {title: "CCS GOLD ", rowId: `${prefix}menugold`, description: `VALOR DA CC 15 R$`},
	    {title: "CCS HIPERCARD", rowId: `${prefix}menuhiper`, description: `VALOR DA CC 24 R$`},
	    {title: "CCS INFINITE", rowId: `${prefix}menuinfinite`, description: `VALOR DA CC 40 R$`},
	    {title: "CCS MULTIPLO", rowId: `${prefix}menumultiplo`, description: `VALOR 18 R$`},
	    {title: "CCS PLATINUM", rowId: `${prefix}menuplatinum`, description: `VALOR DA CC 18 R$`},
	    {title: "STANDARD", rowId: `${prefix}menustandard`, description: `VALOR DA CC 15 R$`},
	    {title: "CCS ELO MORE", rowId: `${prefix}menuelomore`, description: `VALOR DA CC 18 R$`}
	]
    }
    ]
const listMessage = {
  text: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
  buttonText: "Veja a lista de ccs",
  sections
}
client.sendMessage(from, listMessage)
break

case "menublack":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menublack(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓Japa-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓Japa-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuclassic":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuclassic(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menucorpt":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menucorpt(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuelomore":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuelomore(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menugold":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menugold(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuhiper":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuhiper(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuinfinite":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuinfinite(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menumultiplo":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menumultiplo(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuplatinum":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuplatinum(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menustandard":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menustandard(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case 'cpf1':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'score1':
case 'score2':
case 'parentes1':
case 'vizinhos1':
//@Paulo
addFilter(from);
if(q.length < 11 || q.length > 11)
enviar(`formato inválido, talvez seja pq vc colocou traços ou pontos, formato:
✅ -> 00000000000 (11 digitos)
❌ -> 000.000.000-00 (14 digitos)`);
enviar(`Aguarde, estou consultando`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
break;

case 'tel1':
case 'tel2':
//@Paulo
addFilter(from);
if(q.length == 0) {
let al_id = conn.message.extendedTextMessage.contextInfo.participant;
resultad4 = '@' + al_id.replace("@s.whatsapp.net", "");
resultad3 = resultad4.replace('@55', '')
if(resultad3.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
enviar(`aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
} else if(q.length == 11) {
enviar(`aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
} else {
enviar('esse número não é um número brasileiro');
}
} else if(q.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
enviar(`Aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
} else if(q.length === 13) {
com55k = `@${q}`;
resultad3 = com55k.replace('@55', '');
enviar(`Aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
} else if(q.length === 11) {
enviar(`Aguarde ${pushname}, estou consultando numero: ${q}`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
} else {
enviar('numero invalido');
} 
break;

default:

if (isCmd) {
const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]

const buttonMessage = {
    text: "comando nao existe ou vc digitou errado",
    footer: ' ',
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage)
}

}

} catch (e) {
console.log(e)
}

})

}
startjapa()
