import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  //providers: [DataServiceService]
})
export class FirstComponent implements OnInit {
  items: string[] = [];
  phoneName: string = '';
  @Input() messageFromSecond = ''
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    const data = this.dataService.getData();
    this.items = [...data];
  }
  addAddItem(name: string) {
    console.log(name);
    if (name) {
      this.dataService.addData(name);
      this.reloadData();
    }
  }
}
