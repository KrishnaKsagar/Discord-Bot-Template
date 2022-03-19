const Client = require("./src/Structures/Client.js");
const Command = require("./src/Structures/Command.js");
const config = require("./config.json");
const client = new Client();
const fs = require("fs");

fs.readdirSync("./src/Commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const command = require(`./src/Commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});

client.on("ready", () => console.log("Bot is Online!"));

client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});

client.login(process.env.TOKEN);
