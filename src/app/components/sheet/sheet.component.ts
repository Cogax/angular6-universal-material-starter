import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  constructor(
    public bottomSheetRef: MatBottomSheetRef<SheetComponent>
  ) { }

  ngOnInit() {
  }

  closeSheet() {
    this.bottomSheetRef.dismiss();
  }

}
