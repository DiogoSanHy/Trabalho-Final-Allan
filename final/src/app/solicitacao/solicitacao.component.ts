import { Component } from '@angular/core';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']

})
export class SolicitacaoComponent {

  
  nome!: string;
  matricula!: string;
  lab!: string;
  data!: string;
  email!: string;
  

  submitForm() {
    const solicitacao = {
      
      nome: this.nome,
      matricula: this.matricula,
      email: this.email,
      laboratorio: this.lab,
      data: this.data,
      
    };
    console.log(JSON.stringify(solicitacao));
  }
}
