const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['918107768770']
global.OwnerNumber = ['918107768770']
global.ownertag = ['918107768770']
global.BotName = "𝐑𝐄𝐕𝐄𝐍𝐆𝐑𝐒𝐁𝐎𝐓❤️"
global.packname = "REVNGERZ BOTZ"
global.author = "By: UnknownRider❤️"
global.OwnerName = "MR UNKNOWN RIDER"
global.BotSourceCode = "https://github.com/Pika4O4/Anya-pika"
global.SupportGroupLink = "https://chat.whatsapp.com/H6CUtq40oRDKIofIEbf1qEl"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "Assam, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/FantoX001"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Kaam ho gya darling...',
    useradmin: 'Sorry, only *Group Admins* can use this command !...Jaa pehle admin banke aa',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group......To chal ab *Admin* bna 😏',
    botowner: 'Only my *Owner* can use this command, and who are you...why you used this command!',
    grouponly: 'This command is only made for *Groups*, and what the hell are you doing here!',
    privateonly: 'This command is only made for *Private Chat*, chal khopche me aa!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: '_Command processing_ ᵃⁿʸᵃ ᵇʸ ᵖⁱᵏᵃ.....',
    nolink: 'Please provide me *link*, Cutie!',
    error: 'Error....kuchh to garbar hai dyaa!',
    banned: 'You are *Banned* fron using commands 😠!',
    bangc: 'This Group is *Banned* from using Commands 😡!',
    nonsfw: 'Dont be a pervert....Bc pdhai - likhai karo, IAS YAS bano par nhi tumhe to *nudity* dekhni hai 😒!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
