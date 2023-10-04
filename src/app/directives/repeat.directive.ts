import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  standalone: true
})
export class RepeatDirective {

  @Input() set appRepeat(value: number){
    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.template)
    }
  }

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {}

}
