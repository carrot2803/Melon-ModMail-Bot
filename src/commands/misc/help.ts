import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, Embed, CommandInteraction, StringSelectMenuInteraction } from "discord.js";
import { command } from "../../structs/commands";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays the help menu.')
        .setDMPermission(false)
        .toJSON(),
    options_data: { cooldown: 5000 },
    run: async (client, interaction, args) => {

        let helpEmbed = new EmbedBuilder()
            .setTitle("Melon Mod Mail Menu")
            .setDescription("Available Commands")
            .setColor('Aqua');

        const commandsFetched = await client.application.commands.fetch();
        const commands: string[] = [];

        commandsFetched.forEach((cmd) => {
            helpEmbed.addFields({
                name: `**${cmd.name}**`,
                value: `${cmd.description}`,
                inline: true
            });
        });
        helpEmbed.setTimestamp()

        return interaction.reply({ embeds: [helpEmbed] }).catch(console.error);
    }
});
