import { AngularFireDatabase,
  FirebaseListObservable
,FirebaseObjectObservable } from 'angularfire2/database';
import { Component,OnInit,OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cuisins:FirebaseListObservable<any[]>;
  restaurants:Observable<any[]>;
  constructor(private af:AngularFireDatabase){
    
  }

  ngOnInit()
  {
    this.cuisins=this.af.list('/cuisines');
    this.restaurants=this.af.list('/restaurants').map((restaurants)=>{
      console.log("BEFORE MAP: ",restaurants);
      restaurants.map((restaurant)=>{
        restaurant.cuisineType=this.af.list('/cuisines'+restaurant.cuisine);
      })
        console.log('AFTER MAP',restaurants);
      return restaurants;
    });  
  }


}
  // add()
  // {
  //   this.cuisins.push({
  //     name:'Iraqi'
  //   })
  // }
  // update()
  // {
  //   this.restaurant=this.af.object('/Restaurant');
  //   this.restaurant.update({/*if this is set to "set" the object will be override there */
  //     name:'Hisos',
  //     Rating:5
  //   })
  // }

