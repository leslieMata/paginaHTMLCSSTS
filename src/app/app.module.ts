import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { TsComponent } from './ts/ts.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HtmlComponent,
    CssComponent,
    TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
