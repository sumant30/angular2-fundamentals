import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {EventsAppComponent }from './event-app.component'; 
import {EventListcomponent }from './events/events-list.component'; 
import {EventThumbnailComponent }from './events/event-thumbnail.component'; 
import {NavbarComponent} from './nav/navbar.component';
import {EventService}from './events/shared/event.service'; 
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent }from './events/event-details/event-details.component'; 

@NgModule( {
    declarations:[ EventsAppComponent,EventListcomponent,EventThumbnailComponent,NavbarComponent,EventDetailsComponent ], 
    imports:[ BrowserModule ], 
    providers:[EventService,ToastrService], 
    bootstrap:[ EventsAppComponent ]
})
export class AppModule {}