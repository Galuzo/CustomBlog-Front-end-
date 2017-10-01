import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

import {Post } from '../post';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostService {

  constructor(private http:Http) { }


   private baseUrl: string = 'http://localhost:8080/api/v1/admin/posts/';

   getPosts():  Promise<Post[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json() as Post[])

      .catch(this.handleError);
  }

  deleteTodo(id: number): Promise<any> {
    return this.http.delete(this.baseUrl  + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
