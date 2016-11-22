import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";

import {ElectionRoutingModule} from "./election-routing.module";

import {ElectionListComponent} from "./election-list/election-list.component";
import {ElectionDetailComponent} from "./election-detail/election-detail.component";

/**
 * Clase ElectionModule. Implementa la funcionalidad de un Modulo.
 *
 * ElectionModule es el módulo que implementa los componentes necesarios para
 * visualizar las Eleciones.
 */
@NgModule({
    declarations: [
        ElectionListComponent,
        ElectionDetailComponent
    ],
    entryComponents: [
        ElectionDetailComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ElectionRoutingModule
    ],
    providers: []
})
export class ElectionModule {


    /**
     * Constructor de la clase.
     */
    constructor() {
    }
}
