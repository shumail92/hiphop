import {Component, OnInit} from '@angular/core';
import {Order} from '../../order';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
declare var google: any;

@Component({
  selector: 'app-dashboard-needy',
  templateUrl: './dashboard-needy.component.html',
  styleUrls: ['./dashboard-needy.component.css'],
  providers: [NgbModal]
})

export class DashboardNeedyComponent implements OnInit {

  service = new google.maps.DistanceMatrixService();

  order = new Order();
  calculate_cost(): void {

  }

  calculate_distance():void{
    this.service.getDistanceMatrix(
      {
        origins: [this.order.home_address],
        destinations: [this.order.shop_address],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
      }, this.callback(this.order))
  }

  callback(order){
    return function(response, status) {
      console.log(response)
      if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            order.distance = element.distance.value;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
          }
        }
      }
      order.commission = order.distance / 10;
      order.total_price = (order.quantity * order.unit_price) + order.commission;
    }
  }

  open(content) {
    this.calculate_distance();
    this.modalService.open(content);
  }
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

}
