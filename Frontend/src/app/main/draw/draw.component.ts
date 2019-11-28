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
      {
        en: 200,
        açı: 90
      },
      // {
      //   en: 200,
      //   açı: 90
      // },

    ]
  }

  drawWidth = 20;

  constructor(private utiSer: UtilityService) { }

  ngAfterViewInit() {
    const stage = new Konva.Stage({
      container: 'drawDiv',
      width: this.drawDivRef.nativeElement.clientWidth,
      height: this.drawDivRef.nativeElement.clientHeight,
    })

    const layer = new Konva.Layer()

    let startingPoint = {
      x: 10,
      y: 10
    }

    let endPoint = {
      x: 10,
      y: 30
    }

    let totalDegree = 0;
    let nextDegree = -90;


    for (let index = 0; index < this.drawExample.kasalar.length; index++) {
      const kasa = this.drawExample.kasalar[index];
      totalDegree += kasa.açı
      nextDegree = this.drawExample.kasalar[index + 1] ? this.drawExample.kasalar[index + 1].açı : 0


      let point1 = {
        x: startingPoint.x,
        y: startingPoint.y
      }

      let point2;

      if (nextDegree >= 0) {
        point2 = {
          x: point1.x + kasa.en * this.utiSer.getCosFromDegree(totalDegree),
          y: point1.y + kasa.en * this.utiSer.getSinFromDegree(totalDegree) 
        }
      }
      else if (nextDegree < 0) {
        point2 = {
          x: point1.x + kasa.en * this.utiSer.getCosFromDegree(totalDegree) + this.drawWidth * this.utiSer.getTanFromDegree(nextDegree / 2),
          y: point1.y + kasa.en * this.utiSer.getSinFromDegree(totalDegree) - this.drawWidth * this.utiSer.getTanFromDegree(totalDegree / 2)
        }
      }


      let point4 = {
        x: endPoint.x,
        y: endPoint.y
      }

      let point3;

      if (nextDegree <= 0) {
        point3 = {
          x: point4.x + kasa.en * this.utiSer.getCosFromDegree(totalDegree),
          y: point4.y + kasa.en * this.utiSer.getSinFromDegree(totalDegree) 
        }
      }
      else if (nextDegree > 0) {
        point3 = {
          x: point4.x + kasa.en * this.utiSer.getCosFromDegree(totalDegree) - this.drawWidth * this.utiSer.getTanFromDegree(nextDegree / 2),
          y: point4.y + kasa.en * this.utiSer.getSinFromDegree(totalDegree) + this.drawWidth * this.utiSer.getTanFromDegree(totalDegree / 2)
        }
      }


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
        fill: '#0000ff80',
        lineCap: 'sqare',
        // lineJoin: 'round',
        // bezier : true
      });
      startingPoint = point2
      endPoint = point3

      console.log({ totalDegree, nextDegree, points: line.points() })
      layer.add(line)
    }
    stage.add(layer)
  }

}
