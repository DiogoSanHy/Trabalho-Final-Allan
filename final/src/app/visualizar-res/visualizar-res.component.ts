import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../reservas/reservas.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-visualizar-res',
  templateUrl: './visualizar-res.component.html',
  styleUrls: ['./visualizar-res.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule],
})
export class VisualizarResComponent implements OnInit {
  reservas: any;
  dataSource: any;
  constructor(private reservasService: ReservasService) { }
  ngOnInit() {
    this.reservasService.getReservas()
      .subscribe((data: any) => {
        this.reservas = data;
      });
      this.dataSource = new MatTableDataSource();
  }
}
