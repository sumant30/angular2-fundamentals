import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {EventsAppComponent }from './event-app.component'; 
import {EventListcomponent }from './events/events-list.component'; 
import {EventThumbnailComponent }from './events/event-thumbnail.component'; 
import {NavbarComponent} from './nav/navbar.component';
import {EventService}from './events/shared/event.service'; 

@NgModule( {
    declarations:[ EventsAppComponent,EventListcomponent,EventThumbnailComponent,NavbarComponent ], 
    imports:[ BrowserModule ], 
    providers:[EventService], 
    bootstrap:[ EventsAppComponent ]
})
export class AppModule {}