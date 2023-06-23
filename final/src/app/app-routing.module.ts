import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { VisualizarResComponent } from './visualizar-res/visualizar-res.component';
import { ReservasService } from './reservas/reservas.component';
const routes: Routes = [
  { path: '', redirectTo: '/solicitacao', pathMatch: 'full' },
  {path: 'solicitacao', component: SolicitacaoComponent},
  {path: 'reservas', component: VisualizarResComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
