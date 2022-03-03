import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker/public-api';
import { ExampleHeaderComponent } from './example-header/example-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('picker') rangePicker: MatDateRangePicker<Date>;

  ngOnInit(): void {
    this.rangePicker._stateChanges.subscribe((state) => console.log(state));
  }

  // make ExampleHeaderComponent type available in our template:
  readonly ExampleHeaderComponent = ExampleHeaderComponent;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  isTouchUIActivated = false;
}
