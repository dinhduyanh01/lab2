import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([ 
      { path: "", 	component: ProductComponent }, 
      {path: 'product', component:ProductComponent},
      { path: 'product/:ID', component:DetailComponent },
      { path: '**', redirectTo: 'product', pathMatch: 'full' },
    
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
