import { Component, VERSION, ViewChild } from '@angular/core';
import { ClrLoadingState, ClrWizard } from '@clr/angular';
import { BehaviorSubject } from 'rxjs';

@Component({ selector: 'clr-wizard-loading-button', templateUrl: './wizard-loading-button.demo.html' })
export class WizardLoadingButtonDemo {
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    //Validating Logic
    this.validateBtnState = ClrLoadingState.SUCCESS;
  }
  @ViewChild('wizard') wizard: ClrWizard;
  open = true;

  loading$ = new BehaviorSubject(true);

  public handleDangerClick(): void {
    this.wizard.finish();
  }

  public showWarning = false;

  public doCustomClick(buttonType: string): void {
    if ('custom-next' === buttonType) {
      this.wizard.next();
    }

    if ('custom-previous' === buttonType) {
      this.wizard.previous();
    }

    if ('custom-danger' === buttonType) {
      this.showWarning = true;
    }
  }
}
