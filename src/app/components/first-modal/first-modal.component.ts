import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon.model';
import { pokeballAnimation } from 'src/app/animations/pokeball';
import { ModalData } from 'src/app/models/modalData.model';

@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.scss'],
  animations: [pokeballAnimation]
})
export class FirstModalComponent implements OnInit {

  isClicked: boolean;
  message: string;
  constructor(
    private dialogRef: MatDialogRef<FirstModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) { }

  ngOnInit(): void {
    this.message = 'Welcome to the pokemon world, click on the pokeball to discover your partner...';
  }

  openPokeball(): void {
    this.message = '';
    this.isClicked = !this.isClicked;
  }

  close() {
    this.dialogRef.close(true);
  }
}
