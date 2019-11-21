import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Konva from 'konva'

@Component({
  selector: 'cam-balkon-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements AfterViewInit {

  @ViewChild('drawDiv', { static: false }) drawDivRef: ElementRef

  constructor() { }

  ngAfterViewInit() {
    const stage = new Konva.Stage({
      container: 'drawDiv',
      width:this.drawDivRef.nativeElement.clientWidth ,
      height:this.drawDivRef.nativeElement.clientHeight,
    })

    const layer = new Konva.Layer()

    // const rect1 = new Konva.Rect({
    //   x:0,
    //   y:0,
    //   width:200,
    //   height:200,
    //   fill: 'green',
    //   stroke: 'black',
    //   strokeWidth: 4
    // })

    var line = new Konva.Line({
      x: 0,
      y: 0, 
      points: [10 , 10 , 10 , 20 , 200 , 20 , 210 , 10],
      stroke: 'black',
      closed: true,
      fill:'blue'
    });

    // layer.add(rect1)
    layer.add(line)
    stage.add(layer)
  }

}
