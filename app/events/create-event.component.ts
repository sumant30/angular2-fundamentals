import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: '<create-event></create-event>',
    template:
    `
    <h1>New event</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create Event Form will go here]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent implements OnInit {
    
    isDirty : boolean = true;
    
    constructor(private _router:Router) { }

    ngOnInit() { }

    cancel(){
        this._router.navigate(['/events']);
    }
}