import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedPipeComponent } from './embedded-pipe/embedded-pipe.component';
import { Routes, RouterModule } from '@angular/router';
import { JoinPipe } from './join.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

const routes: Routes = [
  { path: '', component: EmbeddedPipeComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },

];

@NgModule({
  declarations: [EmbeddedPipeComponent, JoinPipe, CustomPipeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PipeExampleModule { }
