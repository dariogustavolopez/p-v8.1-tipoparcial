import { Component, OnInit } from '@angular/core';
import { Empresa } from "../../models/empresa";
import { MockEmpresasService } from "../../services/mock-empresas.service";

import { EmpresasService } from "../../services/empresas.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})

export class EmpresasComponent implements OnInit {
  Titulo = "Empresas";
  TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; // inicialmente inicia en el listado de articulos (buscar con parametros)
  Mensajes = {
    SD: " No se encontraron registros...",
    RD: " Revisar los datos ingresados..."
  };

  Lista: Empresa[] = [];
  RegistrosTotal: number;

  SinBusquedasRealizadas = true;

  Pagina = 1; // inicia pagina 1

  // opciones del combo activo
  OpcionesActivo = [
    { Id: null, Nombre: "" },
    { Id: true, Nombre: "SI" },
    { Id: false, Nombre: "NO" }
  ];

  FormFiltro: FormGroup;
  FormReg: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    //private articulosService: MockArticulosService,
    
    private empresasService: EmpresasService,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.FormFiltro = this.formBuilder.group({
      Nombre: [""],
      Activo: [true]
    });
    this.FormReg = this.formBuilder.group({
      IdEmpresa: [0],
      RazonSocial: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]
      ],
      CantidadEmpleados: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],
      FechaFundacion: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}"
          )
        ]
      ],
      Activo: [true]
    });

    this.GetFamiliasEmpresas();
  }

  GetFamiliasEmpresas() {
    this.empresasService.get().subscribe((res: EmpresaFamilia[]) => {
      this.Familias = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
    this.FormReg.reset({ Activo: true });
    this.submitted = false;
    //this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
  }

  // Buscar segun los filtros, establecidos en FormReg
  Buscar() {
    this.SinBusquedasRealizadas = false;
    this.empresasService
      .get(
        this.FormFiltro.value.Nombre,
        this.FormFiltro.value.Activo,
        this.Pagina
      )
      .subscribe((res: any) => {
        this.Lista = res.Lista;
        this.RegistrosTotal = res.RegistrosTotal;
      });
  }

  // Obtengo un registro especifico según el Id
  BuscarPorId(Dto, AccionABMC) {
    window.scroll(0, 0); // ir al incio del scroll

    this.empresasService.getById(Dto.IdEmpresa).subscribe((res: any) => {
      this.FormReg.patchValue(res);

      //formatear fecha de  ISO 8061 a string dd/MM/yyyy
      var arrFecha = res.FechaFundacion.substr(0, 10).split("-");
      this.FormReg.controls.FechaFundacion.patchValue(
        arrFecha[2] + "/" + arrFecha[1] + "/" + arrFecha[0]
      );
      this.AccionABMC = AccionABMC;
    });
  }

  Consultar(Dto) {
    this.BuscarPorId(Dto, "C");
  }

  // comienza la modificacion, luego la confirma con el metodo Grabar
  Modificar(Dto) {
    if (!Dto.Activo) {
      this.modalDialogService.Alert(
        "No puede modificarse un registro Inactivo."
      );
      return;
    }
    this.submitted = false;
    this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
    this.BuscarPorId(Dto, "M");
  }

  // grabar tanto altas como modificaciones
  Grabar() {
    this.submitted = true;
    // verificar que los validadores esten OK
    if (this.FormReg.invalid) {
      return;
    }

    //hacemos una copia de los datos del formulario, para modificar la fecha y luego enviarlo al servidor
    const itemCopy = { ...this.FormReg.value };

    //convertir fecha de string dd/MM/yyyy a ISO para que la entienda webapi
    var arrFecha = itemCopy.FechaFundacion.substr(0, 10).split("/");
    if (arrFecha.length == 3)
      itemCopy.FechaFundacion = new Date(
        arrFecha[2],
        arrFecha[1] - 1,
        arrFecha[0]
      ).toISOString();

    // agregar post
    if (itemCopy.IdEmpresa == 0 || itemCopy.IdEmpresa == null) {
      itemCopy.IdEmpresa = 0;
      this.empresasService.post(itemCopy).subscribe((res: any) => {
        this.Volver();
        this.modalDialogService.Alert("Registro agregado correctamente.");
        this.Buscar();
      });
    } else {
      // modificar put
      this.empresasService
        .put(itemCopy.IdEmpresa, itemCopy)
        .subscribe((res: any) => {
          this.Volver();
          this.modalDialogService.Alert("Registro modificado correctamente.");
          this.Buscar();
        });
    }
  }

  // representa la baja logica
  ActivarDesactivar(Dto) {
    this.modalDialogService.Confirm(
      "Esta seguro de " +
        (Dto.Activo ? "desactivar" : "activar") +
        " este registro?",
      undefined,
      undefined,
      undefined,
      () =>
        this.empresasService
          .delete(Dto.IdEmpresa)
          .subscribe((res: any) => this.Buscar()),
      null
    );
  }

  // Volver desde Agregar/Modificar
  Volver() {
    this.AccionABMC = "L";
  }

  ImprimirListado() {
    this.modalDialogService.Alert("Sin desarrollar...");
  }

  GetEmpresaListadoNombre(Id) {
    var EmpresaFamilia= this.Familias.filter(
      x => x.IdEmpresaListado === Id
    )[0];
    if (EmpresaFamilia) return EmpresaFamilia.Nombre;
    else return "";
  }
}