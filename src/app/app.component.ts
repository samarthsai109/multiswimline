import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MultiChannelSwimLine';
  submitStatus: boolean = false;
  channel:string;
  savedData: any;

  constructor() {}

  
  ngOnInit(): void {
   
  }

  
  handleResults(searchObj) {
    this.channel = searchObj
  }

  getData(data) {
    this.savedData = data
    console.log('this.savedData');
    console.log( this.savedData);
  }

}
