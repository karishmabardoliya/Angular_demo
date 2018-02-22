import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data : any;

  constructor( private _data: DataService) {  }
  
  ngOnInit() {
    this._data.i.subscribe(res => this.data =res)
  }


  }

