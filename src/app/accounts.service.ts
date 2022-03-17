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
    addAccount(name: string, status: string){
        console.log('acounts.service > addAccount');
        this.accounts.push({name: name, status: status})
    }
    updateStatus(id: number, status: string){
      console.log('aacounts.service > updateStatus');
      this.accounts[id].status = status;        
    }
}