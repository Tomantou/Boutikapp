import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/Models/news';
import { ThenewsService } from 'src/app/Shared/thenews.service';
import { TitresService } from 'src/app/Shared/titres.service';
import { Router } from '@angular/router';
import { Titres } from 'src/app/Models/titres';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  imagesUrl = environment.imagesUrl;
  public Lesnews: News[] = [];
  public Titres: Titres[] = [];
  public chaussuresNew:any;
  public sportNew:any;
  public impressionNew:any;
  public electromenagerNew:any;
  public titres: string[] = [];
  saveresp:any;
  messageclass='';
  message ='';
  panelOpenState = false;
  constructor(private router:Router,
    public newsservice: ThenewsService,
    public titresservice:TitresService
    ) { }

  ngOnInit(): void {
    this.titres = ["CHAUSSURES",'SPORT','IMPRESSION','ELECTROMENAGER'];
     
     this.chaussuresNew = new News;
     this.sportNew = new News;
     this.impressionNew = new News;
     this.electromenagerNew = new News;
    this.newsservice.getNews().subscribe(news => {
      this.Lesnews = news;
      console.log(this.Lesnews);
    })

    this.titresservice.getTitres().subscribe(result => {
      this.Titres=result;
        console.log(this.Titres);
          
    })

      this.newsservice.getNewsById(1).subscribe(chaussure => {
        this.chaussuresNew= chaussure;
        console.log(this.chaussuresNew);
      });
        this.newsservice.getNewsById(8).subscribe(sport => {
          this.sportNew= sport;
          console.log(this.sportNew);
        });

          this.newsservice.getNewsById(9).subscribe(impression => {
            this.impressionNew= impression;
            console.log(this.impressionNew);
          });

        
    
            this.newsservice.getNewsById(10).subscribe( electromenager => {
              this.electromenagerNew= electromenager;
              console.log(this.electromenagerNew);
            });

    
  }
 
  
}   
    

