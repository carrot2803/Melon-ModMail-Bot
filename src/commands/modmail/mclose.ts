import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { errorEmbed } from "../../interfaces/functions";
import { command } from "../../structs/commands";

export default new command({
    command_data: new SlashCommandBuilder()
        .setName('close-mail')
        .setDescription('Close an opened mail in the DM.')
        .setDMPermission(true)
        .toJSON(),
    run: async (client, interaction, args) => {
        if (interaction.guild) {
            await interaction.reply({
                embeds: [
                    errorEmbed('This command is only executable via Direct Messages.')
                ],
                ephemeral: true
            });

            return;
        };

        const guild = client.guilds.cache.get(client.main_db.get('guild'));

        if (!guild) return;

        const category = guild.channels.cache.get(client.main_db.get('category'));

        if (!category) return;

        const channel = guild.channels.cache.find((channel) => channel.name === interaction.user.id && channel.parentId === category.id);

        if (!channel) {
            await interaction.reply({
                embeds: [
                    errorEmbed('No mail created yet.')
                ],
                ephemeral: true
            });

            return;
        };

        await channel.delete('[ModMail] A member has closed their own mail.');

        await interaction.channel?.send({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`\`✅\` Mail closed successfully.`)
                    .setColor('Blue')
            ]
        }).catch(() => { });

        await interaction.reply({
            content: 'Done.',
            ephemeral: true
        });
    }
});
