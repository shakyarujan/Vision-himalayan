import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  uri = ('https://api-sh.paisamanager.com');
  constructor(private http: HttpClient ) { }

  getTripsData() {
    return this.http.get(`${this.uri}/trip/all`);
  }

  getTripId(trip_id) {
    return this.http.get(`${this.uri}/trip/id/${trip_id}`);
  }

  getItineraryData(trip_id) {
    return this.http.get(`${this.uri}/trip/itinerary/${trip_id}`);
  }
}

