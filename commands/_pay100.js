/*CMD
  command: /pay100
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 💵 pay 100$
CMD*/

let money = Libs.ResourcesLib.userRes("money");

if(money.have(100)){
  money.remove(100);
}else{
  Bot.sendMessage("You do not have 100 USD")
}

Bot.runCommand("/balance")
