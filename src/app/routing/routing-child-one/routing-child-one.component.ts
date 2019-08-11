import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routing-child-one',
  template: `<p> This is routing child component template.  
            <br> Route id parameter is: <b>{{route_param}}</b> <br>
            Component uses inline template and styles.</p>`,
  styles: [`p {border: 3px solid orange; 
               text-align: center; 
               padding: 40px; 
               border-radius: 10px; 
               margin-top: 50px;}`]
})

export class RoutingChildOneComponent implements OnInit, OnDestroy {
  route_param: string;
  params_subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    /* When clicking on navigate button from parent component in this case, we are navigating to the same URL 
    of this child component, but with different parameter. Because router will only call ngOnInit and 
    ngOnDestroy of a component when navigating to different URL, we need to subscribe to params observable 
    of activatedRoute object to properly update the local variable which is displayed on the screen.
    
    Same goes for query parameters and fragments, you also need to subscribe to those!
    */
    this.params_subscription = this.activatedRoute.params.subscribe(value => {
      // This would set it if navigating from different URL:
      // this.route_param = this.activatedRoute.snapshot.params['id']; 

    this.route_param = value.id;
    })
  }

  ngOnDestroy() {
    // Angular automatically unsubscribes when destroying component, but this needs to be done when creating your own 
    // observables and subscribing to them.
    this.params_subscription.unsubscribe();
  }
}