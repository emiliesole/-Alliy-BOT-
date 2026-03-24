
// © 2025 Alliy. All Rights Reserved.
// respect the work, don't just copy-paste.

const fs = require('fs')

const config = {
    owner: "Alliy BOT",
    botNumber: "-",
    setPair: "ALLIYBOT",
    thumbUrl: "C:\Users\hp\Documents\Alliy wa BOT\WA-BASE-BOT-main\thumbnail\image.png",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },

    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Mode changed successfully!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    },
    settings: {
        title: "Alliy BOT 🐱‍🏍",
        packname: 'Alliy BOT 🐱‍🏍',
        description: "Alliy BOT - Custom WhatsApp Bot",
        author: 'Alliy',
        footer: "饾棈饾柧饾梾饾柧饾梹饾棆饾柡饾梿: @AlliyBOT"
    },
    newsletter: {
        name: "Alliy BOT",
        id: "0@newsletter"
    },
    api: {
        baseurl: "https://hector-api.vercel.app/",
        apikey: "hector"
    },
    sticker: {
        packname: "Alliy BOT 🐱‍🏍",
        author: "Alliy"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
