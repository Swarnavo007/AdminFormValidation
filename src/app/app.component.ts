import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}
  title = 'admin-login-validation';

  loginData=new Login(' ',' ');

  onSubmit(){
    alert('Submitted');
  }

  type=true;

}
