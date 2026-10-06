import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';
import { Programmes } from './Components/programmes/programmes';
import { Resources } from './Components/resources/resources';
import { Events } from './Components/events/events';
import { EventDetails } from './Components/event-details/event-details';
import { Media } from './Components/media/media';
import { Opportunities } from './Components/opportunities/opportunities';
import { Community } from './Components/community/community';
import { Login } from './Components/login/login';
import { Join } from './Components/join/join';

export const routes: Routes = [
    {path: '', component: Home, title: 'Young Researcher Academy'},
    {path: 'about', component: About, title: 'About | YRA'},
    {path: 'programmes', component: Programmes, title: 'Programmes | YRA'},
    {path: 'resources', component: Resources, title: 'Resources | YRA'},
    {path: 'events', component: Events, title: 'Events | YRA'},
    {path: 'events/:id', component: EventDetails, title: 'Event Details | YRA'},
    {path: 'media', component: Media, title: 'Media | YRA'},
    {path: 'opportunities', component: Opportunities, title: 'Opportunities | YRA'},
    {path: 'community', component: Community, title: 'Community | YRA'},
    {path: 'login', component: Login, title: 'Login | YRA'},
    {path: 'join', component: Join, title: 'Join YRA'},
    {path: '**', redirectTo: ''}
];
