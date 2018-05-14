import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { SheetComponent } from '../sheet/sheet.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(
    public bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  openBottomSheet() {
    this.bottomSheet.open(SheetComponent)
  }

}
