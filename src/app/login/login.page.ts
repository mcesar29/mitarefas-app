import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
export class token {
  access_token: string;
}
export class usuario{
  id:number
  nome:string
  email:string
  celular:string
  login:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit{
  
  constructor( 
    private requestService : RequestService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    if(environment.start == false){
      console.log(environment.start)
      console.log(123)
      window.location.reload();
    }
    if(environment.start == true){
      environment.start = false
    }

  }

  login(form:NgForm){
    localStorage.setItem('tokenmitarefas', JSON.stringify({ token: null }));
    console.log(form.value.login)
    console.log(form.value.senha)
    this.requestService.login(form.value.login,form.value.senha).subscribe((res: token) =>{
      this.armazenarToken(res.access_token);
      this.requestService.buscarUsurario(form.value.login).subscribe((res:usuario)=>{
        environment.usuarioId = res.id;
        this.router.navigate(['/minhastarefas']);
      })
    },error=>{
      console.log(error)
    })
    console.log(form.value.login)
    console.log(form.value.senha)
  }

  private armazenarToken(token: string) {
    localStorage.setItem('tokenmitarefas', JSON.stringify({ token: token }))
    environment.token = token;
  }
}
