import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {Model} from "../../../dao/model/model";
import {AppListObservable} from "../../../dao/shared/app-list-observable";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


    private query: string = '';

    @Input() placeholder: string = 'Search...';
  @Input() initialList: AppListObservable<Model[]>;

  @Output() onSearch = new EventEmitter<AppListObservable<Model[]>>();

    constructor() {
    }

  ngOnInit(): void {
  }

  filter(): void {
    this.onSearch.emit(<AppListObservable<Model[]>>
      this.initialList.map(list => {
        return list.filter((value) => value.name.toLowerCase()
          .indexOf(this.query.toLowerCase()) > -1
        );
      })
    );
  }
}
