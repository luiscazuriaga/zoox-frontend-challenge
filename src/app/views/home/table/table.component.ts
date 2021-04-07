import { Component, Input} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { CityService } from 'src/app/shared/service/city.service';
import { StateService } from 'src/app/shared/service/state.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filter',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = [];
  dataSource:MatTableDataSource<any>;
  resource = [];

  constructor(
    public stateService: StateService,
    public cityService: CityService
  ){}

  @Input() infoBy: "city" | "state" | string

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this[`${this.infoBy}Service`].get().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.resource)
      this.resource = Object.entries(data.resource[0]).filter(item => ["_id","nome","estadoId","abreviacao"].includes(item[0]))//
      this.displayedColumns = this.resource.map(item => item[0])
    })
  }

  updateData(id,data):void{
    this[`${this.infoBy}Service`].update(id,data).subscribe(data => this.getData())
  }

  deleteData(id):void{
    this[`${this.infoBy}Service`].delete(id).subscribe(data => this.getData())
  }

  applyFilter(event: Event):void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
