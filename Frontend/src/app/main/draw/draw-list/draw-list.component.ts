import { Component, OnInit } from '@angular/core';
import { Draw, DrawListItem } from 'src/app/interface/interface';

const ELEMENT_DATA: DrawListItem[] = [
  { id:1 , customer:'Ali Soytürk' , faceNumber:3 , operationDate:new Date() },
  { id:2 , customer:'İsmail Soytürk' , faceNumber:2 , operationDate:new Date('11.12.2019') },
  { id:3 , customer:'Sait Soytürk' , faceNumber:1 , operationDate:null },
  { id:4 , customer:'Mustafa Soytürk' , faceNumber:2 , operationDate:new Date('11.9.2019') }
];

@Component({
  selector: 'cam-balkon-draw-list',
  templateUrl: './draw-list.component.html',
  styleUrls: ['./draw-list.component.scss']
})
export class DrawListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customer', 'faceNumber', 'operationDate'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
