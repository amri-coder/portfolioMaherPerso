import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css'],
})
export class SeeMoreComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('details').subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
      console.log(this.data[0]);
    });
  }
}
