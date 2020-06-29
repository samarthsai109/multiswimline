import { Component, OnInit, Output, EventEmitter, Input, OnChanges  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-swimline',
  templateUrl: './swimline.component.html',
  styleUrls: ['./swimline.component.css']
})
export class SwimlineComponent implements OnInit, OnChanges {

  @Output() public selectedValue = new EventEmitter<any>();
  @Input() public retrieveData: any;

  displayedColumns: Array<String> = [];
  columnsToDisplay: Array<String> = []; //Bind columns to Datatable
  selectedRowIndex: any;
  data = [];
  //dataTemp:string[][];
  selected: string='';
  selectedColumnName: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   // this.dataTemp = [];
    //console.log(this.retrieveData);
  }

  //ngOnChanges to bind the description value into Table cell
  ngOnChanges() {
    var rowData = [];
     console.log(this.selectedRowIndex);
     if(this.retrieveData) {
       var updateData = this.retrieveData[this.retrieveData.length - 1]['Description'];
       if(this.data){
       
         rowData = this.data[this.selectedRowIndex]
         rowData[this.selectedColumnName] = updateData;

        this.data[this.selectedRowIndex] = rowData;
      }
    }
    }   


  

  highlight(obj,index){
    console.log(index);

    this.selectedColumnName = obj;

    if(index >= 0 && index <= this.data.length - 1) {
      this.selectedRowIndex = index;
    }

    this.selectedValue.emit(obj);    

 }

   arrowUpEvent(index: number){
   this.highlight('',index - 1);
 }

 //Highlight next row and Add new row if last row is selected
 arrowDownEvent(index: number){
    if(index === this.data.length - 1) {
      this.addRow();
    }
    else {
      this.highlight('',index + 1);
    }
 }

 //Adding Dynamic columns to the Table
  addColumn() {
    if(this.displayedColumns.length === 0) {
      this.displayedColumns.push(this.selected);
    } else if(this.displayedColumns.indexOf(this.selected) < 0) {
      this.displayedColumns.push(this.selected);
    }

    //Get index of the select value in the array
    const val = this.displayedColumns.indexOf(this.selected);
    
    //updating the columns in the table. 
   this.columnsToDisplay.push(this.displayedColumns[val]);
  }

  

  addRow() {
    
    var tempRowData = [];
    var tempColumns = this.columnsToDisplay;
    
    if(this.columnsToDisplay.indexOf('No') === -1) {
      this.displayedColumns.splice(0, 0, "No");
      this.columnsToDisplay = ['No'];

       this.columnsToDisplay.push(...tempColumns);

       tempRowData = this.manufactureArray(this.columnsToDisplay.slice(),1);
      this.data.push(tempRowData[0]);

    } else {
      tempRowData =  this.manufactureArray(this.columnsToDisplay.slice(), this.data.length + 1);
      this.data = this.data.concat(tempRowData);
    }

  }

  //Prepare row objects for Table
  manufactureArray(props, num) {
    var arr = [];
    var obj;

    // Loop for the number of objects you want to push to the array
    for (var i = 0; i < 1; i++) {
      obj = {};
  
      // Create the properties within a new object, and push it into the array
      for (var j = 0; j < props.length; j++) {
        
        if(props[j] === 'No') {
          obj[props[j]] = num;
        } else {
          obj[props[j]] = '';
        }
      }
      arr.push(obj);
    }
    return arr;
  }

  }
