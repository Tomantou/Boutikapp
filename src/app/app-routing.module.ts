import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from 'src/app/Pages/categories/categories.component';
import { ClientsComponent } from 'src/app/Pages/clients/clients.component';
import { CommandeclComponent } from 'src/app/Pages/commandecl/commandecl.component';
import { CommandefournComponent } from 'src/app/Pages/commandefourn/commandefourn.component';
import { FournisseursComponent } from 'src/app/Pages/fournisseurs/fournisseurs.component';
import { GerantsComponent } from 'src/app/Pages/gerants/gerants.component';
import { MarquesComponent } from 'src/app/Pages/marques/marques.component';
import { PventesComponent } from 'src/app/Pages/pventes/pventes.component';
import { ConfigdataComponent } from 'src/app/Pages/configdata/configdata.component';
import { FacturesComponent } from 'src/app/Pages/factures/factures.component';
import { StocksComponent } from 'src/app/Pages/stocks/stocks.component';
import { NewsComponent } from 'src/app/Pages/news/news.component';
import { PromotionsComponent } from 'src/app/Pages/promotions/promotions.component';
import { ProduitsComponent } from 'src/app/Pages/produits/produits.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { PromoComponent } from 'src/app/Pages/promo/promo.component';
import { AproposComponent } from 'src/app/Pages/apropos/apropos.component';
import { ContactComponent } from 'src/app/Pages/contact/contact.component';
import { SigninComponent } from 'src/app/Pages/signin/signin.component';
import { LoginComponent } from './Pages/login/login.component';
import { TransferstocksComponent } from './Pages/transferstocks/transferstocks.component';
import { DetcommandeclComponent } from './Pages/detcommandecl/detcommandecl.component';
import { DetcommandefournComponent } from './Pages/detcommandefourn/detcommandefourn.component';
import { GerernewsComponent } from './Pages/gerernews/gerernews.component';
import { BottompventesComponent } from './Pages/bottompventes/bottompventes.component';
import { EditProduitComponent } from './Pages/produits/edit-produit/edit-produit.component';
import { AddProduitComponent } from './Pages/produits/add-produit/add-produit.component';
import { DetailProduitComponent } from './Pages/produits/detail-produit/detail-produit.component';
import { AddMarqueComponent } from './Pages/marques/add-marque/add-marque.component';
import { PanierComponent } from './Pages/panier/panier.component';

const routes: Routes = [
  {
    path:"", component:AccueilComponent,
  },

  {
    path:"accueil", component:AccueilComponent,
  },
  {
    path:"news", component:NewsComponent,
  },
  {
    path:"gerernews", component:GerernewsComponent,
  },

  {
    path:"promo", component:PromoComponent,
  },
  {
    path:"promotions", component:PromotionsComponent,
  },

  {
    path:"contact", component:ContactComponent,
  },
  
  {
    path:"apropos", component:AproposComponent,
  },

  {
    path:"login", component:LoginComponent,
  },
  {
    path:"signin", component:SigninComponent,
  },
  {
    path:"categories", component:CategoriesComponent,
  },
  {
    path:"clients", component:ClientsComponent,
  },
  {
    path:"commandecl", component:CommandeclComponent,
  },
  {
    path:"commandefourn", component:CommandefournComponent,
  },
  {
    path:"detcommandecl", component:DetcommandeclComponent,
  },
  {
    path:"detcommandefourn", component:DetcommandefournComponent,
  },
  {
    path:"factures", component:FacturesComponent,
  },
  {
    path:"fournisseurs", component:FournisseursComponent,
  },
  {
    path:"gerants", component:GerantsComponent,
  },
  {
    path:"configdata", component:ConfigdataComponent,
  },
  {
    path:"marques", component:MarquesComponent,
  },
  {
    path:"produits", component:ProduitsComponent,
  },
  {
    path:"pventes", component:PventesComponent,
  },
  {
    path:"stocks", component:StocksComponent,
  },
  {
    path:"transfertstocks", component:TransferstocksComponent,
  },
  {
    path:"bottompventes", component:BottompventesComponent,
  },
  {
    path:"factures", component:FacturesComponent,
  },

  { path: 'produits/:id/edit', component: EditProduitComponent
  },

  { 
    path: 'produits/add-produit', component: AddProduitComponent 
  },

  { 
    path: 'produits/detail-produit', component: DetailProduitComponent 
  },

  { 
    path: 'marques/add-marque', component: AddMarqueComponent 
  },


  { 
    path: 'panier', component: PanierComponent 
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
