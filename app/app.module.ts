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
SessionListComponent,
DurationPipe
}from './events/index';
import {EventsAppComponent }from './event-app.component';
import {NavbarComponent}from './nav/navbar.component';
import {appRoutes}from './route';
import {Error404Component}from './errors/404.component';
import {AuthService}from './user/auth.service';
import {
TOASTR_TOKEN, Toastr, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective}from './common/index';

// import {EventListcomponent }from './events/events-list.component';
// import {EventThumbnailComponent }from './events/event-thumbnail.component';
// import {EventService}from './events/shared/event.service';
//import {TOASTR_TOKEN, Toastr}from './common/toastr.service';
// import {EventDetailsComponent }from './events/event-details/event-details.component';
// import {CreateEventComponent}from './events/create-event.component';
// import {EventRouteActivatorService}from './events/event-details/event-route-activator.service';
// import {EventListResolverService}from './events/event-list-resolver.service';
//import {CollapsibleWellComponent}from './common/collapsible-well.component';


declare let toastr:Toastr;

declare let jQuery:Object;

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
CollapsibleWellComponent,
DurationPipe,
SimpleModalComponent,
ModalTriggerDirective
],

imports:
[
    BrowserModule,
RouterModule.forRoot(appRoutes),
FormsModule,
ReactiveFormsModule
    ],
providers:
[
    EventService,  {provide:TOASTR_TOKEN, useValue:toastr},  {provide:JQ_TOKEN, useValue:jQuery},
EventRouteActivatorService,
EventListResolverService,  {
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