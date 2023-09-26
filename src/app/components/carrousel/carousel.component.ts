import { Component, OnInit, Input } from '@angular/core';

interface CarouselImage {
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  @Input()
  images:CarouselImage[] = [];
  @Input()
  indicators:boolean = true;
  @Input()
  autoSlide:boolean = false;
  @Input()
  slideInterval:number = 10000;

  selectedIndex:number = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImages(index: number): void {
    this.selectedIndex = index
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1){
        this.selectedIndex = 0;
    } else {
        this.selectedIndex++;
    }
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
        this.selectedIndex = this.images.length -1
    } else {
        this.selectedIndex--;
    }
  }

}
