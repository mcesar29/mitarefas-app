import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaOutrosPage } from './tarefa-outros.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaOutrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaOutrosPageRoutingModule {}
