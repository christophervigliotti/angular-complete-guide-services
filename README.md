# Services & Dependency Injection

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## 114. Services in Angular 6+

link

notes

```
code
```

## 113. Using Services for Cross-Component Communication

link

notes

```
code
```

## 112. Injecting Services into Services

link

notes

```
code
```

## 111. How many Instances of Service Should It Be?

link

notes

```
code
```

## 110. Understanding the Hierarchical Injector

link

notes

```
code
```

## 109. Creating a Data Service

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656214#overview

notes

```
code
```

## 108. Injecting the Logging Service into Components

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656210#overview

* Hierarchical Injector WAT
* inject an instance of the class as-needed
* remember that adding a private argument in your constructor creates a property with the same name
* in `new-account.component.ts`...
* `constructor(private loggingService:LoggingService){}` informs Angular that we need an instance of LoggingService
* don't forget to import it `import { LoggingService } from '../logging.service';`
* also in the @Component declaration, add (or append) the providers array ala `providers: [LoggingService]`

```
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

## 107. Creating a Logging Service

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656208#overview

Here is the wrong way to do it (because Angular offers a better way for us to access service objects)

### logging.service.ts

```
export class LoggingService {
    logStatusChange(status: string){
        console.log('a server status changed, new status is ' + status);
    }
}
```

### new-account.component.ts

implemented the incorrect way...

```
import { LoggingService } from '../logging.service';
// and...
onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
        name: accountName,
        status: accountStatus
    });
    // manually generated instance each time this method is called...bogus!
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
}
```

## 106. Why would you Need Services?

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656206#overview 

review of how services can help us & what we have to watch out for

## 105. Module Introduction

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656200#overview

What Are Services?
* helper objects / shared objects
* a central repo / business unit for storing/centralizing code

# etcmethods

## Up And Running

sudo npm i -g npm@6
sudo npm install
ng serve