import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignOut, faBook,faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  constructor(){
    
    if(localStorage.getItem('enter1') == 'true'){
      localStorage.setItem('enter', 'true');
      
    }
  
  }

  
  
  logout(){
    localStorage.setItem('enter', 'true');
    this.enter = true;
    localStorage.setItem('enter1','true');
  }
  title = 'myproject';
  faFace = faFacebook;
  faInsta = faInstagram;
  faLink = faLinkedin;
  faTel = faTelegram;
  faHome = faHome;
  faSignOut = faSignOut;
  faTeacher = faChalkboardTeacher;
  faSubject = faBook;
  enter:boolean = (localStorage.getItem('enter') == "true");
  nav:any;
  over:any;
  inner:any;
  toggle:boolean = false;
  handleNav(){
    this.nav = document.querySelector("nav");
    this.nav.style.left = "0";
    this.toggle = true;
    this.over = document.getElementById("overlay");
    this.over.style.display = "block";
    this.over.style.backgroundColor = "rgb(8,8,8)";
    this.inner = document.getElementById("inner");
    this.inner.style.zIndex = -1;
}

navIn(){
  this.nav = document.querySelector("nav");
  this.nav.style.left = "-20%";
  this.over = document.getElementById("overlay");
  this.over.style.display = "none";
  this.inner = document.getElementById("inner");
  this.inner.style.display = "none";
}
  
dropdown(){
  this.inner = document.getElementById("inner");
  this.inner.style.display = "flex";
  this.over = document.getElementById("overlay");
  this.over.style.display = "block";
  this.
  over.style.backgroundColor = "transparent";
}
}
