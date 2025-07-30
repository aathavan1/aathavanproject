import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialougData } from '../appconstant';

@Component({
  selector: 'app-dialouge',
  standalone: true,
  imports: [MatButton],
  templateUrl: './dialouge.component.html',
  styleUrl: './dialouge.component.css'
})
export class DialougeComponent {

  dialogRef = inject(MatDialogRef<DialougeComponent>);
  data = inject<dialougData>(MAT_DIALOG_DATA)
  

  dispose() {
    this.dialogRef.close()
  }
}
