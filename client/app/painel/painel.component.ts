import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    ngOnInit(){
        this.titulo = this.compressBigTitles(this.titulo, 7);
    }

    compressBigTitles(title: string, maxSize: number): string{
        return title.length > maxSize ? title.substr(0,maxSize).concat('...') : title;
    }
}