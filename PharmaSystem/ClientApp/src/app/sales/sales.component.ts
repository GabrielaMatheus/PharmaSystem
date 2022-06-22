import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from './service/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  salesForm!: FormGroup;
  now : any;

  constructor(private fb: FormBuilder, private salesService: SalesService) {
   }

  ngOnInit() {
    this.createForm();
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


private createForm(){
  this.salesForm = this.fb.group({
    medicine:[''],
    totalValue: [''],
    employee: [''],
    costumer: [''],
      
  });         
}  

createSale(){
  this.salesService.create(this.salesForm.value).subscribe((response)=>{
    console.log(response);
    alert('Venda efetuada com Sucesso');
    window.location.href="/sales/consult-sales";
  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));

}


  submitForm(){    
    if(this.salesForm.valid){
        const form = this.salesForm.value;
        this.salesService.create(form);
    }
} 





}
