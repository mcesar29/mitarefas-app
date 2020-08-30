import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestService } from '../request.service';
import { environment } from 'src/environments/environment.prod';
import { EventEmitter } from 'protractor';

export class tarefa{
  id:number
  idUsuario:number
  tipoTarefa:string
  nome:string
  descricao:string
  dataPublicacao:string
  dataFinal:string
  dataExecucao:string
  status:string
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
})
export class TarefaPage implements OnInit {
  @Input() tipo: string;
  @Input() id: string;
  tarefa:tarefa;

  constructor(
    public modalController: ModalController,
    public requestService: RequestService
    ) { }

  ngOnInit() {
    this.tarefa = new tarefa();
  }

  close(){
    this.modalController.dismiss();
  }
  enviarTarefa(){
    this.tarefa.idUsuario = environment.usuarioId;
    let data = this.tarefa.dataFinal.split('T')[0]
    let hora = this.tarefa.dataFinal.split('T')[1]
    this.tarefa.dataFinal = data+'T'+hora.split('-')[0]
    this.requestService.editarTarefa(this.tarefa).subscribe((res:tarefa)=>{
      this.tarefa = res;
      this.close();
    })
  }

  buscarTarefa(){
    this.requestService.buscarTarefa(this.id).subscribe((res:tarefa)=>{
      this.tarefa = res;
      console.log(res);
    })
  }

  ionViewDidEnter() {
    this.tarefa = new tarefa();
    console.log('entrou')
    console.log(this.tipo)
    if(this.tipo =='edit'){
      
      this.buscarTarefa();
    }else{
      this.tarefa.id = 0;
    }
  }

}
