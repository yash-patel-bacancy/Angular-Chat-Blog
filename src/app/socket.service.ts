import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket;

  constructor() { 
    this.socket = io(environment.SOCKET_ENDPOINT,{
      transports: ['websocket']
    });
   console.log(this.socket);
    setTimeout(() => {
      console.log("Socket Connected : "+this.socket['connected']);
     }, 200);
  }

  public sendChatMessage(chatMessage:string){
    return new Observable((subscriber) => {
      this.socket.emit('/chat',{message:chatMessage},
                      (text:any)=>{
        console.log(text);    
        subscriber.next(text);
      })
    });
  }
}
