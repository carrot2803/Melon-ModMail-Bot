import { createDiscordTimestamp } from "../../interfaces/functions";
import { command } from "../../structs/commands";
import { SlashCommandBuilder } from "discord.js";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Check the uptime')
        .setDMPermission(false)
        .toJSON(),
    options_data: { cooldown: 5000 },
    
    run: async (client, interaction) => {
        const date = new Date().getTime() - (client.uptime);

        await interaction.reply({
            content: 'Started on: ' + createDiscordTimestamp(date, 'd') + ' (' + createDiscordTimestamp(date, 'R') + ')'
        });
    }
});
