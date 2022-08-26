import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pradzia',
  templateUrl: './pradzia.component.html',
  styleUrls: ['./pradzia.component.css']
})
export class PradziaComponent implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
