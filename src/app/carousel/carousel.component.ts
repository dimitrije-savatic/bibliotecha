import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg'
  ];

  currentIndex = 0;

  nextSlide(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
