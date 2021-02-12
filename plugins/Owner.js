let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  Owner Bot kami adalah Wa.me/6282287036878
  Segera hubungi jika ada pemerkosaan..
  
  YouTube *_*
  *~Drawl Nag
  `.trim(), m)
}
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

