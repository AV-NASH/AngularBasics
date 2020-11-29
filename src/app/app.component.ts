import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  imgUrl="";
  url;
  userName: string=""
  nameError:string=""


ngOnInit(): void{
  this.title="hello from other side";
  this.imgUrl="../assets/logo.png";
  this.url="www.google.co.in";

}

onclick($event){
  console.log("Save button is clickrf!",$event);
  window.open(this.url);
}

onInput($event){
  console.log("Change occured ",$event.data);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
 if(nameRegex.test(this.userName)){
 this.nameError="";
return;}
this.nameError="Name is incorrect"
}
}
