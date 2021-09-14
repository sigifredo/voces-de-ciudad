import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    bannerImg:string = '';
    btnScrollToTop:boolean;

    @HostListener('window:scroll', ['$event']) onScroll(event) {
        if (window.pageYOffset > 100) {
            this.btnScrollToTop = true;
        } else {
            this.btnScrollToTop = false;
        }
    }

    constructor(private scroll: ViewportScroller) { }

    ngOnInit(): void {
        this.bannerImg = this.randomImage();
    }

    public scrollToTop():void {
        this.scroll.scrollToPosition([0,0]);
    }

    private randomImage():string {
        let index:number = Math.floor(Math.random() * 9);
        let arr:number[] = [1, 2, 3, 1, 2, 3, 1, 2, 3];
        return '/assets/carousel/city-' + arr[index] + '.jpg';
    }
}
