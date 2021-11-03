import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formRegister: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public user: any = {
    user: "",
    avatar: "",
    company_name: ""
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private generalService: GeneralService,
    private _snackBar: MatSnackBar
  ) {
    this.formRegister = this.fb.group({
      nameStore: ['', Validators.required],
      email: ['', Validators.email],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      motherLastName: [''],
      phonenumber: ['', Validators.required],
      basicfile: ['']
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      //const username = this.formRegister.get('email')?.value;

      this.user.user = JSON.parse(localStorage.getItem('myCompany') || '{}');
      this.user.avatar = this.user.avatar;
      this.user.company_name = this.user.companyName;

      console.log(this.user.user.companyName);
      this.formRegister.patchValue({
        nameStore: this.user.user.companyName,
        email: this.user.user.user.email,
        name: this.user.user.user.name,
        lastName: this.user.user.user.lastName,
        motherLastName: this.user.user.user.motherLastName,
        phonenumber: this.user.user.user.mobilePhone,
        basicfile: this.user.user.avatar
      });

    } catch (err) {
      //this.loginInvalid = true;
    }
  }

  onSubmit(obj: any) {
    console.log(obj)
  }

  async save(form_data: any) {
    await this.generalService.service_general_put_with_url('Company/', form_data)
      .subscribe((response: any) => {
        if (response.success) {
         
        }
      });
  }
}
