import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// another widget imports
import { SampleWidgetModule, SampleComponent } from "another-ng-lib";

// imports
import { HeaderComponent } from './header.component';
import { TopNavComponent } from './top-nav/top-nav.component';

// exports
export { HeaderComponent } from './header.component';
export { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  { path: 'header-widget-topnav', component: TopNavComponent },
  { path: 'header-widget', component: HeaderComponent },
  { path: 'sample-widget', component: SampleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SampleWidgetModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HeaderComponent, TopNavComponent],
  exports: [
    HeaderComponent, // <-- this!
    TopNavComponent
  ]
})
export class HeaderWidgetModule { }