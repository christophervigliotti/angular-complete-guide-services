import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()

export class AccountsService {
  accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];    

  constructor(private loggingService: LoggingService){}
  
  addAccount(name: string, status: string){
    console.log('acounts.service > addAccount');
    this.accounts.push({name: name, status: status})
    this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string){
    console.log('aacounts.service > updateStatus');
    this.accounts[id].status = status;        
    this.loggingService.logStatusChange(status);
  }
}