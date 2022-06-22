import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Employee } from '../employee.modal';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-consult-employee',
  templateUrl: './consult-employee.component.html',
  styleUrls: ['./consult-employee.component.css'],
  
})
export class ConsultEmployeeComponent implements OnInit {
  
  ConsultEmployeeForm!: FormGroup;
  now : any;
listEmployee?:Employee[];

  constructor(private filterb: FormBuilder, private employeeService: EmployeeService) { }

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

  private setFilterForm(){
    this.ConsultEmployeeForm = this.filterb.group({
        firstName: [''],
        cpf: [''],
        
    });         
}  





getAll(){

  this.employeeService.getAll().subscribe((response)=>{

    if(response){
      this.listEmployee = response;
    }

  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
} 

delete(Id: any){

  this.employeeService.delete(Id).subscribe(()=>{
    alert('Funcionário excluído com Sucesso');
    window.location.reload();
  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
  
}


}
