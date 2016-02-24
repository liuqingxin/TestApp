import {Component,OnInit} from 'angular2/core';
import {ApiService} from './api.service.common';
import {Observable} from 'rxjs/Observable';
import {JSONP_PROVIDERS}  from 'angular2/http';

@Component({
    selector: "app-list",
    template: `
    <ul class ="list">
    <li class ="item" *ngFor="#item of items | async">{{item}}</li>
    </ul>
    `,
    providers: [ApiService, JSONP_PROVIDERS]
})
export class AppList implements OnInit {
    items:Observable<string[]>;
    constructor(private _apiService: ApiService) {
       
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._apiService.get("http://localhost:81/api/values", { k: 1 }, function (text) {
            this.items = ["1,2,3"];
            console.log(text);
        });
    }
   
}
