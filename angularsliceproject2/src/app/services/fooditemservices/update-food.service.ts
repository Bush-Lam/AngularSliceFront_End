import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class UpdateFoodService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food";

  updateFood(food:Fooditem): Promise<Fooditem> {
    return this.http.put<Fooditem>(this.url,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }
}
