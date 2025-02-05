import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';  // Import RegistrationComponent

const routes: Routes = [{
  path: 'registration',
  component: RegistrationComponent  // Route tới trang đăng ký khóa học
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
