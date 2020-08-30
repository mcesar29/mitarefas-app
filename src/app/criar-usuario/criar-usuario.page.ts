import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

export class usuario{
  nome: string
  email: string
  senha: string
  login: string
}

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
})
export class CriarUsuarioPage implements OnInit {
  usuario:usuario;
  constructor(
    private requestService:RequestService,
    private route:Router
    ) { }

  ngOnInit() {
    this.usuario = new usuario();
  }

  enviarUsuario(){
    this.requestService.criarUsuario(this.usuario).subscribe(res=>{
      this.route.navigateByUrl('/login')
    })
    console.log(this.usuario)
  }

}
