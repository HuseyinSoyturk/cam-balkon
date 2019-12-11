import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'cam-balkon-draw-add',
  templateUrl: './draw-add.component.html',
  styleUrls: ['./draw-add.component.scss']
})
export class DrawAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  drawForm = this.formBuilder.group({
    systemHeight: ['', Validators.required],
    cornerNumber: ['', Validators.required],
  });

  cornerForm = this.formBuilder.group({
    corners: this.formBuilder.array([])
  });

  faceForm = this.formBuilder.group({
    faces: this.formBuilder.array([])
  })

  get corners() {
    return this.cornerForm.get('corners') as FormArray;
  }

  get faces() {
    return this.faceForm.get('faces') as FormArray;
  }

  get cornerNumber() {
    return this.drawForm.get('cornerNumber');
  }

  onInputCornerNumber(cornerNumber: number) {
    let difference = cornerNumber - this.corners.length
    if (difference < 0) {
      for (let index = 0; index < Math.abs(difference); index++) {
        this.corners.removeAt(this.corners.length - 1)
      }
      for (let index = 0; index < Math.abs(difference) + 1; index++) {
        this.faces.removeAt(this.faces.length - 1)
      }
    } else if (difference > 0) {
      for (let index = 0; index < difference; index++) {
        this.corners.push(this.formBuilder.control('', Validators.required))
      }
      for (let index = 0; index < difference + 1; index++) {
        this.faces.push(this.formBuilder.group({
          faceWidth: ['', Validators.required],
          glassNumber: ['', Validators.required],
          glasses: this.formBuilder.array([])
        }))
      }
    }
  }

  onInputGlassNumber(glassNumber, i) {
    let glasses = (this.faces.controls[i].get('glasses') as FormArray)
    const difference = glassNumber - glasses.controls.length
    if (difference < 0) {
      for (let index = 0; index < Math.abs(difference); index++) {
        glasses.removeAt(glasses.length - 1)
      }
    } else {
      for (let index = 0; index < difference; index++) {
        glasses.push(this.formBuilder.group({
          glassWidth: ['', Validators.required],
          openingSide: ['', Validators.required],
          haveHole: [false, Validators.required]
        }))
      }
    }
  }

  onSubmit() {
    console.log(this.drawForm.value, this.cornerForm.value, this.faceForm.value)
  }

  ngOnInit() {
  }

}
