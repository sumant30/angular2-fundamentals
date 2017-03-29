import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/login.component.html',
    styles:
    [
        `em 
        {
            float:right;
            color:#E05C65;
            padding-left:10px;
        }`
    ]
})
export class LoginComponent {
    constructor(private _authService: AuthService,private _router:Router) { }

    login(formValues) {
        this._authService.loginUser(formValues.userName, formValues.password);
        //console.log('here');
        this._router.navigate(['events']);
    }

    cancel(){
        this._router.navigate(['events']);
    }
}