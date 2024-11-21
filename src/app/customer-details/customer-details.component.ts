import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  constructor( private route: ActivatedRoute, private customerService: CustomerService){

  }

  customer: any;

  ngOnInit() {
    //pegar o id que vai vir da URL
   let id = this.route.snapshot.paramMap.get('id');
  
    if (id !== null) {
      
      this.customer = this.customerService.getById(+id);
    }
  }

}
