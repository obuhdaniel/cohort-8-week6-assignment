import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BgcolorService } from '../../services/bgcolor-service';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly bgColorService = inject(BgcolorService);

  handleSelectionChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.bgColorService.changeColor(select.value);
  }
}
