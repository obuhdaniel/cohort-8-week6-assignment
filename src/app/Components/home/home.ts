import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  backgroundColor = '';

  constructor( private navbar: Navbar) {}


  componentName = signal<string>('Home Component');

  ngOnInit() {
    //SUBSCRIBE TO THE SUBJECT IN THE NAVBAR COMPONENT AND GET THE LATEST VALUE OF THE COLOR
    this.navbar.colorSubject.subscribe((color: string) => {
      this.backgroundColor = color;
    });

    //SUBSCRIBE TO THE BEHAVIOR SUBJECT IN THE NAVBAR COMPONENT AND GET THE LATEST VALUE OF THE COLOR
    // this.navbar.colorSubjectBehavior.subscribe((color: string) => {
    //   this.backgroundColor = color;
    // });
  }
}
