var shell = require('shelljs');

var beat = 0;
var bar = 0;

setInterval(function() {  

  if(bar % 2 == 0 && beat%1==0) {
    shell.exec("say -v 'Zarvox' dup dup", {async:true});
  }

  if(bar % 2 == 1 && beat%1==0.5) {
    shell.exec("say -v 'Bells' oh", {async:true});
  }


  if (bar >= 4 && bar < 16) {

    if(bar % 2 == 1 && beat%1==0.75) {
      shell.exec("say -v 'Alex' hey", {async:true});
    }

  }

  if (bar >= 12 && bar < 20 ) {

    if(bar % 2 == 0 && beat%1==0.75) {
      shell.exec("say -v 'Whisper' jeff fedderson", {async:true});
    }

  }

  if (bar >= 16 && bar < 32) {
    if(bar % 4 == 0 && beat%1==0.25) {
      shell.exec("say -v 'Good News' what is a watt", {async:true});
    }
  }

  if (bar >= 32) {
    if(bar % 2 == 0 && beat%1==0.25) {
      shell.exec("say -v 'Bahh' I need a joule joule joule", {async:true});
    }

    if(bar % 2 == 1 && beat%1==0.25) {
      shell.exec("say -v 'Princess' Joule!", {async:true});
    }
  }

  if (bar >= 64) {
    if(bar % 8 == 0 && beat%1==0.25) {
      shell.exec("say -v 'Good News' what is a watt", {async:true});
    } 
    if(bar % 2 == 0 && beat%1==0.75) {
      shell.exec("say -v 'Whisper' jeff fedderson", {async:true});
    }
  }




  beat+= 0.25;
  if(beat % 1 == 0) { bar++; }

}, 250);




// setInterval(function() {
//   shell.exec("say -v 'Bad News' what is a watt", {async:true} );
// }, 5000);

