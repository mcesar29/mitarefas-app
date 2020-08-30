import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { TarefaPage } from '../tarefa/tarefa.page';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-minhas-tarefas',
  templateUrl: './minhas-tarefas.page.html',
  styleUrls: ['./minhas-tarefas.page.scss'],
})
export class MinhasTarefasPage implements OnInit{
  horaAtual:Date;
  horaBusca:Date;
  horaitem:Date;
  dia:string;
  dataHora;
  itens;/* = [
  {nome:'Comprar sapato',dataExecucao:'2020-08-21 20:49:24.87171',status:true},
  {nome:'Ligar para mãe',dataExecucao:'2020-08-21 21:49:24.87171',status:true},
  {nome:'fazer transferencia',dataExecucao:'2020-08-21 21:49:24.87171',status:false},
  {nome:'calibrar pneu do carro',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'olhar todos os relatorios da empresa',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste2',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste3',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste2',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste3',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste2',dataExecucao:'2020-08-21 23:49:24.87171',status:false},
  {nome:'teste3',dataExecucao:'2020-08-21 23:49:24.87171',status:false}] */
  
  constructor( 
    public modalController: ModalController,
    public requestService: RequestService,
  ) { }
  
  ngOnInit() {
    
    this.horaAtual= new Date();
    this.horaBusca=new Date();
    //this.dia = this.horaAtual.getDay().toString();
    this.dia = this.horaBusca.toLocaleDateString('pt',{month:"2-digit", day:"2-digit"});
 
    this.listarTarefas();
  }
  testeHora(horaItem,status){
    this.horaitem = new Date(horaItem);
    if(status == 'EXECUTADO'){
      return 'finalizado'
    }else{
      if(this.horaitem < this.horaAtual){
        return 'atrasado'
      }else{
        return 'pendente'
      }
    }

  }

  listarTarefas(){
    this.requestService.listarMinhasTarefas(this.horaBusca.toLocaleDateString()).subscribe(res=>{
      this.itens = res;
    })
  }

  

  next(){
    this.horaBusca.setDate(this.horaBusca.getDate() + 1);
    this.dia = this.horaBusca.toLocaleDateString('pt',{month:"2-digit", day:"2-digit"});
    this.requestService.listarMinhasTarefas(this.horaBusca.toLocaleDateString()).subscribe(res=>{
      this.itens = res;
    })
  }
  back(){
    this.horaBusca.setDate(this.horaBusca.getDate() - 1);
    this.dia = this.horaBusca.toLocaleDateString('pt',{month:"2-digit", day:"2-digit"});
    this.requestService.listarMinhasTarefas(this.horaBusca.toLocaleDateString()).subscribe(res=>{
      this.itens = res;
    })
  }

  async presentModalEdit(tipo,id) {
    console.log(123123)
    const modal = await this.modalController.create({
      component: TarefaPage,
      componentProps: {
        'tipo': tipo,
        'id': id
      }
    });
    await modal.present()
    await modal.onWillDismiss();
    this.listarTarefas();
    return ;
  }

  doRefresh(event) {
    this.requestService.listarMinhasTarefas(this.horaBusca).subscribe(res=>{
      this.itens = res;
      event.target.complete();
    })
  }

  fecharTarefa(id){
    this.requestService.fecharTarefa(id).subscribe(res=>{
      this.listarTarefas();
    })
  }


}
