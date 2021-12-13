import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../services/facture.service";
import {SessionService} from "../../services/session.service";
import {Facture} from "../../Model/Facture";
import {DetailFacture} from "../../Model/detailFacture";
import {DetailFactureService} from "../../services/detail-facture.service";
import {jsPDF } from 'jspdf';
import {NgxPrintModule} from 'ngx-print';
import {Router} from "@angular/router";

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factureList:Facture[];
  facture:Facture;
  displayall:boolean=true;
  modeCorriger:boolean=false;
  pdfOn=false;
  constructor(private factureService: FactureService, private route:Router,private detailFactureService:DetailFactureService,private session:SessionService) { }

  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.route.navigate(['/users/connexion'])
    }
    else if (this.session.getUser().badge != 'Moderateur'){
      this.route.navigate(['/home'])
    }
    this.factureService.getFactures().subscribe((res)=> {
      this.factureList=res;
    });


  }
  getUserType():string{
  return this.session.getSessionType();
  }
  ChangeDisplay(f:Facture){
    this.facture=f;
    this.displayall=false;
  }
  delete(id:number) {//if(confirm("SUPPRIMER ? ")) {
      this.factureService.deleteFacture(id).subscribe(() => {
        this.factureService.getFactures().subscribe((res) => {
          this.factureList = res;
        });
      });
    //}
  }
  supprimerDetail(id:number) {
    this.detailFactureService.deleteDetailFacture(id).subscribe(()=> {
      this.factureService.updateMontant(this.facture.idFacture);

      this.factureService.getFacture(this.facture.idFacture).subscribe((res)=> {
        this.facture=res;
        this.factureService.getFacture(this.facture.idFacture).subscribe(res=>{
          this.facture.montantFacture=res.montantFacture;
        })
      });

      this.factureService.getFactures().subscribe((res)=> {
        this.factureList=res;
      });
    });
  }
  updateDetailFactureQuantite(df:DetailFacture){
    this.detailFactureService.UpdateDetailFactureQuantite(df).subscribe(()=> {
      this.factureService.updateMontant(this.facture.idFacture);

      this.factureService.getFacture(this.facture.idFacture).subscribe((res)=> {
        this.facture=res;
        this.factureService.getFacture(this.facture.idFacture).subscribe(res=>{
          this.facture.montantFacture=res.montantFacture;
        })
      });
      this.factureService.getFactures().subscribe((res)=> {
        this.factureList=res;
      });
    });
  }


  sleep(ms: number) {
    return new Promise(resolve =>setTimeout(resolve, ms))
  }
  async  exportAsPDF(divId:string)
  { this.pdfOn=true;
    await this.sleep(2000);
    const    data = document.getElementById('MyFacture')!;

    html2canvas(data)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(this.facture.idFacture+"#"+this.facture.user.email+"#"+new Date().toString()+".pdf");
      });
    await this.sleep(2000);

    this.pdfOn=false;
  }


}
