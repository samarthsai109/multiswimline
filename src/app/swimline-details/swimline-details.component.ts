import { Component, OnInit,ViewChild,NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormsModule,FormBuilder,Validators  } from '@angular/forms';
import { createElementCssSelector } from '@angular/compiler';

export interface Web {
  Description: string;
  URL: string;
  Expect: string;
  Action: string;
}

export interface SMS {
  Description: string;
  PhoneNumber: number;
  Expect: string;
  Reply: string;
}

export interface Voice {
  Description: string;
  PhoneNumber: number;
  Expect_to_hear: string;
  Reply: string;
}

export interface Email {
  Description: string;
  Email: string;
  Subject: string;
  Body: string;
}

@Component({
  selector: 'app-swimline-details',
  templateUrl: './swimline-details.component.html',
  styleUrls: ['./swimline-details.component.css']
})
export class SwimlineDetailsComponent implements OnInit {
  @Input() public channelType: string;
  @Output() public getSavedData = new EventEmitter<any>();

  //variable of type Interfaces
  sms: SMS;
  voice: Voice;
  web: Web;
  email: Email;

  title = 'Form Validation';
  voiceForm: FormGroup;
  webForm: FormGroup;
  smForm: FormGroup;
  emailForm: FormGroup;

  //limiting mobile number exactly to 10 characters
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  


  favorites = new Array();
  
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  
  createForm() {
    this.voiceForm = this.fb.group({
      description: [''],
      pNumber: ['', Validators.required],
      expect: [''],
      reply: [''],
    });

    this.webForm = this.fb.group({
      description: [''],
      url: ['', Validators.required],
      expect: [''],
      reply: ['']
    });

    this.smForm = this.fb.group({
      description: [''],
      phoneNumber: ['', Validators.required],
      expect: [''],
      reply: ['']
    });

    this.emailForm = this.fb.group({
      description: [''],
      email: ['', Validators.required],
      subject: [''],
      body: [''],

    });
  }

  ngOnInit(): void {
    
  }

  //Fetching data from localstorage based on the Table cell click 
  get(){
    var fromStorage = FormDataStorage.getItem(this.channelType);
    var objectsFromStorage = JSON.parse(fromStorage);
    return objectsFromStorage;
  }

  //Saving data to LocalStorage based on the Table Cell Click
  storeToLocalStorage(){
    var description = this.voiceForm.value;

    switch(this.channelType) { 
      case 'SMS': { 
         this.favorites.push( this.createSMS());
         this.smForm.reset();
         break; 
      } 
      case 'Voice': { 
        this.favorites.push( this.createVoice());
        this.voiceForm.reset();
        break; 
      } 
      case 'Web': { 
         this.favorites.push( this.createWeb());
         this.webForm.reset();
         break; 
      } 
      case 'Email': { 
         this.favorites.push( this.createEmail());
         this.emailForm.reset();
         break; 
      } 
    }

    var stringToStore = JSON.stringify(this.favorites);
    FormDataStorage.setItem(this.channelType, stringToStore);


    //var savedData = this.get();
    this.getSavedData.emit(this.get());   
  }

  //Generating the Voice Type Object using Form Data
  createVoice() : Voice {
    var voiceData = this.voiceForm.value;
    var voice: Voice = {
       Description: voiceData['description'], 
       PhoneNumber: voiceData['pNumber'], 
       Expect_to_hear: voiceData['expect'], 
       Reply: voiceData['reply']
      }
    return voice;
  }

  //Generating the SMS Type Object using Form Data
  createSMS() : SMS {
    var smsData = this.smForm.value;
    var sms: SMS = {
       Description: smsData['description'], 
       PhoneNumber: smsData['pNumber'], 
       Expect: smsData['expect'], 
       Reply: smsData['reply']
      }
    return sms;
  }

  //Generating the EMAIL Type Object using Form Data
  createEmail() : Email {
    var emailData = this.emailForm.value;
    var email: Email = {
       Description: emailData['description'], 
       Email: emailData['email'], 
       Subject: emailData['subject'], 
       Body: emailData['body']
      }
    return email;
  }

  //Generating the WEB Type Object using Form Data
  createWeb() : Web {
    var webData = this.webForm.value;
    var web: Web = {
       Description: webData['description'], 
       URL: webData['url'], 
       Expect: webData['expect'], 
       Action: webData['reply']
      }
    return web;
  }

}

//Methods to save data to LocalStorage
var FormDataStorage = {

  getItem: function (key) {
      return localStorage.getItem(key);
  },

  setItem: function (key, value) {
     localStorage.setItem(key, value);
  },

  removeItem: function (key) {
      return localStorage.removeItem(key);
  },

  clear: function () {
      var keys = new Array();
      for (var i = 0, len = localStorage.length; i < len; i++) {
          var key = localStorage.key(i);
          if (key.indexOf("prochart") != -1 || key.indexOf("ProChart") != -1)
              keys.push(key);
      }
      for (var i = 0; i < keys.length; i++)
          localStorage.removeItem(keys[i]);
  }
}



