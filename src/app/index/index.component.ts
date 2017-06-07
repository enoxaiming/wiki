import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'index-component',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css']
})
export class IndexComponent {
    public singleModel: string = '1';
}
