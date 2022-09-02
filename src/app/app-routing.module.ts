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
import { BottomComponent } from 'src/app/Pages/bottom/bottom.component';
import { LoginComponent } from './Pages/login/login.component';


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
    path:"promo", component:PromoComponent,
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
