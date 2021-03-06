import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users : any;
  
  constructor( private accountService: AccountService) 
  {

  }
  ngOnInit() {
      this.SetCurrentUser();
  }

  SetCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accountService.SetCurrentUser(user);
  }
}
