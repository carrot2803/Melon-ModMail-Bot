import { errorEmbed, successEmbed } from "../../interfaces/functions";
import { command } from "../../structs/commands";
import { SlashCommandBuilder } from "discord.js";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban user from using ModMail')
        .addUserOption((opt) =>
            opt.setName('user').setDescription('The user to ban').setRequired(true)
        )
        .addStringOption((opt) =>
            opt.setName('reason').setDescription('The reason for the ban.').setRequired(false)
        )
        .setDMPermission(false)
        .toJSON(),
    run: async (client, interaction, args) => {
        const user = args.getUser('user');
        const reason = args.getString('reason') || 'No reason was provided';

        let data_check = client.bans_db.get(user.id);

        if (data_check) {
            await interaction.reply({
                embeds: [ errorEmbed('The user is already banned.') ],
                ephemeral: true
            });
            return;
        };

        client.bans_db.set(user.id, reason);

        await interaction.reply({
            embeds: [successEmbed('The user <@' + user.id + '> has been banned')]
        });
        return;
    }
});
