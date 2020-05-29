import {Component, OnInit} from '@angular/core';
import {DataService} from '../../_services/data.service';
import {Router} from '@angular/router';
import { HttpService } from 'src/app/_services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  // Material
  displayedColumns: string[] = ['name', 'image'];
  dataSource = [];

  githubForm: FormGroup;
  // users = [];
  githubUsers = [];
  newGithubUser: any;
  loading = false;
  LoggedInUsers: any[];

  constructor(
    private router: Router,
    private http: HttpService,
    private fb: FormBuilder,
    private userService: UserService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    // this.users = this.service.list();
    if(localStorage.getItem("ghUsers")){
      this.listLocalGhUsers()
    } 
    else {
      this.reloadOriginalGithubUsers();
    }
    this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.LoggedInUsers = users;
      });
  }
  

  goToDetails(userId: string) {
    this.router.navigate(['details', userId]);
  }

  deleteUser(userId: any) {
    this.dataService.delete(userId);
    this.listLocalGhUsers()
  }

  // a felhasználók között található utolsó id kiválasztása és növelése 1-gyel az új felh. számára
  goToAdd() {
   var myObject = this.githubUsers;
   for (var x in myObject) {
     if (myObject.hasOwnProperty(x)) {
     }
   }
   let nextNum = +`${myObject[x].id}`;
   this.router.navigate(['details', `${nextNum+1}`]);
  }

  reloadOriginalGithubUsers() {
    this.http.getGithubUsers()
      .subscribe(ghUsers => {
        this.githubUsers = ghUsers;
        localStorage.removeItem('ghUsers');
        localStorage.setItem('ghUsers', JSON.stringify(this.githubUsers));
      });
  }

  setLocalStorage() {
    localStorage.removeItem('ghUsers');
    localStorage.setItem('ghUsers', JSON.stringify(this.githubUsers));
  }

  listLocalGhUsers() {
    this.githubUsers = JSON.parse(localStorage.getItem('ghUsers'));
    this.githubUsers.sort((a, b) => a.id - b.id);
  }

}
