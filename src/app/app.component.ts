import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  permArray: Array<boolean>;

ngOnInit() {
	this.permArray = [false, false, false, false];
}

sendPerm() {
	let objPerm = '';
    for (let i = 0; i < this.permArray.length; i++) {
      let index = i + 1;
      if (this.permArray[i] == true) {
        if (i === this.permArray.length) {
          objPerm += index.toString(); //index es = 1 2 3 o 4 no 0 1 2 3
          console.log('Antes del else: ' + objPerm);
        } else {
          objPerm += index.toString() + ',';
          console.log('Despues del else: ' + objPerm);
        }
      }
    }
}
}

