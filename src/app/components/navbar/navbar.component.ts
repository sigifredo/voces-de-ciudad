import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isNavbarCollapsed:boolean = true;
    isInIndex:boolean = true;
    private lastLocation:string = '';

    constructor(private location: Location, private router: Router) {
        this.router.events.subscribe(val => {
            if (location.path() != this.lastLocation) {
                this.isInIndex = (location.path() == '');
                this.lastLocation = location.path();
            }
        });
    }

    ngOnInit(): void {
    }

}
