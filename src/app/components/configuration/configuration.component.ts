import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string

  constructor() {
    this.token = ''
  }

  ngOnInit(): void {
  }

  editToken(): void {
    localStorage.setItem('token', this.token)
  }

  getToken(): string {
    return <string>localStorage.getItem('token')
  }
}
