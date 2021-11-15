import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {

  constructor(private _service:NewsapiService) { }

  topheadingDisplay:any=[];
  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>
    {
      console.log(result);
      this.topheadingDisplay=result.articles;
    }
    )

}}
