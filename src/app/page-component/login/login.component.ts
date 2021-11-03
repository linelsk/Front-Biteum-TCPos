import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { user } from '../../models/userDto';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: user = new user();
  formlogin: FormGroup;
  formRegister: FormGroup;
  formChancePassword: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  public section_active: string = 'login';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private generalService: GeneralService,
    private _snackBar: MatSnackBar,
    private ngxService: NgxUiLoaderService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.formlogin = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.formRegister = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      repeatpassword: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });

    this.formChancePassword = this.fb.group({
      email: ['', Validators.email]
    });
  }

  ngOnInit(){
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 1000);
  }

  async showSection(section: string) {
    this.section_active = section;
  }

  async onSubmit(form_data: any): Promise<void> {
    this.ngxService.start();
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    switch (this.section_active) {
      case 'login':
        if (this.formlogin.valid) {
          try {
            const username = this.formlogin.get('email')?.value;
            const password = this.formlogin.get('password')?.value;
            await this.generalService.service_general_post_with_url('User/Login?' + 'email=' + username + '&password=' + password, form_data)
              .subscribe((response: any) => {
                if (response.success) {
                  //console.log(response)
                  localStorage.setItem('myUser', JSON.stringify(response.result));                  
                  this.router.navigateByUrl('home');
                  //console.log(localStorage.getItem('myData'));
                  this.ngxService.stop();
                }
                else {
                  this.ngxService.stop();
                  this._snackBar.open('Contraseña y/o usuario incorrecto', 'Cerrar', {
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                  });
                }

              });
            await this.generalService.service_general_get_with_url('Company/?' + 'id=' + 2, '')
              .subscribe((response: any) => {
                if (response.success) {
                  localStorage.setItem('myCompany', JSON.stringify(response.result.value[0]));
                  this.ngxService.stop();
                }
              });

          } catch (err) {
            this.loginInvalid = true;
          }
        } else {
          this.formSubmitAttempt = true;
        }
        break;
      case 'register':
        if (this.formRegister.valid) {
          try {

            this.user = form_data;
            //console.log(this.user);
            this.user.roleId = 2;
            await this.generalService.service_general_post_with_url('User', this.user)
              .subscribe((response: any) => {
                this.ngxService.stop();
                this._snackBar.open(response.message, 'Cerrar', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                });
              });
          } catch (err) {
            this.loginInvalid = true;
          }
        } else {
          this.formSubmitAttempt = true;
        }
        break;
      case 'changePassword':
        //console.log("OKKKKK");
        if (this.formChancePassword.valid) {
          try {
            console.log(form_data);
            await this.generalService.service_general_put_with_url('User/Recovery_password?email=' + this.formChancePassword.get('email')?.value, form_data)
              .subscribe((response: any) => {
                this.ngxService.stop();
                this._snackBar.open(response.message, 'Cerrar', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                  //duration: 2000,
                  panelClass: ['success-snackbar'],
                  data: {
                    icon: 'info'
                  }
                });
              });
          } catch (err) {
            this.loginInvalid = true;
          }
        } else {
          this.formSubmitAttempt = true;
        }
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }
  }
}
