import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThenewsService } from 'src/app/Shared/thenews.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(public thenewsservice: ThenewsService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    Titre: new FormControl(''),
    Texte1: new FormControl(''),
    Texte2: new FormControl(''),
    Image: new FormControl(''),
    Datepublication: new FormControl(''),
    Publier: new FormControl(''),
    
  });

  initializeFormGroup(){
    this.form.setValue({
    Titre: '',
    Texte1: '',
    Texte2: '',
    Image: '',
    Datepublication:'',
    Publier: ''
    
    });
  }

  onClear(){
    this.form.reset();
    this.initializeFormGroup();
  }

}
