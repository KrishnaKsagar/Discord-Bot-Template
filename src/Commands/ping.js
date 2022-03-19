const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "ping",
  description: "Shows the ping of the bot!",
  async run(message, args, client) {
    const msg = await message.reply(`🏓 Pong: **${Date.now() - message.createdTimestamp}ms**.`);
  }
});