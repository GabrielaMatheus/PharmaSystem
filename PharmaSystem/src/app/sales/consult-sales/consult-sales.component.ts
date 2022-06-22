import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-sales',
  templateUrl: './consult-sales.component.html',
  styleUrls: ['./consult-sales.component.css']
})
export class ConsultSalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.obterDataAtual();
  }


  
now : any;

public  obterDataAtual() {
  const date = new Date();

  const ano = date.getFullYear();
  const mes = date.getMonth()+1;
  const dia = date.getDate();

  let mesValor = '';
  let diaValor = '';
  let anoValor = '';

  anoValor = ((ano < 10) ? '0' : '').concat(ano.toString())
  mesValor = ((mes < 10) ? '0' : '').concat(mes.toString())
  diaValor = ((dia < 10) ? '0' : '').concat(dia.toString())

  var valor = (diaValor).concat('/').concat(mesValor).concat('/').concat(anoValor);
  this.now = valor;
  return valor;
}

}
