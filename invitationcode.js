/*
- *invitation code*
- *shared by whyuxD*
*/

//code

//*#invitation group*
(async () => {
let invit = generateWAMessageFromContent(
m.chat,
proto.Message.fromObject({
groupInviteMessage: {
groupJid: "120363248826862499@g.us",
inviteCode: "JU36ze/gq5VH4UTR",
inviteExpiration: 00007,
groupName: "hytam",
jpegThumbnail: thumBuff,
caption: "bergabung dengan kami di group orang hytam",
contextInfo: {
mentionedJid: [m.sender]
}
}
}),
{ userJid: m.sender, quoted: m }
)
await sock.relayMessage(m.chat, invit.message, {
messageId: invit.key.id
})
})()

//*# invitation newsletter admin*
(async () => {
let invit = generateWAMessageFromContent(
m.chat,
proto.Message.fromObject({
newsletterAdminInviteMessage: {
newsletterJid: '12345@newsletter',
newsletterName: 'ᴠᴛʀ ✘',
jpegThumbnail: thumBuff,
caption: '📡 Undangan menjadi putyh',
inviteExpiration: Date.now() + 86400000
}
}),
{ userJid: m.sender, quoted: m }
)
await sock.relayMessage(m.chat, invit.message, {
messageId: invit.key.id
})
})()

/*
*NOTE:*
_gunakan buffer untuk thumbnail, biar thumbnail muncul 👍_
*/