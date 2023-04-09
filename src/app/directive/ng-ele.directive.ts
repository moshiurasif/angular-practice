import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNgEle]'
})
export class NgEleDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = "red";
    el.nativeElement.style.backgroundColor = "yellow";
    el.nativeElement.style.textAlign = "center";
    el.nativeElement.style.textTransform = "uppercase";
    el.nativeElement.style.padding = "20px 0px";
  }

}
