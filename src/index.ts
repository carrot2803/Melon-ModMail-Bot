import { config as dotenv_config } from 'dotenv';
import { bot } from './structs/bot';

dotenv_config();
export const client: bot = new bot();

console.log('<3 <3 <3 <3 <3 <3 <3 <3 <3');
client.load_commands(true);
client.load_events();
client.start();

process.on('unhandledRejection', console.error);
