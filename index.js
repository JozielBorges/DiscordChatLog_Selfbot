/*
Author: Knuckles
github: https://github.com/JozielBorges
Twitter: @Jozielborgestv
Patreon: https://www.patreon.com/knucklesgang
*/
const readline = require('readline')
const { Client, RichEmbed } = require('discord.js');
const { red,green,blue, grey, yellow, magenta, white } = require('chalk'); //Para o console ficar mais bonito UwU
const chalk = require('chalk');
const bot = new Client(); // Coloquei bot para ficar mais facil
const settings = require('./settings.json') //Vamos usar para verificar algumas coisas, como token, id e username

//Apresentação no console

bot.on('ready', ()=>{
    console.log(yellow('============================================================================'));
    console.log(green(`${magenta('[SELF BOT]')}Meu nome é:${blue(bot.user.tag)}`));
    console.log(green(`${magenta('[SELF BOT]')}Meu prefix é:${blue(settings.prefix)}`));
    console.log(yellow('============================================================================'));
});

// Se a msg não for igual ao seu id, ele não continua
bot.on('message', async(msg)=>{
    if(msg.author.id != settings.ID){
        return;
    }
    let cmdComando = msg.content.split(" ")[0] // Pega a sua msg e separa
    cmdComando = cmdComando.split(settings.prefix.length); //  Tira o seu prefix da msg
    let resto = msg.content.split(" ").slice(1); // Tudo o que for depois do prefix é considerado "resto"
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){ // Olha se a msg começa com o prefix e se foi você que digitou
        console.log(grey('Comando usado: ' + cmdComando)) // Mostra no console o comando usado
    }
});

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
    if(msg.type)
    console.log(data + a + blue(lGuild)+ b + a +yellow(lChannel)+ b + a +magenta(lUser)+b + a + white(lContent)+ b);
 
})


bot.on('message', async(msg)=>{
    if(msg.author.id != settings.ID){
        return;
    }
});
bot.login(settings.token); // O bot entra na sua conta.