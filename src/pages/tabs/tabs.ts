import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AlarmsPage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlarmsPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
