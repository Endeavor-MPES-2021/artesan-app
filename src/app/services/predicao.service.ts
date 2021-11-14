import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { createRequestOption } from 'src/app/shared';
import { Predicao } from '../../model/predicao.model';

@Injectable({ providedIn: 'root' })
export class PredicaoService {
  private resourceUrl = ApiService.API_URL + '/classifyImage';

  constructor(protected http: HttpClient) {}

  classifyImage(predicao: Predicao): Observable<HttpResponse<Predicao[]>> {
    return this.http.post<Predicao[]>(this.resourceUrl, predicao, { observe: 'response' });
  }

  // update(predicao: Predicao): Observable<HttpResponse<Predicao>> {
  //   return this.http.put(`${this.resourceUrl}/${predicao.id}`, predicao, { observe: 'response' });
  // }
  //
  // find(id: number): Observable<HttpResponse<Predicao>> {
  //   return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }
  //
  // query(req?: any): Observable<HttpResponse<Predicao[]>> {
  //   const options = createRequestOption(req);
  //   return this.http.get<Predicao[]>(this.resourceUrl, { params: options, observe: 'response' });
  // }
  //
  // delete(id: number): Observable<HttpResponse<any>> {
  //   return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }
}
