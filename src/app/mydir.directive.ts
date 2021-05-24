import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMydir]',
})
export class MydirDirective implements OnInit {
  @Input() color = 'blue';
  constructor(private _emntRef: ElementRef) {}

  ngOnInit() {}

  @HostListener('mouseenter') applyColor() {
    this.setColor(this.color);
  }
  @HostListener('mouseleave') removeColor() {
    this.setColor('white');
  }

  setColor(data: string) {
    this._emntRef.nativeElement.style.backgroundColor = data;
  }
}
