import { Component, inject, input, signal } from '@angular/core';
import { Organizacion } from '../../models/organizacion.model';
import { environment } from '../../../environments/environment';
import { UserItem } from '../user-item/user-item';
import { OrganizacionService } from '../../services/organizacion.service';
import { Dialog } from '../dialog/dialog';


@Component({
  selector: 'app-detail',
  imports: [UserItem, Dialog],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail 
{
  organizacionService = inject(OrganizacionService);
  //idOrganizacion = input("");
  hidden = signal(true);
  isLoaded = signal(false);
  data: Organizacion = {
    _id:"",
    name:""
  };

  doApiCall(idOrganizacion : string)
  {
    if(!idOrganizacion) {
      return;
    }
    //alert(idOrganizacion);
    this.data._id = idOrganizacion;
    this.hidden.set(false);
    this.organizacionService.getOrganizacionById(idOrganizacion).subscribe((org) => {
      this.data = org;
      this.isLoaded.set(true);
    });
  }
}
