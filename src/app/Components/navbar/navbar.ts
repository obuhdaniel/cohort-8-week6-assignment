import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrls: ['../../app.css', './navbar.css'],
  templateUrl: './navbar.html',
})
export class Navbar {

  selectedColor = 'blue';

  //USING SUBJECTS, I DONT NEED TO PASS THE INITIAL VALUE OF THE COLOR, I CAN JUST SUBSCRIBE TO THE SUBJECT AND GET THE LATEST VALUE
  colorSubject = new Subject<string>();

  //USING BEHAVIOR SUBJECTS, I NEED TO PASS THE INITIAL VALUE OF THE COLOR, SO THAT WHEN I SUBSCRIBE TO THE SUBJECT, I GET THE LATEST VALUE
  colorSubjectBehavior = new BehaviorSubject<string>(this.selectedColor); 

  changeColor(color: string) {
    this.selectedColor = color;
    this.colorSubject.next(color);

    console.log(`Color changed to: ${color}`);
  }
}
