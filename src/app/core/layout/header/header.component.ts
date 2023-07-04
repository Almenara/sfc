import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public showMenu: boolean = false;
  public lang: string = 'Castellano';

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  selectLang(lang: string){
    this.lang = lang;
  }
}
