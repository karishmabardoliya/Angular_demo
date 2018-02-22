import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  p = null;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.getConfig().subscribe(res => this.p = res)
  }

}
