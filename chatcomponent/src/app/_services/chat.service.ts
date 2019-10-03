import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Chat } from '../_models/Chat';


@Injectable({ providedIn: 'root' })
export class ChatService {

  constructor(private http: HttpClient) { }

  //get the selected chat history of a selected room from the databser using api
  getChatByRoom(room) {
    return this.http.get(`${environment.apiUrl}/chats/` + room);
    
  }
  
  //saving chat to the database
  saveChat(data: Chat) {
    return this.http.post(`${environment.apiUrl}/chats/`, data);
  }

}