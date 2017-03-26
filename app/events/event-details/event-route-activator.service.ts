import {Router, ActivatedRouteSnapshot, CanActivate}from '@angular/router'; 
import {Injectable }from '@angular/core'; 
import {EventService}from '../shared/event.service'; 

@Injectable()
export class EventRouteActivatorService implements CanActivate {

    constructor(private _eventService:EventService, private _router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists =  ! ! this._eventService.getEvent(+route.params['id']); 

        if(!eventExists){
            this._router.navigate(['/404']);
        }

        return eventExists;
    }
}