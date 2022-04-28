const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "announce",
  aliases: ['ann'],
  description: "Announce Command",
  cooldown: 0,
  category: "utility",
  userPermissions: "MANAGE_MESSAGES",
  botPermissions: "MANAGE_MESSAGES",

  async execute(client, message, args, ee) {
    try {
      message.delete();
      let Content = args.join(" ");
      if (!Content)
        return message.reply({ embeds:[new MessageEmbed()
          .setColor(`#303136`)
          .setDescription(`Tuliskan Sesuatu!`)]});

      return message.channel.send({ embeds:[new MessageEmbed()
        .setColor(`#303136`)
        .setDescription(`${Content}`)]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}; 