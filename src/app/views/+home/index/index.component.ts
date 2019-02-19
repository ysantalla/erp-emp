import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-index',
  template: `

  <h1 class="mat-h1">Yasdmfasn</h1>

  <ul>
    <li class="text" *ngFor="let item of items | async">
      {{item.nombre}}
    </li>
  </ul>

  `,
  styles: []
})
export class IndexComponent implements OnInit {

  items: Observable< any[]>;
  constructor(db: AngularFirestore) {

    db.collection('activo_fijo').add({
      nombre: 'yo creo que sip'

    });

    db.collection('activo_fijo').add({
      nombre: 'yo creo que sip2'

    });

    this.items = db.collection('activo_fijo').valueChanges();


  }


  ngOnInit() {

    console.log('fasfd')

  }

}
