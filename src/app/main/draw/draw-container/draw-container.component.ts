import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DrawService } from "../draw.service";
import { Path, Point, Size, Project, PointText } from "paper";
import * as paper from "paper";
import { Draw } from 'src/app/interface/interface';

@Component({
  selector: "cam-balkon-draw-container",
  templateUrl: "./draw-container.component.html",
  styleUrls: ["./draw-container.component.scss"]
})
export class DrawContainerComponent implements OnInit {
  @ViewChild("drawContainer", { static: false }) drawContainerRef: ElementRef;

  constructor(private drawService: DrawService) { }

  ngOnInit() {
    this.drawService.drawOnContainerSubject.subscribe((res: Draw): void => {
      this.drawReactangles(res)
    });
  }

  ngAfterViewInit() {
    window['paper'] = paper;
    const project = new Project('drawContainer')
  }

  drawReactangles(draw: Draw) {
    const glassWidth = (this.drawContainerRef.nativeElement.width - 60) / draw.numOfGlass;
    const glassHeight = (this.drawContainerRef.nativeElement.height - 60);
    const glassWidthText = (draw.width * 10 / draw.numOfGlass).toString();
    for (let index = 0; index < draw.numOfGlass; index++) {
      const point = new Point(index * glassWidth + 30, 30);
      const size = new Size(glassWidth, glassHeight);
      const glass = new Path.Rectangle({
        point,
        size,
        strokeColor: 'black',
        fillColor: '#0000ff50'
      })
      const text = new PointText({
        point: new Point(index * glassWidth + 40, 20),
        fillColor: '#000000',
        content: glassWidthText + 'mm',
        fontSize: 16
      })
      if (index === 0) {
        const text = new PointText({
          point: new Point(20, glassHeight / 2 - 30),
          fillColor: '#000000',
          content: draw.height * 10 + 'mm',
          fontSize: 16,
          rotation: 270,
        })
      }
    }
  }
}
