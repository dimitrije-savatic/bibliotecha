import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}

  active: string = 'text-white';
  burgerActive: boolean = false;
  XActive: boolean = true;
  showBurgerMenu: boolean = false;
  links: any = [
    {
      path: 'home',
      name: 'Home',
    },
    {
      path: 'books',
      name: 'Books',
    },
    {
      path: 'about',
      name: 'About',
    },
  ];

  ngOnInit(): void {
  }

  toggleBurgerMenu(): void {
    if (!this.burgerActive || this.XActive) {
      this.burgerActive = true;
      this.XActive = false;
      if (this.burgerActive) {
        this.renderer.addClass(document.body, 'show-burger');
      }
    } else {
      this.burgerActive = false;
      this.XActive = true;
      if (this.XActive) {
        this.renderer.removeClass(document.body, 'show-burger');
      }
    }
  }
}
