import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../types';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
  }

  voteForLink = async () => {

  }

}
