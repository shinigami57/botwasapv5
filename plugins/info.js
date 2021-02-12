let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Zikru
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Arya274/Arya-Bot
╠➥ Instagram: @zikru14
╠➥ YouTube: Drawl Nag
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ Ling Mo
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Indosat: 0857-6652-1574
╠➥ Tsel: 0822-8703-6878
╠➥ 
║
║>Request? Wa.me/6282287036878
║
╠═〘 Shinigami BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

