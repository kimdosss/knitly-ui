import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tapestry',
  templateUrl: './tapestry.component.html',
  styleUrls: ['./tapestry.component.scss'],
})
export class TapestryComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  clickSetup() {
    this.router.navigate(['setup'], { relativeTo: this.route });
  }
}
