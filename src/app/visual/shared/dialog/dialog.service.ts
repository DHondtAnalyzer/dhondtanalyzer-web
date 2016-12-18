import {Injectable, ViewContainerRef} from '@angular/core';
import {Location} from '@angular/common';

import {MdDialog, MdDialogRef, ComponentType} from "@angular/material";
import {Model} from "../../../dao/model/model";
import {DialogComponent} from "./dialog-component";


/**
 * Clase DialogService. Implementa la funcionalidad de un Servicio.
 *
 * Este servicio es el encargado de manejar el control de un diálogo dentro
 * de la web. Desde aquí se crea, se muestra, y se destruye.
 *
 * Implementa la capacidad de recibir llamadas externas a partir de la ruta.
 */
@Injectable()
export class DialogService {


    /**
     * Atributo dialogRef.
     *
     * El tipo es MdDialogRef<DialogComponent>.
     *
     */
    private dialogRef: MdDialogRef<DialogComponent>;


    /**
     * Atributo componentType.
     *
     * El tipo es ComponentType<DialogComponent>.
     *
     */
    private componentType: ComponentType<DialogComponent>;


    /**
     * Atributo viewContainerRef.
     *
     * El tipo es ViewContainerRef.
     *
     */
    private viewContainerRef: ViewContainerRef;


    /**
     * Constructor de la clase.
     *
     * @param dialog
     * @param location
     */
    constructor(private dialog: MdDialog,
                private location: Location) {
    }


    /**
     * Función init.
     *
     * Inicializa los atributos de la clase. Puesto que es un servicio (no se
     * puede asignar atributos desde el constructor que no sean otros servicios
     * genéricos) hay que hacerlo desde una función externa.
     *
     * @param viewContainerRef Referencia al componente en el que se muestra
     * el dialog.
     *
     * @param componentType tipo del componente que esta dentro del dialog.
     */
    public init(viewContainerRef: ViewContainerRef,
                componentType: ComponentType<DialogComponent>) {
      this.viewContainerRef = viewContainerRef;
      this.componentType = componentType;
    }


    /**
     * Función openDialog.
     *
     * Es la función encargada de mostrar en pantalla el detalle de un
     * partido político a partir de un diálogo que contiene el contenido del
     * component PartyDetailComponent.
     *
     * @param model string que representa el id del objeto a mostrar.
     * @param navigated boolean que indica si se ha hacedido a la url por
     * navegación.
     * @param newModel
     */
    public openDialog(model: Model, navigated = false, newModel = false) {


        let basePath = this.location.path();
        let extensionPath;


        if (navigated) {
            let temp;

            if (newModel){
                temp = basePath.split('/new');

            } else {
                temp = basePath.split('/' + model.id);
            }
            basePath = temp[0];
            extensionPath = temp[1];
        } else {
            if (newModel){
                extensionPath = "/new";
            } else {
                extensionPath = "/" + model.id;
            }
        }


        this.dialogRef = this.dialog.open(this.componentType, {
            viewContainerRef: this.viewContainerRef,
            role: 'dialog'
        });


        this.dialogRef.componentInstance.model = model;
        if (!navigated) {
            this.location.go(basePath + extensionPath );
        }

        this.dialogRef.afterClosed().subscribe(() => {
            this.location.go(basePath);
            this.dialogRef = null;
        });

    this.dialogRef.componentInstance.onResize.subscribe(isFullScreen => {
      console.log(isFullScreen);
    })
    }
}
