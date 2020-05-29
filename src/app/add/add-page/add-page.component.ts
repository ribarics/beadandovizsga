import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../_services/data.service';
import {User} from '../../models/user.model';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  user: any;
  apiUrl = "https://api.github.com/users/";
  addForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService,
    private location: Location,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  save() {
    this.service.save(this.user);
    this.location.back();
  }

}

