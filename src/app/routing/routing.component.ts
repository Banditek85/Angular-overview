import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNavigate(route_number: HTMLInputElement) {
    let param :string = route_number.value;
    // relative path navigation
    this._router.navigate([`../routing/${param}`], {relativeTo: this.route});
    //  ..or absolute path navigation
    // this._router.navigateByUrl(`/routing/${param}`);
  }

  // QueryParams and fragment can also be defined on actionLink directive of <a> tags, when linking that way 
  onNavigateWithQueryParams() {
    this._router.navigate(['../routing/10'], {queryParams: {allowEdit: '1'}, fragment: 'blue'});
  }
}
