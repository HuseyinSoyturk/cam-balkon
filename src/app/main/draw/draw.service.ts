import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Draw } from 'src/app/interface/interface';

export interface Rectangle {
  width: number;
  height: number;
  x: number;
  y: number;
}

@Injectable({
  providedIn: "root"
})
export class DrawService {

  rectangles: Rectangle[] = [];
  addRectangleSubject: Subject<Rectangle> = new Subject();

  drawOnContainerSubject : Subject<Draw> = new Subject();

  constructor() {}
}
