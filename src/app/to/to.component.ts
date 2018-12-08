import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css']
})
export class ToComponent implements OnInit, OnDestroy {

  urls = {
    '1000': 'https://www.nba.com',
    '1001': 'https://www.espn.com',
    };
  private routeSub: any;
  slug: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params.slug;
      console.log('redirecting to ...', this.urls[this.slug]);
      if (this.urls[this.slug]) {
        window.location.href = this.urls[this.slug];
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
