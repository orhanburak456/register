const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('仒 ` V Λ L E R İ N Λ  Register Botu Menüsü')

  .addField(" .e",`Kişiyi Erkek Şekilde Kayıt Eder`)
  
  .addField(" .k",`Kişiyi Bayan Şekilde Kayıt Eder`)
  
  .addField(" .ktop",`Kayıt Edenlerin Toplam Kayıt Listesini Atar`)
  
  .addField(" .kstat",`Kişisel Kayıtlarınızı Gösterir`)

  .addField(" .cv",`Kişinin Sicilini Gösterir`)
  
  .addField(" .sıfırla",`Kişinin Davetlerini Sıfırlar (Yetkililer İçindir)`)
  
 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}