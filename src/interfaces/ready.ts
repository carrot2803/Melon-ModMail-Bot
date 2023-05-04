import { client } from '..';
import { ActivityType } from 'discord.js';

client.once('ready', async () => {
    console.log('Logged in as ' + client.user.tag + '.');
    
    client.user.setPresence({
        status: 'dnd',
        activities: [{
            name: "melon's mod mail <3", type: ActivityType.Watching
        }]
    })
});
