import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

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

  constructor() {}

  createContainer() {}

  addRectangle(rectangle: Rectangle) {
    this.addRectangleSubject.next(rectangle);
  }
}
