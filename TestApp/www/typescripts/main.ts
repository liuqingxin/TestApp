import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Component} from 'angular2/core';
import {AppHeader} from 'typescripts/header';
import {AppFooter} from 'typescripts/footer';
import {AppList} from 'typescripts/list';

@Component({
    directives: [AppHeader, AppFooter, AppList],
    selector: 'my-app',
    templateUrl: "templates/main.html"
})
@RouteConfig([
    {
        path: "/",
        name: "Main",
        component: AppComponent,
        useAsDefault: true
    },
    {
        path: "/list",
        name: "List",
        component: AppList
    }
])
export class AppComponent {

}
bootstrap(AppComponent);