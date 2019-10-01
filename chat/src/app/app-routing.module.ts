import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
// import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
	{
		path:"",
		component:LoginComponent
	
	},

// {
// 	path:'chat',
// 	component:ChatComponent
// },
{

path:"login",
component:LoginComponent


},
{

path:"profile",
component:ProfileComponent


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
