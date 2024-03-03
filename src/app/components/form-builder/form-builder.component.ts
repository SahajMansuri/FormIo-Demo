import { Component, ElementRef, Injector, OnInit, ViewChild, inject } from '@angular/core';

import { FormioModule } from '@formio/angular';
// import { FormFieldsTab } from '../../customFields/form-fields-tab';
import { registerComponent } from '../syncfusion-data-grid/syncfusion-data-grid.formio';



@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [FormioModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
  providers: []
})
export class FormBuilderComponent implements OnInit {
  @ViewChild('json')
  jsonElement?: ElementRef;
  options: any
  form: any = {
    components: [],
  }

  constructor(inject: Injector) {

    registerComponent(inject);
    this.options = {
      sanitizeConfig: {
        allowedTags: ['sync-grid'],
        addTags: ['sync-grid']
      },
      builder: {
        basic: {
          default: false,
          weight: 1
        },
        syncfusion: {
          title: 'syncfusion Grid',
          weight: 10,
          components: {

          }
        }
      }
    }
  }

  ngOnInit(): void {

  }




  @ViewChild('FormBilder')
  FormBilder: any;

  @ViewChild('FormTitle')
  FormTitle?: ElementRef;

  OnSubmit() {
    console.log(this.FormTitle?.nativeElement.value)
    this.FormBilder = {
      title: this.FormTitle?.nativeElement.value,
      components: this.FormBilder.form.components
    }

    console.log(this.FormBilder);
    let existingData = localStorage.getItem('FormControlData');
    if (existingData === null) {
      localStorage.setItem('FormControlData', JSON.stringify([this.FormBilder]));
    } else {
      let formControlData: any[] = JSON.parse(existingData);
      console.log(formControlData);
      formControlData.push(this.FormBilder);
      localStorage.setItem('FormControlData', JSON.stringify(formControlData));
    }
  }
}


