import { Component, OnInit } from '@angular/core';
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

  onClear(){
    this.thenewsservice.form.reset();
    this.thenewsservice.initializeFormGroup();
  }

}
