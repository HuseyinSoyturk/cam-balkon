import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Konva from 'konva'
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'cam-balkon-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements AfterViewInit {

  @ViewChild('drawDiv', { static: false }) drawDivRef: ElementRef

  drawExample = {
    kasalar: [
      {
        en: 200,
        açı: 0
      },
      // {
      //   en: 200,
      //   açı: 90
      // },
      // {
      //   en: 200,
      //   açı: -90
      // },
      // {
      //   en: 200,
      //   açı: 90
      // },
      // {
      //   en: 400,
      //   açı: 90
      // }

    ]
  }

  en = 40;

  constructor(private utiSer: UtilityService) { }

  ngAfterViewInit() {
    const stage = new Konva.Stage({
      container: 'drawDiv',
      width: this.drawDivRef.nativeElement.clientWidth,
      height: this.drawDivRef.nativeElement.clientHeight,
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

    let lastPoint1 = {
      x: 10,
      y: 10
    }
    let lastPoint2 = {
      x: 10,
      y: lastPoint1.y + this.en
    }

    let lastdegree = 0;
    let nextdegree = 90;

    for (const kasa of this.drawExample.kasalar) {
      lastdegree += kasa.açı
      let point1 = {
        x: lastPoint1.x,
        y: lastPoint1.y
      }
      let point2 = {
        x: lastPoint2.x,
        y: lastPoint2.y
      }
      let point3 = {
        x: lastPoint2.x + kasa.en * this.utiSer.getCosFromDegree(kasa.açı),
        y: lastPoint2.y + kasa.en * this.utiSer.getSinFromDegree(kasa.açı)
      }
      let point4 = {
        x: lastPoint1.x + kasa.en * this.utiSer.getCosFromDegree(kasa.açı),
        y: lastPoint1.y + kasa.en * this.utiSer.getSinFromDegree(kasa.açı) - this.en * this.utiSer.getTanFromDegree(nextdegree / 2)
      }
      debugger
      let line = new Konva.Line({
        points: [
          point1.x,
          point1.y,
          point2.x,
          point2.y,
          point3.x,
          point3.y,
          point4.x,
          point4.y
        ],
        stroke: 'black',
        closed: true,
        fill: '#0000ff80'
      });
      lastPoint1 = point3
      lastPoint2 = point4
      layer.add(line)
    }


    // layer.add(rect1)
    stage.add(layer)
  }

}
