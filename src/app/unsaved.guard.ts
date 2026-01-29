import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CanComponentDeactivate } from "./can-deactivate.interface";


@Injectable({ providedIn: 'root' })
export class UnsavedChangedGurad implements CanDeactivate<any> {
    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate();
    }
}