import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { command } from "../../structs/commands";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName("support").setDescription("Support Server"),
    options_data: { cooldown: 5000 },

    run: async (client, interaction) => {
        const inviteEmbed = new EmbedBuilder().setTitle("Melon Support Server");

        const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setLabel("Support")
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.gg/TFEbHkCyT3") // put url here later
        );

        try {
            return await interaction.reply({ embeds: [inviteEmbed], components: [actionRow] });
        }
        catch (message) {
            return console.error(message);
        }
    }
});