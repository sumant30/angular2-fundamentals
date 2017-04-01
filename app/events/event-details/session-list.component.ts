import {Component,Input,OnInit} from '@angular/core';
import {ISession} from '../shared/event.model';

@Component({
    selector:'session-list',
    templateUrl:'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit{

    ngOnInit(){
        console.log(this.sessions);
    }

    @Input() sessions:ISession[];
}