import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {RouterModule}from '@angular/router'; 
import {EventsAppComponent }from './event-app.component'; 
import {EventListcomponent }from './events/events-list.component'; 
import {EventThumbnailComponent }from './events/event-thumbnail.component'; 
import {NavbarComponent}from './nav/navbar.component'; 
import {EventService}from './events/shared/event.service'; 
import {ToastrService}from './common/toastr.service'; 
import {EventDetailsComponent }from './events/event-details/event-details.component'; 
import {appRoutes}from './route'; 
import {CreateEventComponent}from './events/create-event.component'; 

@NgModule( {
    declarations:
    [ 
        EventsAppComponent, 
        EventListcomponent, 
        EventThumbnailComponent, 
        NavbarComponent, 
        EventDetailsComponent, 
        CreateEventComponent 
    ], 
     
    imports:[ BrowserModule, RouterModule.forRoot(appRoutes)], 
    providers:[EventService, ToastrService], 
    bootstrap:[ EventsAppComponent ]
})
export class AppModule {}