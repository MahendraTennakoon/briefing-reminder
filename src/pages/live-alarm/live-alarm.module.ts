import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveAlarmPage } from './live-alarm';

@NgModule({
  declarations: [
    LiveAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveAlarmPage),
  ],
})
export class LiveAlarmPageModule {}
