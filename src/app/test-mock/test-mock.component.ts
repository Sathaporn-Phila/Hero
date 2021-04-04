import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-test-mock',
  templateUrl: './test-mock.component.html',
  styleUrls: ['./test-mock.component.css']
})
export class TestMockComponent implements OnInit {
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    console.log(this.heroes)
  }
}
