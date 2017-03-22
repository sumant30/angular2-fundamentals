import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {EventsAppComponent }from './event-app.component'; 
import {EventListcomponent }from './events/events-list.component'; 
import {EventThumbnailComponent }from './events/event-thumbnail.component'; 

@NgModule( {
    declarations:[ EventsAppComponent,EventListcomponent,EventThumbnailComponent ], 
    imports:[ BrowserModule ], 
    providers:[], 
    bootstrap:[ EventsAppComponent ]
})
export class AppModule {}