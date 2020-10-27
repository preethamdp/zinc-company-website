import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  page_url:string;
  constructor(private actRoute: ActivatedRoute) { 
    this.page_url = this.actRoute.snapshot.params.data;
    window.open(
      "https://"+this.page_url,
      '_blank' 
    )
  }

  ngOnInit(): void {}
}
