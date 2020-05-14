import { OnInit, EventEmitter } from '@angular/core';
export declare class MyLibComponent implements OnInit {
    title: string;
    subtitle: string;
    content: string;
    btnClicked: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    handleBtnClick(): void;
}
