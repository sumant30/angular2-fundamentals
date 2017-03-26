import {Component,OnInit }from '@angular/core'; 
import {EventService}from './shared/event.service'; 
import {ToastrService}from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router'; 

@Component( {
    // selector:'events-list', 
    template:
    `
    <div>
    <h1>Upcoming Angular Events</h1>
    </div>
    <hr/>
    <div  class="row">
      <div *ngFor="let event of events" class="col-md-5">
           <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>     
    </div>
    
    
    `
})

export class EventListcomponent implements OnInit {

    events:any;

    constructor(private _eventService:EventService,private _toastr:ToastrService,private _route:ActivatedRoute){
      //not a good pratice
      //this.events = _eventService.getEvents();
    }    

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

      //Commented out as we are using observables
      //this.events = this._eventService.getEvents();
      
      //Commented out as the data is going to be present on route
      // this._eventService.getEvents().subscribe(
      //   events=>
      //   {
      //     this.events = events
      //   });

      //Get the data from route
      console.log(this._route.snapshot.data);
      this.events = this._route.snapshot.data['events'];  
    }
    
    handleThumbnailClick(eventName){
        this._toastr.success(eventName);
    }

}

