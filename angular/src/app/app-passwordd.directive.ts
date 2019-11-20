import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPassworddDirective {
  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
   }
   toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = ' הסתר';
      span.setAttribute("class","pi pi-eye" )

    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = ' הצג ';
      span.setAttribute("class","pi pi-eye")

    }
  }
  setup() {const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
     span.innerHTML = `הצג`;
    span.setAttribute("class","pi pi-eye")
    span.setAttribute("font-size","10em")

    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
    
}
