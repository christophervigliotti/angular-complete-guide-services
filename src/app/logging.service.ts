export class LoggingService {
    logStatusChange(status: string){
        console.log('logging.service > logStatusChange says: status is ' + status);
    }
}