import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      //subscribe API request
      this.quote = new Quote(data.author, data.quote)
    }, err => {
      this.quote = new Quote("Winston Churchill", "Never never givr up!")
      console.log("An error occurred")
    })
  }

}
