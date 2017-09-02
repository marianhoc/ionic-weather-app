import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {

	apiKey = '433a3fbd50f3fc0c';
	url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  	this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/geolookup/conditions/forecast/q/';
  }


  getWeather(city, state){
  	return this.http.get(this.url+'/'+state+'/'+city+'.json')
  	.map(res => res.json());
  }
}
