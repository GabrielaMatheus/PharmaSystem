import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MedicineType } from './medicine.model';
import {MedicineTypeService} from './service/medicine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  MedicineForm!: FormGroup;
now : any;
medicineId:any;
medicine: MedicineType;



@Output()
onSubmit = new EventEmitter<MedicineType>();

@Output()
OnCancel = new EventEmitter<void>();




  constructor(private fb: FormBuilder, private medicineService: MedicineTypeService,private route: ActivatedRoute) { 
  }
 
  ngOnInit() {
    this.medicineId = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.obterDataAtual();
    if(this.editing){
      this.loadMedicine();
  }
  }

  //metodo loadMedicine
  loadMedicine(){
    this.medicineService.getById(this.medicineId!)
    .subscribe((medicine) => {
            this.medicine = medicine;         
            this.MedicineForm.patchValue({
                ...medicine              
            });           
        });
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
    this.MedicineForm = this.fb.group({
        
        name: [''],
        price: [''],
        category: [''],
        amount:[''],
        
    });         
}  

onCancelButton(){
  this.OnCancel.emit();
  }



  createMedicine(){
    if(this.editing){
      this.medicineService.update(this.medicineId,this.MedicineForm.value).subscribe(()=>{
        alert('Medicamento editado com Sucesso');
        window.location.href="/medicine/consult-medicine";
      },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
    
  }else{
      
    this.medicineService.create(this.MedicineForm.value).subscribe(()=>{
      alert('Medicamento cadastrado com Sucesso');
      window.location.href="/medicine/consult-medicine";
    },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
  
  }
  }

  submitForm(){    
    if(this.MedicineForm.valid){
        const form = this.MedicineForm.value;
        this.medicineService.create(form);
    }
} 


  get editing(): boolean {
    return this.medicineId != null;
  }
  
  

  

 

}
