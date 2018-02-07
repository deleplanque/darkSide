import { Component, OnInit} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
//import '../js/Delaunay/image.js';
declare var $: any;
declare var buildImage: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
  export class AppComponent implements OnInit {

  ngOnInit(): void {
    $('.button-collapse').sideNav();
  }
}

