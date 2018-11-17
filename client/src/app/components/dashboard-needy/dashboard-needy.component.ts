import {Component, OnInit} from '@angular/core';
import {Order} from '../../order';

@Component({
  selector: 'app-dashboard-needy',
  templateUrl: './dashboard-needy.component.html',
  styleUrls: ['./dashboard-needy.component.css']
})
export class DashboardNeedyComponent implements OnInit {

  order: Order;

  calculate_cost(): void {
    this.order.commission = this.order.distance / 10;
    this.order.total_price = (this.order.quantity * this.order.unit_price) + this.order.commission;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
