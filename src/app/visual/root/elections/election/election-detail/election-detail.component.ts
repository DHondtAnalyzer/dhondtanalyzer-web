import {Component, OnInit} from '@angular/core';
import {Election} from "../../../../../dao/model/election";
import {Router} from "@angular/router";
import {MdDialogRef} from "@angular/material";
import {Party} from "../../../../../dao/model/party";
import {DialogComponent} from "../../../../shared/dialog/dialog-component";
import {Observable, BehaviorSubject} from "rxjs";
import {DaoService} from "../../../../../dao/dao.service";


/**
 * Clase ElectionDetailComponent. Implementa la funcionalidad de un Componente.
 *
 * ElectionDetailComponent se encarga de representar visualmente una elección.
 */
@Component({
  selector: 'app-election-detail',
  templateUrl: './election-detail.component.html',
  styleUrls: ['./election-detail.component.css']
})
export class ElectionDetailComponent implements DialogComponent, OnInit {


  private editing: boolean;
  private isFullScreen: boolean;
  private resizableSubscriber:BehaviorSubject<boolean>;

  /**
   * Atributo model.
   *
   * El tipo es string.
   */
  private _model: Election;


  /**
   *
   * @type {"../../Observable".Observable<T>}
   * @private
   */
  private _onResize;


    /**
     * Constructor de la clase.
     */
    constructor(private dialogRef: MdDialogRef<ElectionDetailComponent>,
                private daoService: DaoService,
                private router: Router) {
      this.resizableSubscriber = new BehaviorSubject<boolean>(false);
      this.onResize = this.resizableSubscriber.asObservable()
    }


    /**
     * Getter del atributo model.
     * (Necesario por la interfaz ComponentWithParams)
     *
     * @returns {Election}
     */
    get model(): Election {
        return this._model;
    }


    /**
     * Setter del atributo model
     * (Necesario por la interfaz ComponentWithParams)
     *
     * @param value
     */
    set model(value: Election) {
        this._model = value;
    }


  /**
   * Getter del atributo onResize.
   * (necesario por la interfaz DialogComponent)
   *
   * @returns {Observable<boolean>}
   */
  get onResize(): Observable<boolean> {
    return this._onResize;
  }


  /**
   * Setter del atributo onResize.
   * (necesario por la interfaz DialogComponent)
   *
   * @param value
   */
  set onResize(value: Observable<boolean>) {
    this._onResize = value;
  }


    /**
     * Getter del atributo election.
     *
     * Se ha creado para facilitar la comprensión del código refiriendose
     * directamente como un partido y no como un modelo.
     *
     * @returns {Party}
     */
    get election(): Election {
        return this.model;
    }


    /**
     * Setter del atributo election.
     *
     * Se ha creado para facilitar la comprensión del código refiriendose
     * directamente como un partido y no como un modelo.
     *
     * @returns {Party}
     */
    set election(value: Election) {
        this.model = value;
    }


    ngOnInit(): void {
        if (!this.model.name) {
            this.editing = true;
        }
        this.daoService.getElectionObjectObservable(this.model.id)
          .subscribe( election => {console.log(election)})
    }


    /**
     * Función closeDialog.
     *
     * Es la encargada de cerrar el diálogo.
     */
    private closeDialog(): void {
        this.dialogRef.close();
    }

    private navigateToParty(party: Party): void {
        this.closeDialog();
        this.router.navigate(['/app/parties', party.id]);
    }

    /**
     * Función fabIcon.
     *
     * Es la encargada de manejar el control del icono que se muestra en el
     * botón de edición.
     *
     * @returns {string}
     */
    private fabIcon(): string {
        if (this.editing) {
            return 'done';
        } else {
            return 'edit';
        }
    }

    private get iconScreenChange(){
      if(this.isFullScreen){
        return 'fullscreen_exit';
      } else {
        return 'fullscreen';
      }
    }

  private screenStateChange() {
    this.isFullScreen = !this.isFullScreen;
    this.resizableSubscriber.next(this.isFullScreen);
  }

    /**
     * Función editingChange.
     *
     * Es la función encargada de cambiar el estado de edición a visualización
     * y guardar los datos si fuera necesario.
     */
    private editingChange(): void {
        if (this.editing) {
            this.saveChanges();
        }
        this.editing = !this.editing;
    }


    /**
     * Función saveChanges.
     *
     * Es la encargada de guardar los datos después de una modificación o creación.
     */
    private saveChanges(): void {
        // TODO
    }
}
