import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { NgStyle } from '@angular/common';
import { BgcolorService } from '../../services/bgcolor-service';

@Component({
  imports: [NgStyle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  backgroundColor = '';

  constructor( private navbar: Navbar) {}

  bgColorService = inject(BgcolorService);  


  componentName = signal<string>('Home Component');

  ngOnInit() {
    //SUBSCRIBE TO THE SUBJECT IN THE NAVBAR COMPONENT AND GET THE LATEST VALUE OF THE COLOR

    this.bgColorService.colorSubject.subscribe((color: string) => {
      this.backgroundColor = color;
    });
   
  }
}
