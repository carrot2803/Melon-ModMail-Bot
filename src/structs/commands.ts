import { CommandInteraction, CommandInteractionOptionResolver, SlashCommandBuilder } from "discord.js";
import { bot } from "./bot";

interface CommandOptions {
    command_data: SlashCommandBuilder | object,
    options_data?: OptionsData,
    run: (client: bot, interaction: CommandInteraction, args: CommandInteractionOptionResolver) => any
};

interface OptionsData {
    owner_only?: boolean,
    cooldown?: number
};

export class command {
    command_data: CommandOptions['command_data'];
    options_data: CommandOptions['options_data'];
    run: CommandOptions['run'];

    constructor(input: CommandOptions) {
        this.command_data = input['command_data'];
        this.options_data = input['options_data'];
        this.run = input['run'];
        return this;
    };
}