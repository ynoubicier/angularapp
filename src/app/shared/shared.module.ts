import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { IgniteModule } from './ignite.module';
import { NgOptimizedImage } from '@angular/common'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    IgniteModule,
    NgOptimizedImage
  ],
  exports: [
    MaterialModule,
    IgniteModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
