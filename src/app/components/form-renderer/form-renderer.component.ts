import { AfterRenderPhase, AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { FormioModule } from '@formio/angular';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { CustomFormModule } from '../../modules/custom-form/custom-form.module';


@Component({
  selector: 'app-form-renderer',
  standalone: true,
  imports: [FormioModule, FormsModule],
  templateUrl: './form-renderer.component.html',
  styleUrl: './form-renderer.component.scss'
})
export class FormRendererComponent implements OnInit {

  renderListTitle?: [];
  selectedTitle?: string;
  FormTitileControls: any
  FormControlsJson?: string
  FormSubmitJson?: string



  ngOnInit(): void {
    this.loadFormData();
    
  }

  loadFormData() {
    let formControlData: any = localStorage.getItem('FormControlData');
    if (formControlData === null) {
      console.log('Null');
      alert("No Data Found For Form Title")
    } else {
      formControlData = JSON.parse(formControlData);
      const titlesArray = formControlData.map((formTitle: any) => formTitle.title);
      this.renderListTitle = titlesArray;
    }
  }

  onTitleSelectionChange() {
    let formControlData: any = localStorage.getItem('FormControlData');
    formControlData = JSON.parse(formControlData);
    let rendrerData = formControlData.filter((ele: any) => {
      return ele.title === this.selectedTitle
    })
    console.log(rendrerData);
    this.FormTitileControls = rendrerData[0];
    this.FormControlsJson = JSON.stringify(this.FormTitileControls.components, null, 4)
  }
  onSubmit(submission: any) {
    // Handle the form submission data
    console.log('Form submitted with data:', submission.data);
    this.FormSubmitJson = JSON.stringify(submission.data, null, 4);
  }
}




















// ControlService: ComponentControlsService = inject(ComponentControlsService)
// FormTitileControls: any
// ngOnInit(): void {
//   this.ControlService.PutControls.subscribe(res=>{
//     this.FormTitileControls=res;
//     console.log(this.FormTitileControls);
//   });
// }

///////////////////////////////////////////////////////////////////////

//  ngOnInit() {
//     this.ControlService.PutControls.subscribe(res => {
//       this.FormTitileControls = res;

//       console.log(this.FormTitileControls)
//     });
//   }
