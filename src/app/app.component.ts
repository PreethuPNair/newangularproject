import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ngOnInit(): void {
    
    this.example();
  }

  example() {


    var x = 10;

    if (true) {
      var x = 20; // This is allowed
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20


    let y = 10;
    if (true) {
      let y = 20; // This is not allowed
      console.log(y); // Output: 20
    }
    console.log(y); // Output: 10

  
    const z = 10;
    if (true) {
      const z = 20; // This is not allowed
      console.log(z); // Output: 10
    }
    console.log(z); // Output: 10
  }


}
