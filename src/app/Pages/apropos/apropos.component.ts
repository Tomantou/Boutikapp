import { Component, OnInit } from '@angular/core';
import { Configdata } from 'src/app/Models/configdata';
import { ConfigdataService } from 'src/app/Shared/configdata.service';
@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {
configdatas: Configdata[]=[];
configdata:any;

  constructor(private configservice:ConfigdataService) { }

  ngOnInit(): void {
    this.configdata = new Configdata;
    this.getConfigdatas();
  }

  getConfigdatas(){
    this.configservice.getSignaletique().subscribe({
     next: (result) => {this.configdatas = result;
      this.configdata=this.configdatas[0];
      console.log(this.configdata);
    },
    error: () => {alert('problem');}
    
    });
  }

}
