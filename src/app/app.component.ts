import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat-Blog';
  public chats:string[]=[];

  constructor(private socketService:SocketService) { }

   ngOnInit(): void {
    this.socketService.socket.on('/message',(text:any)=>{
      console.log(text);
      console.log(this.chats);
        this.chats.push(text);
    });
  }

  public sendChatMessage(chatMessage:string){
    this.socketService.sendChatMessage(chatMessage).subscribe(resData=>{
      console.log(resData);      
    })
  }
}
