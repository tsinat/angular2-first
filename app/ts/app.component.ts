import {Component} from 'angular2/core';
import { config } from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, 'installing Django', 'qgGIqRFvFFK', 'how to install Django'),
            new Video(2, 'Nested Component', 'f8qBeaGe2S4', 'how to create angular2 components')
        ]
    }
}
