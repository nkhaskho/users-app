import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/models/form-response';

@Component({
  selector: 'app-form-response',
  templateUrl: './form-response.component.html',
  styleUrls: ['./form-response.component.scss']
})
export class FormResponseComponent implements OnInit {

  @Input()
  message: string = "";

  @Input()
  error: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
