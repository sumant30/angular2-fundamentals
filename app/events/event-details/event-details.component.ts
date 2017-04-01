import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISession } from '../shared/event.model';

@Component({

    templateUrl: 'app/events/event-details/event-details.component.html',
    styles:
    [`
            .container {
                padding-left:20px; 
                padding-right:20px; 
            }

            .event-image {
                height:100px; 
            }

            a {cursor:pointer;}
    `]
})
export class EventDetailsComponent implements OnInit {

    event: any;
    addMode: boolean = false;

    constructor(private _eventService: EventService, private _activatedroute: ActivatedRoute, private _router: Router) { }

    ngOnInit() {
        this.event = this._eventService.getEvent(+ this._activatedroute.snapshot.params["id"]);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.session(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);    
        this.addMode = false;
    }

    cancelNewSession(){
        this.addMode = false;
    }
}