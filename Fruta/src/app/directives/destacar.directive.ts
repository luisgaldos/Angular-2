import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[destacar]'
})
export class DestacarDirective {

  @Input() destacar:string;
  
  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.destacar;
    this.element.nativeElement.style.borderRadius = "15px";
  }

  @HostListener('mouseleave')
  publiconMouseLeave() {
    this.element.nativeElement.style.backgroundColor = "transparent";
  }

}
