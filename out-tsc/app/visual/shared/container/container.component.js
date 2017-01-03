var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
/**
 * Clase ContainerComponent. Implementa la funcionalidad de un Componente.
 *
 * ContainerComponent es un componente que actua como contenedor de contenido
 * aplicando márgenes y colocando apropiadamente el contenido que se añada en
 * su interior.
 */
export var ContainerComponent = (function () {
    /**
     * Constructor de la clase.
     */
    function ContainerComponent() {
    }
    ContainerComponent = __decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
//# sourceMappingURL=/Users/garciparedes/development/--dhondtanalyzer/dhondtanalyzer/src/app/visual/shared/container/container.component.js.map