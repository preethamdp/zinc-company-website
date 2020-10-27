import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent } from './redirect/redirect.component'

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  // {
  //   path: 'content',
  //   component: AppComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: 'content',
  //   pathMatch: 'full'
  // },
  {
    path:'redirect/:data',
    component:RedirectComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
