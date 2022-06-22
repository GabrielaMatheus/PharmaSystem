import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formLogin!: FormGroup;
  credencial:any;
  email:any;
  password:any;

  @ViewChild('emailHtml',{static: true}) emailHtml:ElementRef; 
  @ViewChild('passwordHtml',{static: true}) passwordHtml:ElementRef; 


  constructor(private homeService: HomeService,private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.carregarUser();
  }

  carregarUser(){
    console.log('entrou');
    
    this.homeService.getAll().subscribe((response)=>{
      console.log(response);
      this.email = response[4].email;
      this.password = response[4].password;
    },error=> console.log(error));
  }



  
  private createForm(){
    this.formLogin = this.fb.group({
        
        email: [''],
        password: [''],
        
        
    });         
}  


onLogin(){

  if(this.email != this.emailHtml.nativeElement.value || this.password != this.passwordHtml.nativeElement.value ){
    alert("Email ou senha inválidos incorreto");
  }else{
    window.location.href="/dashboard";
  }

}


}
