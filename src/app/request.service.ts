import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  private readonly urlServer = 'http://localhost:8084'

  constructor(
    private http: HttpClient 
  ) {
    
   }

  login(usuario: string, senha: string) {
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic dGVzdGU6dGVzdGU='
      })
    };
    return this.http.post(`${this.urlServer}/oauth/token`, body, httpOptions)
  }

  buscarUsurario(login){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`

      })
    };
    return this.http.get(`${this.urlServer}/usuario/procurar/${login}`, httpOptions);
  }

  listarMinhasTarefas(dia) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`

      })
    };
    return this.http.get(`${this.urlServer}/tarefapessoal/usuario/${environment.usuarioId}/${dia.split('/')[0]}/${dia.split('/')[1]}/${dia.split('/')[2]}`, httpOptions);
  }

  fecharTarefa(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`

      })
    };
    return this.http.get(`${this.urlServer}/tarefapessoal/fechar/${id}`, httpOptions);
  }


  buscarTarefa(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`

      })
    };
    return this.http.get(`${this.urlServer}/tarefapessoal/${id}`, httpOptions);
  }

  editarTarefa(tarefa) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`

      })
    };
    return this.http.post(`${this.urlServer}/tarefapessoal`,tarefa, httpOptions);
  }

  criarUsuario(usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      })
    };
    return this.http.post(`${this.urlServer}/usuario`,usuario, httpOptions);
  }
}
