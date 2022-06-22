import { Component, OnInit } from '@angular/core';
import { MedicineType } from '../medicine.model';
import { MedicineTypeService } from '../service/medicine.service';

@Component({
  selector: 'app-consult-medicines',
  templateUrl: './consult-medicines.component.html',
  styleUrls: ['./consult-medicines.component.css']
})
export class ConsultMedicinesComponent implements OnInit {

  constructor(private medicineService:MedicineTypeService) { }

  ngOnInit() {
    this.getAll();
    this.obterDataAtual();
  }


    
now : any;
listMedicines?:MedicineType[];

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
  console.log('entrou get');
  this.medicineService.getAll().subscribe((response)=>{

    if(response){
      this.listMedicines = response;
    }
  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
} 


delete(Id: any){

  this.medicineService.delete(Id).subscribe(()=>{
    alert('Medicamento excluído com Sucesso');
    window.location.reload();
  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
  
}



}
