import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ThenewsService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $Id: new FormControl(null),
    titre: new FormControl('', Validators.required),
    texte1: new FormControl('',Validators.required),
    texte2: new FormControl(''),
    image: new FormControl(''),
    Datepublication: new FormControl(''),
    publier: new FormControl(false,Validators.required)
  })

  initializeFormGroup(){
    this.form.setValue({
    $Id: null,
    titre: '',
    texte1: '',
    texte2: '',
    image: '',
    Datepublication: '',
    publier: false
  });

  }
}
