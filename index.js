/*
Author: Knuckles
github: https://github.com/JozielBorges
Twitter: @Jozielborgestv
Patreon: https://www.patreon.com/knucklesgang
*/
const readline = require('readline')
const { Client, RichEmbed } = require('discord.js');
const { red,green,blue, grey, yellow, magenta, white,bgGray } = require('chalk'); //Para o console ficar mais bonito UwU
const chalk = require('chalk');
const bot = new Client(); // Coloquei bot para ficar mais facil
const settings = require('./settings.json') //Vamos usar para verificar algumas coisas, como token, id e username

//Apresentação no console

bot.on('ready', ()=>{
    console.log(yellow('[================================================================================================================]'));
    console.log(green(`${magenta('[SELF BOT]')}[Meu nome é:] [${blue(bot.user.tag)}]`));
    console.log(green(`${magenta('[SELF BOT]')}[Meu prefix é:] [${blue(settings.prefix)}]`));
    console.log(yellow('[================================================================================================================]'));
    console.log(red('[AVISO]')+'[Não irei atualizar o selfbot todos os dias, qualquer problema entre em contato] [Name>4& &<6Test#8726]')
});

// Se a msg não for igual ao seu id, ele não continua

function tempo() {
    let tempo = new Date();
    let segundo = tempo.getSeconds();
    let minuto = tempo.getMinutes();
    let hora = tempo.getHours();
    let dia = tempo.getDate();
    let mes = tempo.getMonth()+1; //Pega o mês e adiciona mais "1" para ficar certinho :)
    let ano = tempo.getFullYear();
    //////////////////////////////////////////////////// Junta tudo para apresentar depois
    let data = '['+dia+'/'+mes+'/'+ano+']'+'{'+hora+'-'+minuto+'-'+segundo+'}';
    return data;
}

bot.on('message', async(msg)=>{
    //////////////////////////////////////////////////// Pega as infos do dia,hora etc...
    let tempo = new Date();
    let segundo = tempo.getSeconds();
    let minuto = tempo.getMinutes();
    let hora = tempo.getHours();
    let dia = tempo.getDate();
    let mes = tempo.getMonth()+1; //Pega o mês e adiciona mais "1" para ficar certinho :)
    let ano = tempo.getFullYear();
    //////////////////////////////////////////////////// Junta tudo para apresentar depois
    let data = '['+dia+'/'+mes+'/'+ano+']'+'{'+hora+'-'+minuto+'-'+segundo+'}';
    //////////////////////////////////////////////////// Pegamos as infos do discord
    let lGuild = msg.guild; //Pega o servidor
    let lChannel = msg.channel.name; // Pega o canal
    let lUser = msg.author.username; // Pega o usuario
    let lContent = msg.content; // Pega a msg
    //////////////////////////////////////////////////// Para ficar bonito e simples
    let a = '[';
    let b = ']';
    //////////////////////////////////////////////////// Resultado final
    let userNome = bot.user.tag;
    switch (msg.channel.type != 'dm' && msg.channel.type != 'group') { //Se a msg não estiver em dm ou grupos
        case msg.content.toLowerCase().includes(userNome)||msg.content.toLowerCase().includes(settings.ID)||msg.content.toLowerCase().includes(settings.Apelido)||msg.content.toLowerCase().includes(settings.Apelido1): //Se você for mencionado
            console.log(a+`${green('MENCIONADO')}`+b+data + a + blue(lGuild)+ b + a +yellow(lChannel)+ b + a +magenta(lUser)+b + a + white(lContent)+ b);
            break;
    
        default:console.log(data + a + blue(lGuild)+ b + a +yellow(lChannel)+ b + a +magenta(lUser)+b + a + white(lContent)+ b);
            break;
    }
 
})

//Aqui é a parte de comandos do selfbot

bot.on('message', async(msg)=>{
    if(msg.author.id !== settings.ID) {
        return;
    }

    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let content = msg.content.split(" ").slice(1);
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){ //Se a msg começar com o prefix e for sua a msg
        console.log(red(`[COMANDO] ${'['+msg.content+']'}`)); //Ele mostra no console oque você usou
    }

    if(cmd === 'ping'){ //Comando para mostrar o seu ping
        msg.edit(`:ping_pong: pong! seu ping é: *${bot.ping.toFixed()}ms*`);
    }

    if(cmd === 'stream'){ //Está bugado, depois eu arrumo
        let index = msg.content.lastIndexOf(' '); // Mostra o index até o final
        let messagemSeparada = msg.content.split(' ').slice(1,index); //divite por espaços até o link
        let nameStream = msg.content.slice(1,index);// Pega o nome até o link
        let urlStream = msg.content.slice(index).split(); // pega o link
        //console.log(index)
        if(msg.content.includes('www.twitch') !== msg.content.includes('https://www.twitch.tv/joziel_borges')){
            console.log('A','\n',messagemSeparada)
            console.log(nameStream+ '  ',urlStream)
            bot.user.setPresence({
                game:{
                    name: msg.content.slice(index),
                    type: 'STREAMING',
                    url: urlStream
                }
            })
        }
        else{
            console.log('B')
            bot.user.setPresence({
                game:{  
                    name: msg.content.slice(index),
                    type: 'STREAMING',
                    url: 'https://www.twitch.tv/joziel_borges'
                }
            })
        }
        msg.delete();
    }
});
bot.login(settings.token); // O bot entra na sua conta.
