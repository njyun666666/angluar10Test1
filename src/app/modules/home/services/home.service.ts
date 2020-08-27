import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: ApiService) { }


  getTest(params) {

    console.log('getTest()');
    // const params = { Language: 1, Page: 25 };
    return this.apiService.get(environment.apiUrl + 'SampleData/WeatherForecasts', params);

  }





  postTest() {

    console.log('postTest()');
    const params = { Language: 1, Page: 25 };
    return this.apiService.post(environment.apiUrl + 'SampleData/WeatherForecasts', params);

  }


}
