import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components';
import { GenericHttpService } from './services/generic-http/generic-http.service';

const COMPONENTS: any[] = [
  MapComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS,
    CommonModule
  ],
  providers: [
    GenericHttpService
  ]
})
export class SharedModule { }
