import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { BgcolorService } from './services/bgcolor-service';

@Component({
  imports: [RouterOutlet, Navbar, NgStyle, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly bgColorService = inject(BgcolorService);
  protected readonly title = signal('Yra');
}
