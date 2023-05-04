import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { command } from "../../structs/commands";
import { successEmbed } from "../../interfaces/functions";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('Delete the ModMail setup.')
        .addSubcommand((sub) =>
            sub.setName('setup').setDescription('Delete the ModMail system setup.')
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false)
        .toJSON(),
    run: async (client, interaction, args) => {
        await interaction.deferReply();

        client.main_db.init();

        await interaction.editReply({
            embeds: [successEmbed('The ModMail system has been deleted.')]
        });
    }
});
