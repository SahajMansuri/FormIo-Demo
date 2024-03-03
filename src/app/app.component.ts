import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SyncfusionDataGridComponent } from './components/syncfusion-data-grid/syncfusion-data-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SyncfusionDataGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, DoCheck{
  ngDoCheck(): void {
    setTimeout(() => {
      const els = document.querySelectorAll(
        'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
      );
      els.forEach((e) => {
        e.remove();
      });
    }, 200);
  }
  title = 'FormIo';
  ngOnInit(): void {
        setTimeout(() => {
      const els = document.querySelectorAll(
        'div[style*="z-index: 999999999"]'
      );
      els.forEach((e) => {
        e.remove();
      });
    }, 200);
    
  }

//   onChange(event: any) {
//     console.log(event);
//     if (['addComponent', 'saveComponent', 'deleteComponent'].indexOf(event.type) > -1) {
//       setTimeout(() => {
//         const els = document.querySelectorAll(
//             'div[style*="z-index: 999999999"]'
//         );
//         els.forEach((e) => {
//             e.remove();
//         });
//     }, 0);
//     }
//   }
}

