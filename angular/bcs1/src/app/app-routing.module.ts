import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCardComponent } from './components/my-card/my-card.component';

const routes: Routes = [{ path: '', component: MyCardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
