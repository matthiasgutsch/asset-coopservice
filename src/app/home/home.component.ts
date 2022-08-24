import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Car } from '../model/car';
import { CustomerService } from '../services/customerservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = '';
  display: boolean;
  cols = [
    { field: 'vin', header: 'Vin', width: '25%' },
    { field: 'year', header: 'Year', width: '15%' },
    { field: 'brand', header: 'Brand', width: '35%' },
    { field: 'color', header: 'Color', width: '25%' },
  ];
  datasource: Car[];
  totalRecords: number;
  statuses: any[];
  pageSizeOptions = [10, 25, 50, { showAll: 'All' }];
  cars: Car[];
  items: MenuItem[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;

  constructor(
    private http: HttpClient,
    private customerService: CustomerService
  ) {
    this.items = [{ icon: 'pi pi-refresh' }];
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit() {
    this.customerService.getCarsLarge().then((cars) => {
      this.datasource = cars;
      this.totalRecords = this.datasource.length;
    });
  }

  loadCarsLazy(event) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(
          event.first,
          event.first + event.rows
        );
        this.loading = false;
      }
    }, 1000);
  }
}
