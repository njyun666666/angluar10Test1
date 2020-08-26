import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private router: Router) { }



  async authcheck(url, queryParams) {

    console.log(url);
    console.log(queryParams);

    let result = false;
    const api = environment.apiUrl + 'Account/AuthCheck';
    const params = { url };

    const res = await this.apiService.post(api, params).toPromise();

    console.log('auth check res =');
    console.log(res);

    result = res.code === 1 ? true : false;

    // console.log('authcheck url=' + url + ' code=' + res.code);


    // no login
    if (res.code === 0) {
      const urlParams = {
        returnUrl: url,
        params: btoa(JSON.stringify(queryParams))
      };

      // this.router.navigate(['/login'], { queryParams: urlParams });

    } else if (res.code < 0) {
      // no auth

      alert('no auth');
      this.goBack();

    }

    return result;



  }

  goBack() {
    this.router.navigate(['']);

    // if (window.history.length > 1) {
    //   this.location.back()
    // } else {
    //   this.router.navigate(['/home']);
    // }
  }








}
