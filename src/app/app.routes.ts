import { Routes } from '@angular/router';
import { UserInfoComponent } from './user-info-component/user-info-component';
import { RegistrationFormComponent } from './registration-form-component/registration-form-component';
import { UnsavedChangedGurad } from './unsaved.guard';

export const routes: Routes = [
    {path: '', component: RegistrationFormComponent, canDeactivate: [UnsavedChangedGurad]},
    {path: 'userInfo', component: UserInfoComponent}
];
