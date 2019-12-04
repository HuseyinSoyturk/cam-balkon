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
    systemHeight: [''],
    cornerNumber: [''],
    corners: this.formBuilder.array([]),
    faces: this.formBuilder.array([]),
    // cornerGroup: this.formBuilder.group({
    // }),
    // address: this.formBuilder.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // }),
    // aliases: this.formBuilder.array([
    //   this.formBuilder.control('')
    // ])
  });

  kasaForm = this.formBuilder.group({
    faceWidth: [''],
    glassNumber: [''],
    glasses: this.formBuilder.array([
      this.formBuilder.group({
        glassWidth: [''],
        openingSide: [''],
        haveHole: [true],
        hole: this.formBuilder.group({
          top: [''],
          left: [''],
          radius: ['']
        })
      })

    ])
  })

  get corners() {
    return this.drawForm.get('corners') as FormArray;
  }

  get faces() {
    return this.drawForm.get('faces') as FormArray;
  }  
  
  get glasses() {
    return this.faces.get('glasses') as FormArray;
  }

  get cornerNumber() {
    return this.drawForm.get('cornerNumber');
  }

  onInputCornerNumber(cornerNumber) {
    let difference = cornerNumber.value - this.corners.length
    if (difference < 0) {
      for (let index = 0; index < Math.abs(difference); index++) {
        this.corners.removeAt(this.corners.length - 1)
      }
      for (let index = 0; index < Math.abs(difference) + 1; index++) {
        this.faces.removeAt(this.faces.length - 1)
      }
    } else if (difference > 0) {
      for (let index = 0; index < difference; index++) {
        this.corners.push(this.formBuilder.control(''))
      }
      for (let index = 0; index < difference + 1; index++) {
        this.faces.push(this.kasaForm)
      }
    }
  }

  onSubmit() {
    console.log(this.drawForm.value)
  }

  ngOnInit() {
  }

}
