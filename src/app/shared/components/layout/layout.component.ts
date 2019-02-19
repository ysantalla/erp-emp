import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routerTransition } from '@app/core/animations/router.transition';
import { environment as env } from '@env/environment';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Menu } from '@app/core/model/menu.model';


@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport="false"
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="!(afAuth.user | async) && (afAuth.user | async)">
        <mat-toolbar class="sidenav-navbar" color="primary">
          <img class="logo" src="assets/icono.svg" />
          <span>Menu</span>
          <span class="spacer"></span>

        </mat-toolbar>

        <nav class="nav-menu">

          <app-nav-menu *ngIf="!(afAuth.user | async)" [items]="dashboard"></app-nav-menu>

          <app-nav-menu *ngIf="!(afAuth.user | async)" [items]="admin"></app-nav-menu>


        </nav>

      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar class="navbar" color="primary">
          <mat-toolbar-row>
            <button
              type="button"
              aria-label="Toggle sidenav"
              mat-icon-button
              (click)="drawer.toggle()">
              <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
            </button>

            <span *ngIf="!(afAuth.user | async)">{{appName}}</span>

            <span class="spacer"></span>

            <button mat-button [matMenuTriggerFor]="menu">
              <span *ngIf="afAuth.user | async as user;">Bienvenido {{user.displayName}}</span>
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">

              <button mat-menu-item *ngIf="afAuth.user | async"  (click)="logout()">
                <mat-icon>exit_to_app</mat-icon>
                <span>Cerrar Sesión</span>
              </button>

              <button mat-menu-item *ngIf="!(afAuth.user | async)">
                <mat-icon>lock_open</mat-icon>
                <span>Cuenta de Google</span>
              </button>
            </mat-menu>
          </mat-toolbar-row>
        </mat-toolbar>

        <div class="layout">
          <div class="router">
            <div class="item" [@routerTransition]="o.isActivated && o.activatedRoute.routeConfig.path">
              <router-outlet #o="outlet"></router-outlet>
            </div>
          </div>

          <br/>

          <footer class="footer">
            <mat-toolbar color="primary">
              <span>{{appName}} &#169; {{year}} - Todos los Derechos Reservados</span>
            </mat-toolbar>
          </footer>
        </div>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .router {
      min-height: 87vh;
      height: auto;
    }

    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      box-shadow: 3px 0 6px rgba(0,0,0,.24);
      min-width: 15vw;
    }

    .mat-expansion-panel-body {
      padding: 0 0px 16px;
    }

    mat-nav-list a.menu {
      margin-top: 2px;
      margin-bottom: 2px;
    }

    .navbar {
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
      position: sticky;
      z-index: 1025;
      top: 0;
    }

    .sidenav-navbar {
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    }

    .mat-toolbar-row, .mat-toolbar-single-row {
      height: 64px;
    }

    mat-toolbar button.active, mat-toolbar a.active {
      color: white;
      background: rgba(27, 26, 26, 0.2);
      padding-top: 13.5px;
      padding-bottom: 13px;
    }

    mat-toolbar button.mat-button, mat-toolbar a.mat-button {
      color: white;
      padding-top: 13.5px;
      padding-bottom: 13px;
    }

    a.active {
      background: rgba(27, 26, 26, 0.2);
    }

    .logo {
      width: 50px;
      padding-left: 10px;
      padding-right: 10px;
    }

    footer > .mat-toolbar {
      white-space: normal;
      padding-top: 20px;
      height: 80px;
    }

    .mat-list, .mat-nav-list {
      padding-top: 3px;
      padding-bottom: 3px;
      display: block;
    }

  `],
  animations: [routerTransition]
})
export class LayoutComponent implements OnInit {

  appName = env.appName;
  year = new Date().getFullYear();

  dashboard: Menu;
  admin: Menu;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
  ) {
    this.dashboard = {
      heading: 'Escritorio',
      icon: 'dashboard',
      link: '/dashboard',
      pages: []
    };

    this.admin = {
      heading: 'Administración',
      icon: 'person',
      pages: [
        {
          heading: 'Activo Fijos',
          link: '/admin/activo-fijo',
          icon: 'settings'
        },
      ]
    };
  }

  ngOnInit(): void {}

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
