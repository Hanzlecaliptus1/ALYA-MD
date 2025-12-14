/*
* *catalog button*
* *shared by whyuxD*
* _[https://whatsapp.com/channel/0029Van6ItnIyPtYQU3k0z3s]_
*/

// BUTTON CATALOG
(async () => {
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "whyuxD"
},
header: {
title: "wxx",
hasMediaAttachment: true,
productMessage: {
product: {
productImage: await (async () => {
const { imageMessage } = await generateWAMessageContent(
{ image: { url: "TARUH_URL_IMAGE" } },
{ upload: sock.waUploadToServer }
)
return imageMessage
})(),
productId: "9116471035103640",
title: "wxx",
description: "hytam vs putyh",
currencyCode: "IDR",
priceAmount1000: "5000200",
retailerId: "4144242",
url: "https://wa.me/c/6283189053897",
productImageCount: 1
},
businessOwnerJid: "6283189053897@s.whatsapp.net"
}
},
nativeFlowMessage: {
buttons: [
{
"name": "single_select",
"buttonParamsJson": "{\"has_multiple_buttons\":true}"
 },
{
name: "cta_catalog",
buttonParamsJson: `{"business_phone_number": "6283189053897", "catalog_product_id": "9116471035103640"}`
}, 
]
}
}
}
}
},
{ quoted: m })

await sock.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
})()

// CAROUSEL CATALOG
(async () => {
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: { text: "" },
carouselMessage: {
cards: [
{
header: proto.Message.InteractiveMessage.Header.create({
title: "wxx",
hasMediaAttachment: true,
productMessage: {
product: {
productImage: await (async () => {
const { imageMessage } = await generateWAMessageContent(
{ image: { url: "TARUH_URL_IMAGE" } },
{ upload: sock.waUploadToServer }
)
return imageMessage
})(),
productId: "9116471035103640",
title: "wxx",
description: "hytam vs putyh",
currencyCode: "IDR",
priceAmount1000: "5000200",
retailerId: "4144242",
url: "https://wa.me/c/6283189053897",
productImageCount: 1
},
businessOwnerJid: "6283189053897@s.whatsapp.net"
}
}),
body: { text: "wxx" },
nativeFlowMessage: {
buttons: [
{
name: "cta_catalog",
buttonParamsJson: `{"business_phone_number": "6283189053897", "catalog_product_id": "9116471035103640"}`
}
]
}
},
{
header: proto.Message.InteractiveMessage.Header.create({
title: "wxx",
hasMediaAttachment: true,
productMessage: {
product: {
productImage: await (async () => {
const { imageMessage } = await generateWAMessageContent(
{ image: { url: "TARUH_URL_IMAGE" } },
{ upload: sock.waUploadToServer }
)
return imageMessage
})(),
productId: "9116471035103640",
title: "wxx",
description: "hytam vs putyh",
currencyCode: "IDR",
priceAmount1000: "5000200",
retailerId: "4144242",
url: "https://wa.me/c/6283189053897",
productImageCount: 1
},
businessOwnerJid: "6283189053897@s.whatsapp.net"
}
}),
body: { text: "wxx" },
nativeFlowMessage: {
buttons: [
{
name: "cta_catalog",
buttonParamsJson: `{"business_phone_number": "6283189053897", "catalog_product_id": "9116471035103640"}`
}
]
}
}
],
messageVersion: 1
}
}
}
}
},
{ quoted: m })

await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
})()