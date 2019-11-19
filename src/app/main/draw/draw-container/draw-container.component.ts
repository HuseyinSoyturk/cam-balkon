import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DrawService } from "../draw.service";
import { Path } from "paper";
import * as paper from "paper";

@Component({
  selector: "cam-balkon-draw-container",
  templateUrl: "./draw-container.component.html",
  styleUrls: ["./draw-container.component.scss"]
})
export class DrawContainerComponent implements OnInit {
  @ViewChild("drawContainer", { static: false }) drawContainerRef: ElementRef;

  constructor(private drawService: DrawService) {}

  ngOnInit() {
    this.drawService.addRectangleSubject.subscribe(res => {
      console.log(res);
      
    });
  }

  ngAfterViewInit() {
    paper.setup(this.drawContainerRef.nativeElement);
  }
}
