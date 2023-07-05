import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  
  ngOnInit() {

    this.renderer.removeClass(document.body, 'home-background');

    const leftSlider = document.querySelector('.slider-left') as HTMLInputElement;
    const rightSlider = document.querySelector('.slider-right') as HTMLInputElement;

    leftSlider.oninput = () => {
      if (parseInt(leftSlider.value) >= parseInt(rightSlider.value)) {
        leftSlider.value = (parseInt(rightSlider.value) - 1).toString();
      }
    };

    rightSlider.oninput = () => {
      if (parseInt(rightSlider.value) <= parseInt(leftSlider.value)) {
        rightSlider.value = (parseInt(leftSlider.value) + 1).toString();
      }
    };
  }

}
