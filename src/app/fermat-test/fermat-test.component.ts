import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {

  Versuchskaninchen: number = 13;
  Anzahl: number = 5;
  Ergebnis = "N/A"

  constructor() { }

  fermattest() {
    this.Ergebnis = "starte Fermat-Test der Zahl" + this.Versuchskaninchen + "...";

    let Endergebnis= true; 

    for (let zeuge = 2; zeuge < this.Anzahl + 2; zeuge++) {


      // Berchne zeuge^(Versuchskaninchen-1) modulo Versuchskaninchen
      let Zwischenergebnis = 1;
      for (let i = 0; i < this.Versuchskaninchen - 1; i++) {
        Zwischenergebnis = Zwischenergebnis * zeuge
         Zwischenergebnis = Zwischenergebnis % this.Versuchskaninchen;
      }
      if (Zwischenergebnis === 1) {
        this.Ergebnis += "zeuge " + zeuge + " Ok...";
      } else {
        this.Ergebnis += "Zeuge " + zeuge + " Nicht Ok!";
        Endergebnis= false;
      }
    }

if(Endergebnis ===true) {
  this.Ergebnis +="Test bestanden"
}
else{
  this.Ergebnis +="N icht bestanden"
}
  }
  ngOnInit() {
  }

}












