import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {RouterModule}from '@angular/router'; 
import {FormsModule, ReactiveFormsModule}from '@angular/forms'; 
import {
        CreateEventComponent, 
        EventDetailsComponent, 
        EventListResolverService, 
        EventListcomponent, 
        EventRouteActivatorService, 
        EventService, 
        EventThumbnailComponent, 
        CreateSessionComponent,
        SessionListComponent
}from './events/index'; 
import {EventsAppComponent }from './event-app.component'; 
// import {EventListcomponent }from './events/events-list.component'; 
// import {EventThumbnailComponent }from './events/event-thumbnail.component'; 
import {NavbarComponent}from './nav/navbar.component'; 
// import {EventService}from './events/shared/event.service'; 
import {ToastrService}from './common/toastr.service'; 
// import {EventDetailsComponent }from './events/event-details/event-details.component'; 
import {appRoutes}from './route'; 
// import {CreateEventComponent}from './events/create-event.component'; 
import {Error404Component}from './errors/404.component'; 
// import {EventRouteActivatorService}from './events/event-details/event-route-activator.service'; 
// import {EventListResolverService}from './events/event-list-resolver.service'; 
import {AuthService}from './user/auth.service'; 
import {CollapsibleWellComponent}from './common/collapsible-well.component'; 

@NgModule( {
declarations:
    [ 
    EventsAppComponent, 
    EventListcomponent, 
    EventThumbnailComponent, 
    NavbarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    Error404Component, 
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent 
    ], 

imports:[ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule], 
providers:
[
        EventService, 
        ToastrService, 
        EventRouteActivatorService, 
        EventListResolverService,  
        {
        provide:'canDeactivateCreateEvent', 
        useValue:checkDirtyState
        }, 
        AuthService
    ], 
bootstrap:[ EventsAppComponent ]
})
export class AppModule {


}

function checkDirtyState(component:CreateEventComponent) {
if (component.isDirty)
return window.confirm('You have not saved the event, do you really want to cancel?'); 
return true; 

}