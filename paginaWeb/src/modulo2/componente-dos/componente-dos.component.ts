import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegacion2(){
    this.router.navigate(['web3'])
  }

}
