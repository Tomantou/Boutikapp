import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imagesUrl = environment.imagesUrl;

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [
    {
    image: 'src/app/assets/img/slider/7.jpg',
    thumbImage:'src/app/assets/img/slider/7.jpg',
    alt: 'alt of image',
    title: 'Chaussure'
    }, 
    {
      image: 'src/app/assets/img/slider/8.jpg',
      thumbImage: 'src/app/assets/img/slider/8.jpg',
      alt: 'alt of image',
      title: 'Toner'
      }, 
      {
        image: './assets/img/slider/9.jpg',
        thumbImage: 'assets/img/slider/9.jpg',
        alt: 'alt of image',
        title: 'Chaussure'
      }, 
      {
          image: './assets/img/slider/10.jpg',
          thumbImage: 'assets/img/slider/10.jpg',
          alt: 'alt of image',
          title: 'Chaussure'
      }, 
      {
        image: 'assets/img/slider/11.jpg',
        thumbImage: 'assets/img/slider/11.jpg',
        alt: 'alt of image',
        title: 'Chaussure'
      }, 
      {
          image: 'assets/img/slider/12.jpg',
          thumbImage: 'assets/img/slider/12.jpg',
          alt: 'alt of image',
          title: 'Toner'
      },
      {
        image: 'assets/img/slider/13.jpg',
        thumbImage: 'assets/img/slider/13.jpg',
        alt: 'alt of image',
        title: 'Toner'
      }, 
      {
          image: 'assets/img/slider/14.jpg',
          thumbImage: 'assets/img/slider/14.jpg',
          alt: 'alt of image',
          title: 'Toner'
      }, 
      {
            image: 'assets/img/slider/15.jpg',
            thumbImage: 'assets/img/slider/15.jpg',
            alt: 'alt of image',
            title: 'Toner'
      },
      {
        image: 'assets/img/slider/16.jpg',
        thumbImage: 'assets/img/slider/16.jpg',
        alt: 'alt of image',
        title: 'Toner'
      },
      {
        image: 'assets/img/slider/17.jpg',
        thumbImage: 'assets/img/slider/17.jpg',
        alt: 'alt of image',
        title: 'Cartouche'
      },
      {
        image: 'assets/img/slider/18.jpg',
        thumbImage: 'assets/img/slider/18.jpg',
        alt: 'alt of image',
        title: 'Toner'
      },
      {
        image: 'assets/img/slider/19.jpg',
        thumbImage: 'assets/img/slider/19.jpg',
        alt: 'alt of image',
        title: 'Cartouche'
      }
];

}
