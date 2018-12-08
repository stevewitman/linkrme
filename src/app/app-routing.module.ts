import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToComponent } from './to/to.component';
import { LinksComponent } from './links/links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'links', component: LinksComponent },
  { path: '', component: LinksComponent, pathMatch: 'full' },
  { path: 'to/:slug', component: ToComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
