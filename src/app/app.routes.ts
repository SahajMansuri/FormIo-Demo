import { Routes } from '@angular/router';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

export const routes: Routes = [
    {path:'FromBuilder', component:FormBuilderComponent},
    {path:'FromRenderer', component:FormRendererComponent}
];
