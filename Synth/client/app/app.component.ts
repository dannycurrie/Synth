import { Component } from '@angular/core';
import { Http, Response  } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  
  name = 'Danny'; 

  constructor (private http: Http) {}

  ngOnInit(){
    console.log("attempting to call server");
    this.http.get('app/Test');
  }
}


