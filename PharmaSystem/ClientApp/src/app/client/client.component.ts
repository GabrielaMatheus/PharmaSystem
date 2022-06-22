import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {ClientService} from './service/cliente.service';
import {Client} from "./client.modal";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  ClientForm!: FormGroup;
  now : any;
clientId:any;
client: Client;

  




@Output()
onSubmit = new EventEmitter<Client>();

@Output()
OnCancel = new EventEmitter<void>();



  constructor(private fb: FormBuilder, 
              private clientService: ClientService , 
              private route: ActivatedRoute
    ) { }

 

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.obterDataAtual();
    this.createForm();

    if(this.editing){
        this.loadClient();
    }
   }

 //metodo  loadClient
  loadClient(){
 this.clientService.getById(this.clientId!)
 .subscribe((client) => {
         this.client = client;         
         this.ClientForm.patchValue({
             ...client              
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
    this.ClientForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        address: [''],
        cpf: [''],
        
    });         
}  

onCancelButton(){
  this.OnCancel.emit();
  }

  


  createClient(){
    if(this.editing){
      this.clientService.update(this.clientId,this.ClientForm.value).subscribe(()=>{
        alert('Cliente editado com Sucesso');
        window.location.href="/client/consult-client";
      },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
    
  }else{
      
    this.clientService.create(this.ClientForm.value).subscribe(()=>{
      alert('Cliente cadastrado com Sucesso');
      window.location.href="/client/consult-client";
    },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));

  }
  }

submitForm(){    
    if(this.ClientForm.valid){
        const form = this.ClientForm.value;
        this.clientService.create(form);
    } 
} 

 get editing(): boolean {
        return this.clientId != null;
    }

}
