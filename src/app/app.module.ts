import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';

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
import {HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './Pages/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { DetcommandeclComponent } from './Pages/detcommandecl/detcommandecl.component';
import { DetcommandefournComponent } from './Pages/detcommandefourn/detcommandefourn.component';
import { GerernewsComponent } from './Pages/gerernews/gerernews.component';
import { TabprodComponent } from './Pages/tabprod/tabprod.component';
import { EditproduitComponent } from './Pages/editproduit/editproduit.component';
import { EditnewsComponent } from './Pages/editnews/editnews.component';
import { EditstockComponent } from './Pages/editstock/editstock.component';
import { EditcategorieComponent } from './Pages/editcategorie/editcategorie.component';
import { EditmarqueComponent } from './Pages/editmarque/editmarque.component';
import { EditgerantComponent } from './Pages/editgerant/editgerant.component';
import { EditpventeComponent } from './Pages/editpvente/editpvente.component';
import { EditclientComponent } from './Pages/editclient/editclient.component';
import { EditfournisseurComponent } from './Pages/editfournisseur/editfournisseur.component';
import { EditpromotionComponent } from './Pages/editpromotion/editpromotion.component';
import { BottompventesComponent } from './Pages/bottompventes/bottompventes.component';
import { BottompventesrefComponent } from './Pages/bottompventesref/bottompventesref.component';
import { EditfactureComponent } from './Pages/editfacture/editfacture.component';
import { EditcommandeComponent } from './Pages/editcommande/editcommande.component';
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
    TabprodComponent,
    EditproduitComponent,
    EditnewsComponent,
    EditstockComponent,
    EditcategorieComponent,
    EditmarqueComponent,
    EditgerantComponent,
    EditpventeComponent,
    EditclientComponent,
    EditfournisseurComponent,
    EditpromotionComponent,
    BottompventesComponent,
    BottompventesrefComponent,
    EditfactureComponent,
    EditcommandeComponent
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
    MatTabsModule,MatExpansionModule,MatDatepickerModule,
    HttpClientModule,MatBadgeModule,MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
