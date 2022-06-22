import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Sales } from '../Sales.model';
import { SalesService } from '../service/sales.service';

@Component({
  selector: 'app-consult-sales',
  templateUrl: './consult-sales.component.html',
  styleUrls: ['./consult-sales.component.css']
})
export class ConsultSalesComponent implements OnInit {

  listSales?:Sales[];
  now : any;


  constructor(private filterb: FormBuilder, private salesService: SalesService) { }

  ngOnInit() {
    this.getAll();
    this.obterDataAtual();
  }


  

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


getAll(){

  this.salesService.getAll().subscribe((response)=>{
    console.log("entrou",response);

    if(response){

      this.listSales = response;
    }

  },error=>alert('Erro ao carregar a lista de vendas, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
} 

}
