import {
    Directive,
    OnInit,
    Inject,
    ElementRef,
    Input
} from '@angular/core';
import {
    JQ_TOKEN
} from './jQuery.service';

@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId:string;

    constructor(@Inject(JQ_TOKEN) private $: any, private _el: ElementRef) {
        this.el = _el.nativeElement;
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.


        this.el.addEventListener('click', x => {
            this.$(`#${this.modalId}`).modal({});
        });

    }
}