import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  value=" ";
  nameText: string='';
  ageText: number=NaN;
  data =[];

  constructor(private _data: DataService) { 

  }
  ngOnInit() {
    this._data.i.subscribe(res => this.data = res);
    this._data.changeData(this.data);
  }

  onKey(event: KeyboardEvent)
  {
    if(this.nameText!='' || this.ageText)
    {
    this.value="Welcome to Demo";
    }
    else
    {
      this.value="";
    }
  }

  add()
  {
    this.data.push({
      'name': this.nameText,
      'age' : this.ageText,
  });
  this.nameText='';
  this.ageText=NaN;
  this._data.changeData(this.data);
  this.value="";
  }
}