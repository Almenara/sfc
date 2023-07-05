import { Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit{
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.addClass(document.body, 'home-background');
  }
}
