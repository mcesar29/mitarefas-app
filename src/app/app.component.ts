import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { MinhasTarefasPageModule } from './minhas-tarefas/minhas-tarefas.module';
import { TarefaOutrosPageModule } from './tarefa-outros/tarefa-outros.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  
  public selectedIndex = 0;
  telaLogin:boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.testeLogin();
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  testeLogin(){
    if(window.location.pathname == '/login' || window.location.pathname == '/criar-usuario'){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    
    this.route.navigateByUrl('/login')
  }


}
