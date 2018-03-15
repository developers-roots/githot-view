import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GetListUsersStateService {
  private listUsers: Subject<object>;
  constructor() {}
  
  setListUsers(listUsers){
    this.listUsers.next({listUsers})
  }
  getListUsers(){
    return this.listUsers;
  }
}
