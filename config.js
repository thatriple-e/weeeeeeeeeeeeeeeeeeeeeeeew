/*

# Base By Devorsixcore
# Owner ? : t.me/imdevorsix
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2347086306743']
global.ownMain = '2347086306743'
global.NamaOwner = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //gausah diganti
global.sessionName = 'session'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7' //ganti aj klo mau
global.author = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //ganti aj klo mau
global.packname = '𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7' //ganti aj klo mau
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //gausah diganti
global.linkgc = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not OLA .',
premium: 'You are not a premium user go get a bot.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ 𝐃𝐄𝐕𝐎̸𝐑͙𝐒𝐢𝐗̸𝐂 - 𝐓𝐝𝐗 ᐧ ༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁𝐃𝐄𝐕𝐎̸𝐑͙𝐒𝐢𝐗̸𝐂𝐎̊𝐑𝐄 ̥ ̊ ༚👻⃰ꢵ⭑𝐓𝐫𝐚𝐬𝐡𝐃𝐞𝐱 𝂼઼🏳️⃰͜🏴‍☠️🏳️͜★ 𝐓͙͡𝐝͢𝐗͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7 - 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕7 - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "Spider 𝖡𝖾𝗍a - #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})