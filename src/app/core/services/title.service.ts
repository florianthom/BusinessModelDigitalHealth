import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  defaultTitle = 'HCC'

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public title: Title,
  ) {
  }

  boot() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return this.defaultTitle + " • " + child.snapshot.data['title'];
          }
          return this.defaultTitle;
        }),
    ).subscribe((currentTitle) => this.title.setTitle(currentTitle));
  }
}