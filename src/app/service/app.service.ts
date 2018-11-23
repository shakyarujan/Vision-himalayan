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

  getInboundData() {
    return this.http.get(`${this.uri}/trip/inbound/all`);
  }

  getOutboundData() {
    return this.http.get(`${this.uri}/trip/outbound/all`);
  }

  getSiteInfo() {
    return this.http.get(`${this.uri}/site/info`);
  }

  getImages() {
    return this.http.get(`${this.uri}/trip/all`);
  }

  getImagesId(trip_id) {
    return this.http.get(`${this.uri}/trip/image/${trip_id}`);
  }

  addBooking(user_id, date, adult, children, fullname, email, mobile) {
    const book = {
      user_id: user_id,
      date: date,
      adult: adult,
      children: children,
      fullname: fullname,
      email: email,
      mobile: mobile
    };

    return this.http.post(`${this.uri}/`, book);
  }

}

