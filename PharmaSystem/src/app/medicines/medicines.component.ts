import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {MedicineTypeService} from './service/medicine.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  MedicineForm!: FormGroup;

  constructor(private fb: FormBuilder, private medicineService: MedicineTypeService) { 
  }
 
  ngOnInit() {
    this.createForm();
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


  private createForm(){
    this.MedicineForm = this.fb.group({
        id: [undefined],
        name: [''],
        price: [''],
        category: [''],
        quantity: [''],
        sideEffects: [''],
        howToUse: [''],
        // faltam 3 campos no bd: como usar, efeitos colateirais e quantidade
    });         
}  

  private createMedicine(){
    console.log(this.MedicineForm.value);
    this.medicineService.create(this.MedicineForm.value)
  }

  private onCreate(){
    console.log("entrou");
    this.createMedicine();
  }

 

}
