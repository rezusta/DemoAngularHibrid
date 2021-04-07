import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [
      AppComponent
  ],
  entryComponents: [
      
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['demoAngularJS']);
    console.log('Hibriddd');
  }
}