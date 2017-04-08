import {Component }from '@angular/core';
import {AuthService }from '../user/auth.service';
import {ISession}from '../events/shared/event.model';
import {EventService}from '../events/shared/event.service';

@Component( {
selector:'nav-bar',
templateUrl:'app/nav/navbar.component.html',
styles:
[
        `
        .nav.navbar-nav
        {
        font - size:15px;
        }

        #searchForm
        {
        margin - right:100px;
        }

        @media (maxWidth:1200px)
        {
            #searchForm
            {
                display:none;
            }
        }

        li > .active
        {
        color:#F97924;
        }
`
    ]
})
export class NavbarComponent {

    searchTerm:string = '';
    foundSessions:ISession[];

    constructor(private _authService:AuthService, private _eventService:EventService) {
    //console.log(_authService.currentUser!=null ?_authService.currentUser.firstName:'No User');
    }

    searchSessions(searchTerm) {
     this._eventService.searchSessions(searchTerm).subscribe
         (x =>  {
             this.foundSessions = x;
             //console.log(this.foundSessions);
         });
    }

}