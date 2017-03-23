import {Routes}from '@angular/router'; 
import {EventListcomponent}from './events/events-list.component'; 
import {EventDetailsComponent}from './events/event-details/event-details.component'; 

export const appRoutes:Routes = 
[ 
    {path:'events', component:EventListcomponent},  
    {path:'events/:id', component:EventDetailsComponent},  
    {path:'', redirectTo:'/events', pathMatch:'full'}
]