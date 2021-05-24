import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorieupdate',
  templateUrl: './categorieupdate.component.html',
  styleUrls: ['./categorieupdate.component.css'],
})
export class CategorieupdateComponent implements OnInit {
  x: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.x = history.state;
  }
}
