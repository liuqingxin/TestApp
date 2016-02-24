import {Injectable} from 'angular2/core';

@Injectable()
export class ApiService {
    constructor() { }
    get(url: string, params: Object, fn: Function) {
        var xmlhttp = new XMLHttpRequest();
        var callback = false;
        
        if (url.indexOf("?") <= 0) {
            url += "?";
        }
        for (var i in params) {
            url += (i + "=" + params[i] + "&");
        }
        xmlhttp.open("GET", url, false);
        xmlhttp.onreadystatechange = function () {
            if (callback) return;
            if (xmlhttp.status == 200) {
                try {
                    var object = JSON.parse(xmlhttp.responseText);
                    fn(object);
                    callback = true;
                } catch (e) {
                    //console.log(e);
                }
            }
        }
        xmlhttp.send(null);
       
    }
    post(url: string, params: Object, fn: Function) {
        var xmlhttp = new XMLHttpRequest();
        var callback = false;
        xmlhttp.onreadystatechange = function () {
            if (callback) return;
            if (xmlhttp.status == 200) {
                try {
                    var object = JSON.parse(xmlhttp.responseText);
                    fn(object);
                    callback = true;
                } catch (e) {
                    //console.log(e);
                }
            }
        }
        var params_str = "";
        for (var i in params) {
            params_str += ("?" + i + "=" + params[i]);
        }
        xmlhttp.open("POST", url, true);
        xmlhttp.send(params_str);
    }
}