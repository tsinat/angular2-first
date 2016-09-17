import {Component} from 'angular2/core';
import { config } from './config.service';

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 {{ mainHeading }}Template</h1>'
})

export class AppComponent {
    mainHeading = config.MAIN_HEADING;
}
