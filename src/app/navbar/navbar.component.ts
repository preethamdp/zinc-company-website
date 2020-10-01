import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  className: string;
  public menuClicked = 0;
  constructor() {
    this.className = "small-menu";
   }
   

  ngOnInit(): void {
  }
  openmenu():void{
    if (this.menuClicked == 0){
      this.className = "enlarge-menu";
      console.log("heloo");
      this.menuClicked = 1;
    }
    else{
      this.className = "small-menu";
      this.menuClicked = 0;

    }
  }
}
