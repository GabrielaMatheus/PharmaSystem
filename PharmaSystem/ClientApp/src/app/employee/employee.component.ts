import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Employee } from './employee.modal';
import {EmployeeService} from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeForm!: FormGroup;
now : any;
employeeId:any;
employee: Employee;

@Output()
onSubmit = new EventEmitter<Employee>();

@Output()
OnCancel = new EventEmitter<void>();



  constructor(private fb: FormBuilder, private employeeService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.obterDataAtual();
    if(this.editing){
        this.loadEmployee();
    }

  }


  
 //metodo  loadClient
 loadEmployee(){
 this.employeeService.getById(this.employeeId!)
 .subscribe((employee) => {
         this.employee = employee;         
         this.EmployeeForm.patchValue({
             ...employee              
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
    this.EmployeeForm = this.fb.group({
        
        firstName: [''],
        lastName: [''],
        password: [''],
        email: [''],
        cpf: [''],
        
    });         
}  

onCancelButton(){
  this.OnCancel.emit();
  }




createEmployee(){
  if(this.editing){
    this.employeeService.update(this.employeeId,this.EmployeeForm.value).subscribe(()=>{
      alert('Funcionário editado com Sucesso');
      window.location.href="/employee/consult-employee";
    },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
  
}else{
    
  this.employeeService.create(this.EmployeeForm.value).subscribe(()=>{
    alert('Funcionário cadastrado com Sucesso');
    window.location.href="/employee/consult-employee";
  },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));

}
}


submitForm(){    
  if(this.EmployeeForm.valid){
      const form = this.EmployeeForm.value;
      this.employeeService.create(form);
  } 
} 



get editing(): boolean {
  return this.employeeId != null;
}



}
 