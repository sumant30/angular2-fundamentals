import {Routes}from '@angular/router'; 
import {
CreateEventComponent, 
EventDetailsComponent, 
EventListcomponent, 
EventListResolverService, 
EventRouteActivatorService, 
CreateSessionComponent    
    }from './events/index'; 
// import {EventListcomponent}from './events/events-list.component'; 
// import {EventDetailsComponent}from './events/event-details/event-details.component'; 
// import {CreateEventComponent}from './events/create-event.component'; 
import {Error404Component}from './errors/404.component'; 
// import {EventRouteActivatorService}from './events/event-details/event-route-activator.service'; 
// import {EventListResolverService}from './events/event-list-resolver.service'; 


export const appRoutes:Routes = 
[ {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},  {path:'events', component:EventListcomponent, resolve: {events:EventListResolverService}},  {path:'events/:id', component:EventDetailsComponent, canActivate:[EventRouteActivatorService]},  {path:'events/:id', component:EventDetailsComponent, canActivate:[EventRouteActivatorService]},  {path:'404', component:Error404Component},  {path:'', redirectTo:'/events', pathMatch:'full'},  {path:'user', loadChildren:'app/user/user.module#UserModule'}
]; 