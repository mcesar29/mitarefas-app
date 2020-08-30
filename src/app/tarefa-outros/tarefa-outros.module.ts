import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaOutrosPageRoutingModule } from './tarefa-outros-routing.module';

import { TarefaOutrosPage } from './tarefa-outros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaOutrosPageRoutingModule
  ],
  declarations: [TarefaOutrosPage]
})
export class TarefaOutrosPageModule {}
