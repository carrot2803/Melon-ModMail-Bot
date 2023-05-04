import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { command } from "../../structs/commands";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName("invite").setDescription("Invite melon to your server"),
    options_data: { cooldown: 5000 },

    run: async (client, interaction) => {
        const inviteEmbed = new EmbedBuilder().setTitle("Invite melon to your server");

        const actionRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setLabel("Invite")
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.com/api/oauth2/authorize?client_id=1103600644591452232&permissions=8&scope=bot")
        );

        return interaction.reply({ embeds: [inviteEmbed], components: [actionRow] }).catch(console.error);
    }
});