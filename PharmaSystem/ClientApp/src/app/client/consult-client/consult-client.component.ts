import { Component, OnInit } from '@angular/core';
import { ClientService } from './../service/cliente.service';
import PageResult from "./../../util/page-result.model";
import {Client} from "./../client.modal";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consult-client',
  templateUrl: './consult-client.component.html',
  styleUrls: ['./consult-client.component.css']
})
export class ConsultClientComponent implements OnInit {
  
//vars
now : any;
pageResult: PageResult<Client> = new PageResult();
listClients?:Client[];
filterForm: FormGroup;

  constructor( private clientService:ClientService,private fb: FormBuilder) { 
    this.setFilterForm();
  }

 

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

  private setFilterForm(): void {
    this.filterForm = this.fb.group({
      firstName: [null],
      cpf: [null],
      
    });
  }


  getAll(){
    this.clientService.getAll().subscribe((response)=>{
      
      if(response){
        this.listClients = response;
      }
    },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
  } 

  
  delete(Id: any){

    this.clientService.delete(Id).subscribe(()=>{
      alert('Cliente excluído com Sucesso');
      window.location.reload();
    },error=>alert('Erro, contate o desenvolvedor do sistema. Detalhes do erro: '+ error));
     
  }

 

}
