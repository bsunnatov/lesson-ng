import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotShow]'
})
export class NotShowDirective {

  private hasView = false;
  @Input() set appNotShow(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      console.log(this.viewContainer)
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
