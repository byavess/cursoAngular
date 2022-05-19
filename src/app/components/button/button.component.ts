import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(evento: any){
    alert("Hello Angular")
    console.log('no click vem escrito: ', evento.pointerType);
  }

}
