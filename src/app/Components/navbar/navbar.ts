import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { BgcolorService } from '../../services/bgcolor-service';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrls: ['../../app.css', './navbar.css'],
  templateUrl: './navbar.html',
})
export class Navbar {
  bgColorService = inject(BgcolorService);

  handleSelectionChange(event: any) {
    event.preventDefault();
    console.log('Selection changed:', event.target.value);
     
    this.bgColorService.changeColor(event.target.value);
  }
  
}
