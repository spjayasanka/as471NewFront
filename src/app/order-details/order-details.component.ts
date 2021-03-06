import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirm() {
    this.router.navigate(['/confirm']);
  }
}
