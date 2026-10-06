import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrls: ['../../app.css', './navbar.css'],
  templateUrl: './navbar.html',
})
export class Navbar {}
