/*CMD
  command: /put
  help: 🏦Put 10$ to bank deposit
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 🏦put 10$ to bank deposit
CMD*/


    let res = Libs.ResourcesLib.userRes("money");
    let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
    
    if(res.have(10)){
       if( res.exchangeTo(bank_deposit, { remove_amount: 10, add_amount: 9  }) ){
         
         let secs_in_5minutes = 1 * 60 * 5;
         bank_deposit.growth.addCompoundInterest({percent: 0.005, interval: secs_in_5minutes });
   
         Bot.sendMessage("Transfered USD to bank deposit: " + 9 + "\nBank take 1$ as commission" );
       }
     }else{
        Bot.sendMessage("You have not such USD: " + 10);
     }
