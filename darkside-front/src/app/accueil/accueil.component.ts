import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
declare var $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({fullWidth: true});
    $('.carousel').css('height', ($(window).height() - $('.nav-wrapper').height() - 10) + 'px');
    const wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         false,
        callback:     function(box) {
        },
        scrollContainer: null
      }
    );
    wow.init();
  }

}
