import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../_services/data.service';
import {User} from '../../models/user.model';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  user: any;
  apiUrl = "httpsapi.github.com/users/";
  newUserForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService,
    private location: Location,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.user = this.service.findByGithubId(this.activatedRoute.snapshot.params.id);
    this.newUserForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required]
    })
  }

  save() {
    this.service.save(this.user);
    this.location.back();
  }

  addUser(){
   let obj = {
     id: this.activatedRoute.snapshot.params.id,
     login: this.newUserForm.controls.name.value,
     avatar_url: this.newUserForm.controls.img.value
   }
   this.service.add(obj);
   this.location.back();
  }
}
