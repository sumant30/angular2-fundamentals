import {Component }from '@angular/core'; 

@Component( {
    selector:'events-list', 
    template:
    `
    <div>
    <h1>Upcoming Angular Events</h1>
    </div>
    <hr/>
    <event-thumbnail [event]="event1"  ></event-thumbnail>
    
    `
})

export class EventListcomponent {

        event1 =  {
            id:1, 
            name:'Angular Connect', 
            date:'9/29/2017', 
            time:'10:00 am', 
            price:59.99, 
            imageUrl:'app/assests/images/angular-connect.png', 
            location: {
                address:'1057 DT', 
                city:'London', 
                country:'England'
            }
        }; 

        
}

