import {Component} from 'angular2/core';

@Component({
    selector: "app-header",
    templateUrl: "templates/header.html",
    properties: ["title","menu","back"]
})
export class AppHeader {
    onBack() {
        
    }
}