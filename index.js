const tmi = require('tmi.js');
var channel = 'demacediussc';

const options = {
    options: {
        debug: true,
    },
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: 'demacediusscBot',
        password: 'oauth:02yebanisq8c54hl18q4w406gyq33c',
    },
    channels: [channel]
    
}

const client = new tmi.Client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channel, 'Bonjour je suis demacedius Bot que puis-je pour vous');
});

client.on("chat",(channel, user, message, self)=>
{
    if((message == "hello") || (message == "bonjour")){
        client.say(channel, "hey "+ user['display-name'] + " comment vas tu");
    }

    if(message == "!twitter"){
        client.say (channel, "Mon twitter "+ user['display-name'] + " c'est  https://twitter.com/Onehourgamestud vous pouvez me follow");
    }

    if(message == "!moteur"){
        client.say (channel, "Le moteur que j'utilise c'est Godot vous pouvez le télécharger ici https://godotengine.org/");
    }
});

