import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import * as io from "socket.io-client";
import { ChatService } from '../_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollMe", {static: false}) myScrollContainer: ElementRef;

  chats: any;
  joinned: boolean = false;
  newUser = { nickname: '', room: '' };
  msgData = { room: '', nickname: '', message: '' };
  socket = io('http://localhost:4000');

  constructor(public chatService: ChatService) { }



  ngOnInit() {
    this.getChatByRoom(1)


    var user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.getChatByRoom(user.room);
      this.msgData = { room: user.room, nickname: user.nickname, message: '' }
      this.joinned = true;
      this.scrollToBottom();
    }
    this.socket.on('new-message', function (data) {
      if (data.message.room === JSON.parse(localStorage.getItem("user")).room) {
        this.chats.push(data.message);
        this.msgData = { room: user.room, nickname: user.nickname, message: '' }
        this.scrollToBottom();
      }
    }.bind(this));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).toPromise().then((res) => {
      this.chats = res;
      console.log(res)
    }, (err) => {
      console.log(err);
    });
    
  }



  joinRoom() {
    var date = new Date();
    localStorage.setItem("user", JSON.stringify(this.newUser));
    this.getChatByRoom(this.newUser.room);
    this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
    this.joinned = true;
    this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
  }

  sendMessage() {
    this.chatService.saveChat(this.msgData).toPromise().then((result) => {
      this.socket.emit('save-message', result);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("user"));
    this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
    localStorage.removeItem("user");
    this.joinned = false;
  }

}