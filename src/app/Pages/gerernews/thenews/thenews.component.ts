import { Component, OnInit } from '@angular/core';
import { ThenewsService } from 'src/app/Shared/thenews.service';
@Component({
  selector: 'app-thenews',
  templateUrl: './thenews.component.html',
  styleUrls: ['./thenews.component.css']
})
export class ThenewsComponent implements OnInit {

  constructor(public thenewsservice: ThenewsService) { }

  ngOnInit(): void {
  }
    onClear(){
      this.thenewsservice.form.reset();
      this.thenewsservice.initializeFormGroup();
    }
}
