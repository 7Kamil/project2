function gettime() {
    let = new Date();
    return `${now. getHours()}: ${now.getMinutes()}`
    }
class Message {
     author;
     time;
     message;
     constructor(author, message){
     this.author = author;
     this.time = gettime();
     this.message = message;
 }
 toString() {
  messages = [];
  send(author, text){
  this. message.push(new Message(author, text));
  }
  appear_history(){
  this.messages.forEach(message =>{
  console.log(message.toString());
  });
  }
  }
  let messenger = new Messenger ();
  messenger.send ('Artem', 'the first message');
  messenger.send ('Maria', 'the second message');
  messenger.appear_history();
