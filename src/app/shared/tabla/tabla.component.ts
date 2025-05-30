import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  titulo = 'Materias - Ingeniería en Computación';

  materias = [
    { materia: 'Matemáticas Discretas', horario: '08h00', docente: 'Ing. Garcia' },
    { materia: 'Desarrollo Web', horario: '13h00', docente: 'Ing. Lema' },
    { materia: 'Física I', horario: '14h00', docente: 'Ing. Rodriguez' },
    { materia: 'Interaccion Hombre Maquina', horario: '16h30', docente: 'Ing. Narvaez' }
  ];
}
