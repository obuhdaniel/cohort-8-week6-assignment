import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BgcolorService {



    //USING SUBJECTS, I DONT NEED TO PASS THE INITIAL VALUE OF THE COLOR, I CAN JUST SUBSCRIBE TO THE SUBJECT AND GET THE LATEST VALUE
    //colorSubject = new Subject<string>();

    //USING BEHAVIOR SUBJECTS, I NEED TO PASS THE INITIAL VALUE OF THE COLOR, SO THAT WHEN I SUBSCRIBE TO THE SUBJECT, I GET THE LATEST VALUE

    readonly colorSubject = new BehaviorSubject<string>('blue');

    changeColor(color: string) {
        this.colorSubject.next(color);
    }
}
