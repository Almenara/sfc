import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from '../modules/home/components/home-container/home-container.component';
import { MainComponent } from './layout/main/main.component';
import { MapContainerComponent } from '../modules/map/components/map-container/map-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
          path: '',  
          component: HomeContainerComponent,
      },
      {
          path: 'map',  
          component: MapContainerComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
