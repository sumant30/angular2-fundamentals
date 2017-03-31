import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

//Path -> app/events

@Component({

    templateUrl: 'app/events/create-event.component.html',
    styles: [`

        em 
        {
            float:right;
            color:#E05C65;
            padding-left:10px;
        }
        .error input
        {
          background-color:#E3C3C5;
        }
        .error ::-webkit-input-placeholder
        {
          color:#999;
        }
        .error ::-moz-placeholder
        {
          color:#999;
        }
        .error :-moz-placeholder
        {
          color:#999;
        }
        .error ::-ms-input-placeholder
        {
          color:#999;
        }

        `]
})
export class CreateEventComponent implements OnInit {

    isDirty: boolean = true;

    constructor(private _router: Router,private _eventService:EventService) { }

    ngOnInit() { }

    saveEvent(formValues) {
        console.log(formValues);
        this._eventService.saveEvent(formValues);
        this.isDirty = false;
        this._router.navigate(['/events']);
    }

    cancel() {
        this._router.navigate(['/events']);
    }
}