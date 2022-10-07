import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import { filter } from 'rxjs/operators';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';

import { AccueilComponent } from './Pages/accueil/accueil.component';
import { NewsComponent } from './Pages/news/news.component';
import { BarnavComponent } from './Pages/barnav/barnav.component';
import { PromoComponent } from './Pages/promo/promo.component';
import { AproposComponent } from './Pages/apropos/apropos.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { GerantsComponent } from './Pages/gerants/gerants.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { ProduitsComponent } from './Pages/produits/produits.component';
import { MarquesComponent } from './Pages/marques/marques.component';
import { ConfigdataComponent } from './Pages/configdata/configdata.component';
import { FournisseursComponent } from './Pages/fournisseurs/fournisseurs.component';
import { FacturesComponent } from './Pages/factures/factures.component';
import { StocksComponent } from './Pages/stocks/stocks.component';
import { TransferstocksComponent } from './Pages/transferstocks/transferstocks.component';
import { PromotionsComponent } from './Pages/promotions/promotions.component';
import { CommandeclComponent } from './Pages/commandecl/commandecl.component';
import { CommandefournComponent } from './Pages/commandefourn/commandefourn.component';
import { PventesComponent } from './Pages/pventes/pventes.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselComponent } from './Pages/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { DetcommandeclComponent } from './Pages/detcommandecl/detcommandecl.component';
import { DetcommandefournComponent } from './Pages/detcommandefourn/detcommandefourn.component';
import { GerernewsComponent } from './Pages/gerernews/gerernews.component';
import { AddProduitComponent } from './Pages/produits/add-produit/add-produit.component';
import { DetailProduitComponent } from './Pages/produits/detail-produit/detail-produit.component';
import { ProduitsService } from './Shared/produit.service';
import { CategorieService } from './Shared/categorie.service';
import { MarqueService } from './Shared/marque.service';
import { DialogComponent } from './Pages/dialog/dialog.component';
import { ThenewsService } from './Shared/thenews.service';
import { TableproductComponent } from 'src/app/Pages/produits/tableproduct/tableproduct.component';
import { AddNewsComponent } from 'src/app/Pages/gerernews/add-news/add-news.component';
import { TablenewsComponent } from 'src/app/Pages/gerernews/tablenews/tablenews.component';
import { AddStockComponent } from 'src/app/Pages/stocks/add-stock/add-stock.component';
import { TablestockComponent } from 'src/app/Pages/stocks/tablestock/tablestock.component';
import { AddCategorieComponent } from 'src/app/Pages/categories/add-categorie/add-categorie.component';
import { TablecategorieComponent } from 'src/app/Pages/categories/tablecategorie/tablecategorie.component';
import { AddMarqueComponent } from 'src/app/Pages/marques/add-marque/add-marque.component';
import { TablemarqueComponent } from 'src/app/Pages/marques/tablemarque/tablemarque.component';
import { AddClientComponent } from 'src/app/Pages/clients/add-client/add-client.component';
import { TableclientComponent } from 'src/app/Pages/clients/tableclient/tableclient.component';
import { AddGerantComponent } from 'src/app/Pages/gerants/add-gerant/add-gerant.component';
import { TablegerantComponent } from 'src/app/Pages/gerants/tablegerant/tablegerant.component';
import { AddPventeComponent } from 'src/app/Pages/pventes/add-pvente/add-pvente.component';
import { TablepventeComponent } from 'src/app/Pages/pventes/tablepvente/tablepvente.component';
import { AddFournisseurComponent } from 'src/app/Pages/fournisseurs/add-fournisseur/add-fournisseur.component';
import { TablefournisseurComponent } from 'src/app/Pages/fournisseurs/tablefournisseur/tablefournisseur.component';
import { AddCommandeclComponent } from 'src/app/Pages/commandecl/add-commandecl/add-commandecl.component';
import { TablecommandeclComponent } from 'src/app/Pages/commandecl/tablecommandecl/tablecommandecl.component';
import { AddConfigdataComponent } from 'src/app/Pages/configdata/add-configdata/add-configdata.component';
import { AddFactureComponent } from 'src/app/Pages/factures/add-facture/add-facture.component';
import { TablefactureComponent } from 'src/app/Pages/factures/tablefacture/tablefacture.component';
import { AddPromotionComponent } from 'src/app/Pages/promotions/add-promotion/add-promotion.component';
import { TablepromotionComponent } from 'src/app/Pages/promotions/tablepromotion/tablepromotion.component';
import { AddCommandefournComponent } from 'src/app/Pages/commandefourn/add-commandefourn/add-commandefourn.component';
import { TablecommandefournComponent } from 'src/app/Pages/commandefourn/tablecommandefourn/tablecommandefourn.component';
import { AddTransferstockComponent } from 'src/app/Pages/transferstocks/add-transferstock/add-transferstock.component';
import { EditTransferstockComponent } from 'src/app/Pages/transferstocks/edit-transferstock/edit-transferstock.component';
import { TabletransferstockComponent } from 'src/app/Pages/transferstocks/tabletransferstock/tabletransferstock.component';
import { ProductdialogComponent } from 'src/app/Pages/produits/productdialog/productdialog.component';
import { BottompventesComponent } from './Pages/bottompventes/bottompventes.component';
import { TitresComponent } from './Pages/titres/titres.component';
import { PanierComponent } from './Pages/panier/panier.component';
import { DetailsComponent } from './Pages/details/details.component';
import { AuthorizeService } from './Shared/authorize.service';
import { TokenInterceptor } from './token-interceptor';
import { DetailcategorieComponent } from './Pages/categories/detailcategorie/detailcategorie.component';
import { DetailMarqueComponent } from './Pages/marques/detail-marque/detail-marque.component';
import { DetailStockComponent } from './Pages/stocks/detail-stock/detail-stock.component';
import { DetailPventeComponent } from './Pages/pventes/detail-pvente/detail-pvente.component';
import { DetailGerantComponent } from './Pages/gerants/detail-gerant/detail-gerant.component';
import { DetailClientComponent } from './Pages/clients/detail-client/detail-client.component';
import { DetailNewsComponent } from './Pages/gerernews/detail-news/detail-news.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NewsComponent,
    BarnavComponent,
    PromoComponent,
    AproposComponent,
    SigninComponent,
    ClientsComponent,
    GerantsComponent,
    CategoriesComponent,
    ProduitsComponent,
    MarquesComponent,
    ConfigdataComponent,
    FournisseursComponent,
    FacturesComponent,
    StocksComponent,
    TransferstocksComponent,
    PromotionsComponent,
    CommandeclComponent,
    CommandefournComponent,
    PventesComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    CarouselComponent,
    DetcommandeclComponent,
    DetcommandefournComponent,
    GerernewsComponent,
    AddProduitComponent,
    DetailProduitComponent,
    DialogComponent,
    TableproductComponent,
    AddNewsComponent,
    TablenewsComponent,
    AddStockComponent,
    TablestockComponent,
    AddCategorieComponent,
    TablecategorieComponent,
    AddMarqueComponent,
    TablemarqueComponent,
    AddClientComponent,
    TableclientComponent,
    AddGerantComponent,
    TablegerantComponent,
    AddPventeComponent,
    TablepventeComponent,
    AddFournisseurComponent,
    TablefournisseurComponent,
    AddCommandeclComponent,
    TablecommandeclComponent,
    AddConfigdataComponent,
    AddFactureComponent,
    TablefactureComponent,
    AddPromotionComponent,
    TablepromotionComponent,
    AddCommandefournComponent,
    TablecommandefournComponent,
    AddTransferstockComponent,
    EditTransferstockComponent,
    TabletransferstockComponent,
    ProductdialogComponent,
    BottompventesComponent,
    TitresComponent,
    PanierComponent,
    DetailsComponent,
    DetailcategorieComponent,
    DetailPventeComponent,
    DetailGerantComponent,
    DetailClientComponent,
    DetailNewsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule, MatInputModule,
    MatTabsModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,
    HttpClientModule,MatBadgeModule,
    MatSelectModule,MatDialogModule,MatGridListModule,
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatSidenavModule,MatProgressBarModule,MatListModule


  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
    ProduitsService,
    CategorieService,
    MarqueService,
    ThenewsService,
    AuthorizeService
  ],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,
                  AddProduitComponent,DetailsComponent,
                  AddNewsComponent,
                  AddConfigdataComponent,
                  AddStockComponent,DetailStockComponent,
                  AddCategorieComponent,DetailcategorieComponent,
                  AddMarqueComponent,DetailMarqueComponent]
})
export class AppModule { }
