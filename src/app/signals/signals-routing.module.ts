import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { FrmCounterComponent } from './pages/frm-counter/frm-counter.component';
import { FrmUserInfoComponent } from './pages/frm-user-info/frm-user-info.component';
import { FrmPropertiesComponent } from './pages/frm-properties/frm-properties.component';

const routes: Routes = [
   {
      path: '',
      component: SignalsLayoutComponent,
      children: [
         { path: 'counter',    component: FrmCounterComponent },
         { path: 'user-info',  component: FrmUserInfoComponent },
         { path: 'properties', component: FrmPropertiesComponent },
         { path: '**',         redirectTo: 'counter' },
   ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
