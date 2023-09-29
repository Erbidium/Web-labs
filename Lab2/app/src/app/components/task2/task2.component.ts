import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  rows: any[] = [];

  selectedColor: string = ';'

  variant: number = 6;

  ngOnInit(): void {
    this.fillTable();
  }

  fillTable(): void {
    let cellValue = 1;
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 6; j++) {
        const cell = {
          value: cellValue,
          backgroundColor: 'transparent'
        };
        row.push(cell);
        cellValue++;
      }
      this.rows.push(row);
    }
  }

  handleCellHover(cell: number) {
    if (cell === this.variant) {
      this.rows[0][5].backgroundColor = this.getRandomColor();
    }
  }

  handleCellClick(cell: number) {
    if (cell === this.variant) {
      this.rows[0][5].backgroundColor = this.selectedColor;
    }
  }

  handleCellDoubleClick() {
    for (let i = 0; i < 6; i++) {
      this.rows[i][5].backgroundColor = this.selectedColor;
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
