/*CMD
  command: /set10
  help: 🔧 Set 10 for all resoures
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 🔧 set 10 for all resoures
CMD*/

let money = Libs.ResourcesLib.userRes("money"); 
money.set(10);

Libs.ResourcesLib.userRes("wood").set(10);
Libs.ResourcesLib.chatRes("crystals").set(10);

Libs.ResourcesLib.userRes("bank_deposit").set(10);

Bot.runCommand("/balance");
