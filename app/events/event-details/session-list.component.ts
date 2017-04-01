import {Component, Input, OnInit, OnChanges}from '@angular/core'; 
import {ISession}from '../shared/event.model'; 

@Component( {
    selector:'session-list', 
    templateUrl:'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {

    @Input()sessions:ISession[]; 
    @Input()filterBy:string; 
    @Input()sortyBy:string; 
    visibleSessions:ISession[]; 

    ngOnInit() {
        console.log(this.sessions); 
    }

    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        //Just an dirty way to check if sessions are present
        if (this.sessions) {
            this.filterSessions(this.filterBy); 
            this.sortyBy === 'name'?this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    filterSessions(filter:string) {
        if (filter === 'all') {
             this.visibleSessions = this.sessions.slice(0); 
        }
        else {
            this.visibleSessions = this.sessions.filter(x =>  {return x.level.toLocaleLowerCase() === filter}); 
        }
    }

    
}

function sortByNameAsc(s1:ISession, s2:ISession) {
    if (s1.name > s2.name)return 1
    else if (s1.name === s2.name)return 0
    else return-1; 
}

function sortByVotesDesc(s1:ISession, s2:ISession) {
        return s2.voters.length - s1.voters.length; 
}