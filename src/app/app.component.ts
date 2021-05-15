import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      mobileNum: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      birthDate: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      cityName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      stateName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      cpass: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    }, {validator: this.checkPasswords});
  }

  onSubmit() {
    console.log("-------user registration form called-----");

    if(this.userForm.valid){
      alert('Congratulation... Registration successful!!');
      console.log(this.userForm.value);
    } else {
      alert('Please fill the all required fields and meet the criteria!!')
    }
    
  }

  get f() { return this.userForm.controls; }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get("pass")?.value;
    let confirmPass =group.get("cpass")?.value;
  
    return pass === confirmPass ? null : { notSame: true }     
  }

}
