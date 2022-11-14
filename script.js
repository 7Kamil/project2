function gettime() {
    let now = new Date();
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
  show_history(){
  this.messages.forEach(message =>{
  console.log(message.toString());
  });
  }
  }
  let messenger = new Messenger ();
  messenger.send ('Artem', 'first message');
  messenger.send ('Maria', 'second message');
  messenger.show_history();
