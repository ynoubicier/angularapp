import { NgModule } from '@angular/core';
import {
    IgxStepperModule,
    IgxIconModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxRadioModule,
} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';


@NgModule({
    exports: [
        IgxStepperModule,
        IgxIconModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxInputGroupModule,
        IgxRadioModule,
        HammerModule
    ]
})
export class IgniteModule { }