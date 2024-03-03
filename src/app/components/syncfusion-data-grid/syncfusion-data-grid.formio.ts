import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../registerCustomComponents/elements.common';
import { registerCustomFormioComponent } from '../../registerCustomComponents/register-custom-component';
import { SyncfusionDataGridComponent } from './syncfusion-data-grid.component';
// import { Templates } from 'formiojs';
// ../fomio-custom/register-custom-component
const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'myrating',
  selector: 'sync-grid',
  title: 'sync-grid',
  group: 'syncfusion',
  icon: 'th',
  // template: Templates.current.custom
};

export function registerComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, SyncfusionDataGridComponent, injector);
}
