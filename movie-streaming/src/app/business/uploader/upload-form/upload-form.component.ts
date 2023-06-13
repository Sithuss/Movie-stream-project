import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html'
})
export class UploadFormComponent {

  form:FormGroup

  constructor(
    builder:FormBuilder,

    private router:Router){
      this.form = builder.group({
        title:['',Validators.required],
        category:['',Validators.required]





      })
    }


}
