import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-client',
  templateUrl: './consult-client.component.html',
  styleUrls: ['./consult-client.component.css']
})
export class ConsultClientComponent implements OnInit {

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


   mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }
  

}
