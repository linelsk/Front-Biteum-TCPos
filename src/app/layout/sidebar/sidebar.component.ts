import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public user: any = {
    user: "",
    avatar: "",
    company_name: ""
  };

  constructor(public _router: Router, private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.user.user = JSON.parse(localStorage.getItem('myCompany') || '{}');
    this.user.avatar = this.user.user.avatar;
    this.user.company_name = this.user.user.companyName;
    console.log(this.user);
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout() {
    console.log("Cierre de sesion");
    localStorage.removeItem("user");
    this._router.navigateByUrl("");
  }

}
