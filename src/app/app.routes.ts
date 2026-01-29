import { Routes } from '@angular/router';
import { UserInfoComponent } from './user-info-component/user-info-component';
import { RegistrationFormComponent } from './registration-form-component/registration-form-component';

export const routes: Routes = [
    {path: '', component: RegistrationFormComponent},
    {path: 'userInfo', component: UserInfoComponent}
];
