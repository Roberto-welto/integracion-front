import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donacion-modal',
  templateUrl: './donacion-modal.component.html',
  styleUrls: ['./donacion-modal.component.scss']
})
export class DonacionModalComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  donacionForm: FormGroup;
  payment: boolean;
  constructor() { }

  ngOnInit() {
    this.payment = false;
    this.donacionForm = new FormGroup({
      cantidad: new FormControl('', [Validators.required])
    })
  }

  pagar() {
    this.initConfig();
  }
  private initConfig() {
    this.payment = true;
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'Aa-Qm0eyjFrZlsYu1fzlmfYSdDtwTHRQCn_-UoSPIRiqrn2fhnRR3IHAfSy8R909OhvuhUIJ3HIfBh_n',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: `${this.donacionForm.value.cantidad}.0`,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: `${this.donacionForm.value.cantidad}.0`
                }
              }
            },
            items: 
            [
              {
                name: 'Donación',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: `${this.donacionForm.value.cantidad}.0`
                }
              }
            ]
          }
        ] 
       },
       advanced: {
         commit: 'true'
       },
       style: {
        label: 'paypal',
        layout: 'vertical'
       },
       onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log(data);
        
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
