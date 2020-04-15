const tmi = require('tmi.js');
const password = require('./password');
var channel = 'demacediussc';

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: "aws",
        reconnect: true,
        secure: true,
    },
    identity: {
        username: 'demacediusscBot',
        password: password,
    },
    channels: [channel]
    
}

const client = new tmi.Client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channel, 'Bonjour je suis demacedius Bot que puis-je pour vous');
});

client.on("chat",(channel, user, message, self)=> {
    if (self) return;
    if((message == "hello") || (message == "bonjour")){
        client.say(channel, "hey "+ user['display-name'] + " comment vas tu ");
    }
    if ((message === "!Moteur") || (message === "!moteur")){
        client.say(channel, "Le moteur que j'utilise c'est Godot. Vous pouvez le télécharger ici https://godotengine.org/");
    }
    if (message === "!clear"){
        client.on("clearchat", channel);
    }
});



