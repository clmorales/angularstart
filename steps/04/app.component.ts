import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My firt component</div>

      <div>{{customer.fName}} {{customer.lName}}</div>
      <div>{{customer.address.city}} {{customer.address.state}}</div>

      <div>{{2+3*5}}</div>

      <div>{{getOtherTitle()}}</div>


      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle:string='Acme Product Management';

  customer={
    fName: 'Carlos',
    lName: 'Morales',
    address:{
      city:'Orocovis',
      state:'PR'
    }
  }

  getOtherTitle():string {
    return 'Other Title';
  }

}




