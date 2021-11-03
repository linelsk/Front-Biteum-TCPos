import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Maruchan', weight: 1.0079, symbol: '0001' },
  { position: 2, name: 'Cocacola', weight: 4.0026, symbol: '0002' },
  { position: 3, name: 'Rancheritos', weight: 6.941, symbol: '0003' },
  { position: 4, name: 'Boing', weight: 9.0122, symbol: '0004' },
  { position: 5, name: 'Aspirinas', weight: 10.811, symbol: '0005' },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  formProduct: FormGroup;
  formSale: FormGroup;
  public user: any = {
    data: "",
    nombre: ""
  };
  //formSale
  today: Date = new Date();
  public section_active: string = 'home';

  constructor(
    private ngxService: NgxUiLoaderService,
    private fb: FormBuilder
  ) {
    this.formSale = this.fb.group({
      searchProduct: ['']
    });

    this.formProduct = this.fb.group({
      sku: ['', Validators.required],
      price: ['', Validators.email],
      nameProduct: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    //this.ngxService.start(); 
    //setTimeout(() => {
    //  this.ngxService.stop(); 
    //}, 3000);
    this.user.data = JSON.parse(localStorage.getItem('myUser') || '{}');
    this.user.nombre = this.user.data.name + " " + this.user.data.lastName + " " + this.user.data.motherLastName;

    this.today = new Date();

    setInterval(() => {

      this.today = new Date();

    }, 1000);

  }

  async showSection(section: string) {
    this.ngxService.start();
    await setTimeout(() => {
      this.ngxService.stop();
      this.section_active = section;
    }, 1000);
  }

  async saveProduct(result: any) {

  }
}
