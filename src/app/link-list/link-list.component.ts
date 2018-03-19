import { Apollo } from 'apollo-angular';
import { Link } from './../types';
import { Component, OnInit } from '@angular/core';
import { ALL_LINKS_QUERY } from '../graphql';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  allLinks: Link[] = [];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: ALL_LINKS_QUERY
    }).valueChanges.subscribe((response: any) => {
      this.allLinks = response.data.allLinks;
      this.loading = response.data.loading;
    });
  }

}
