
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GeneralService {

  url_api = `${environment.API_URL}`;
  url_images = `${environment.images_path}`;
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  //Servicio para hacer peticiones al API genericas
  //async service_general_post_with_url(url: any, parametros: any): Promise<any> {
  //  return this.http.post(this.url_api + url, parametros, { headers: this.headers });
  //}
  service_general_get_with_url(url: any, parametros: any): Observable<any> {
    return this.http.get(this.url_api + url, parametros);
  };

  service_general_post_with_url(url: any, parametros: any): Observable<any> {
    return this.http.post(this.url_api + url, parametros, { headers: this.headers });
  };

  service_general_put_with_url(url: any, parametros: any): Observable<any> {
    return this.http.put(this.url_api + url, parametros, { headers: this.headers });
  };
}
