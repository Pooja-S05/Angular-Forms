import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Topics=['Angular','React','Node']

  userModel=new User('Pooja','pooja@gmail.com',56678,'','Morning 10-5',true);
}
