import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/Models/news';
import { ThenewsService } from 'src/app/Shared/thenews.service';
import { TitresService } from 'src/app/Shared/titres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public Lesnews: News[] = [];
  public Titres: News[] = [];
  public titre: string[] = [];
  saveresp:any;
  messageclass='';
  message ='';
  panelOpenState = false;
  constructor(private router:Router,
    public newsservice: ThenewsService,
    public titresservice:TitresService
    ) { }

  ngOnInit(): void {
    this.titre = ["CHAUSSURES",'SPORT','IMPRESSION','ELECTROMENAGER'];
     

    this.newsservice.getNews().subscribe(news => {
      this.Lesnews = news;
      console.log(this.Lesnews);
    })

    this.titresservice.getTitres().subscribe(titres => {
      this.Titres=titres;
      if(titres){
        this.Titres = titres[0];
        console.log(this.Titres);
      } 
      
    })

    

  }

  

}
