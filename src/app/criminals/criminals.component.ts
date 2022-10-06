import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criminals',
  templateUrl: './criminals.component.html',
  styleUrls: ['./criminals.component.css']
})
export class CriminalsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
