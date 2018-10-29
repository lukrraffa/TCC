import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumorPage } from './humor';

@NgModule({
  declarations: [
    HumorPage,
  ],
  imports: [
    IonicPageModule.forChild(HumorPage),
  ],
})
export class HumorPageModule {}
