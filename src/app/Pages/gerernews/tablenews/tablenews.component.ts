import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AddProduitComponent } from '../../produits/add-produit/add-produit.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewsComponent } from '../add-news/add-news.component';
import { ThenewsService } from 'src/app/Shared/thenews.service';
import { News } from 'src/app/Models/news';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import * as alertifyjs from 'alertifyjs';
import { DetailNewsComponent } from '../detail-news/detail-news.component';


@Component({
  selector: 'app-tablenews',
  templateUrl: './tablenews.component.html',
  styleUrls: ['./tablenews.component.css']
})
export class TablenewsComponent implements OnInit {
  public listNews: News[] = [];
  public newsSelectionne: any;
  receivedRow:any;

  displayedColumns: string[] = ['id','titre','image','datepublication','publier','actions'];
  dataSource: any;
  dialogConfig: any;
  proddata:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  showDataOfChildComponent: any;

  constructor(public dialog:MatDialog,
              private thenewsservice: ThenewsService,
              private router: Router,
              private http: HttpClient
              ) { }

  ngOnInit(): void {
    this.receivedRow= new News;
    this.newsSelectionne = new News();
    this.refreshNews();
    this.thenewsservice.RequiredRefresh.subscribe(r => {
      this.refreshNews();
    })
  }

  loadGerant(news:News){
    this.thenewsservice.news = Object.assign({},news);
    console.log('categorie loaded',news);
  }
 

  refreshNews(){
    this.thenewsservice.getNews().subscribe(result => {
      this.listNews = result;
      this.dataSource = new MatTableDataSource<News>(this.listNews);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  getNews(id: number) {
    this.newsSelectionne = this.listNews.find((n) => n.id == id);
    console.log(this.newsSelectionne);
  }
  
  public updateMarque(id: number) {
   
    
  }

  deleteGerant(id:number){
    alertifyjs.confirm("Suppresion de produit","Voulez-vous supprimer ce produit?",
    () =>{return this.thenewsservice.deleteNews(id).subscribe((res) => {
      this.refreshNews();
      alertifyjs.success('produit supprimé avec succès');
    });},
     function(){alertifyjs.success('suppression produit annulée');})
  }


  public openGerant(id: number) {
    window.open("/produits/" + id + "/edit")
  }


  getrow(row:any){
   this.receivedRow=row;
  }
  
  
  openDialogDet(row:any,action:string){
     const dialogRef = this.dialog.open(DetailNewsComponent,{width:'50%',height: '500px',
     enterAnimationDuration:'1000ms',
     exitAnimationDuration: '2000ms',
     data:{
      id:row.id,
      libelle: row.libelle,
     }
     
     }); 

         
     dialogRef.afterClosed().subscribe(result => {
      this.showDataOfChildComponent = result;
      console.log('here is the data result', result)
    });  
 
}
  openAddGerantDialog(){
    let dialogRef= this.dialog.open(AddNewsComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  }


  openAddNewsDialog(enteranimation:any,exitanimation:any,idnews:any){

    this.dialog.open(AddNewsComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'60%',
      data:{id:idnews}
    })

  }

 /*  openAddNewsDialog(){
    let dialogRef= this.dialog.open(AddNewsComponent,{data: {name:'Antoine'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog result:", result);
    });
  } 
 }  */
}
