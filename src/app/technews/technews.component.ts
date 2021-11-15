import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  techheadingDisplay: any=[];

  constructor(private _service:NewsapiService) { }

  ngOnInit(): void {
    this._service.techHeading().subscribe((result)=>
    {
      console.log(result);
      this.techheadingDisplay=result.articles;
    }
    )

}}
