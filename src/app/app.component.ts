import { Component } from '@angular/core';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaClientesComponent, ListaContratosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
