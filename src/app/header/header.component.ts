import { Component, OnInit } from '@angular/core';
import { GetUsersGitService } from '../services/get-users-git.service';

@Component({
  selector: 'hotv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public resultListUsers: object;

  constructor(private usersService: GetUsersGitService) { }

  ngOnInit() {
  }

  public getUserInput(userName: string) {
    this.usersService.getUsers(userName)
      .subscribe((listUsers) => {
        this.resultListUsers = listUsers
        console.log(this.resultListUsers);
      });
  }

}
