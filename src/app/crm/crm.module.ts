import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CrmRoutingModule } from './crm.routing';
import { LeadComponent } from './lead/lead.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCommonComponent } from './customer-common/customer-common.component';
import { ContactComponent } from './contact/contact.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { CrmComponent } from './crm.component';
import { ContractComponent } from './contract/contract.component';
import { ProductComponent } from './product/product.component';

import { LeadService } from './lead/lead.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CrmRoutingModule
  ],
  declarations: [
    LeadComponent,
    CustomerComponent,
    CustomerCommonComponent,
    ContactComponent,
    OpportunitiesComponent,
    CrmComponent,
    ContractComponent,
    ProductComponent
  ],
  providers: [
    {provide: 'LeadService', useClass: LeadService}
  ]
})
export class CrmModule {
}
