import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { scheduleStatus } from '../classes/status';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prod_status: scheduleStatus[];
  sorting: string = 'number';
  group: string;
  input_data = {
    'sorting':'number',
    'group':'',
  };
  constructor(private data: DataService) { setInterval(()=> {this.search()},5000) }

  ngOnInit(): void {
    this.search();
  }
  search_latches(){
    this.group = 'L';
    this.search();
  }
  search_clamps(){
    this.group = 'C';
    this.search();
  }
  search_all(){
    this.group = '';
    this.search();
  }
  search(){
    // this.input_data['sorting'] = 'number';
    this.input_data['group']=this.group;
    this.data.getData('',"",this.input_data)
    .subscribe(data=> 
      {
        this.prod_status = data;
        console.log(this.prod_status)
      }
    )
    console.log("Refreshes status");
  }
}
