import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { FrmCounterComponent } from './pages/frm-counter/frm-counter.component';
import { FrmUserInfoComponent } from './pages/frm-user-info/frm-user-info.component';
import { FrmPropertiesComponent } from './pages/frm-properties/frm-properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
   declarations: [
      SignalsLayoutComponent,
      FrmCounterComponent,
      FrmUserInfoComponent,
      FrmPropertiesComponent,
      SideMenuComponent
   ],
   imports: [
      CommonModule,
      SignalsRoutingModule
   ]
})
export class SignalsModule { }
