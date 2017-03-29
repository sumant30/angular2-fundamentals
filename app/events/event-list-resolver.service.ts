import {Injectable }from '@angular/core'; 
import {Resolve}from '@angular/router'; 
import {EventService}from './shared/event.service'; 

@Injectable()
export class EventListResolverService implements Resolve<any>  {

    constructor(private _eventService:EventService) {}

    resolve() {
        
        this._eventService.getEvents().map(events => events); 
    }
}