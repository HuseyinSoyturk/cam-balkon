import { Component, OnInit, Input } from "@angular/core";
import { Draw } from "src/app/interface/interface";
import { DrawService } from '../draw.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "cam-balkon-draw-form",
  templateUrl: "./draw-form.component.html",
  styleUrls: ["./draw-form.component.scss"]
})
export class DrawFormComponent implements OnInit {

  drawFrom = this.formBuilder.group({
    width: ['',Validators.required],
    height: [''],
    numOfGlass: ['']
  })

  constructor(private drawService: DrawService, private formBuilder: FormBuilder) { }

  ngOnInit() { }

  onClickDraw() {
    this.drawService.drawOnContainerSubject.next(this.drawFrom.value);
    // this.drawFrom.reset()
  }
}
