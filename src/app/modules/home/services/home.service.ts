import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private api: ApiService) { }


  getTest() {

    console.log('getTest()');
    const params = { Language: 1, Page: 25 };
    return this.api.get('https://localhost:44326/api/SampleData/WeatherForecasts', params);

  }





  postTest() {

    console.log('getTest2()');
    const params = { Language: 1, Page: 25 };
    return this.api.post('https://localhost:44326/api/SampleData/WeatherForecasts', params);

  }


}
