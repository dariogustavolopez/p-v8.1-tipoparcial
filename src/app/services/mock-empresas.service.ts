import { Injectable } from '@angular/core';
import{of} from "rxjs";
import{Empresa, Empresas} from"../models/empresa";
@Injectable({ provideIn:"root"})
export class MockEmpresasService {

  constructor() { }
get(RazonSocial: string, Activo: boolean, pagina: number): any {
    var Lista = Empresas.filter(
      item =>
        // RazonSocial == null  chequea por null y undefined
        // RazonSocial === null  chequea solo por null
        (RazonSocial == null ||
          RazonSocial == "" ||
          item.RazonSocial.toUpperCase().includes(RazonSocial.toUpperCase())) &&
        (Activo == null || item.Activo == Activo)
    );
    //ordenar
    Lista = Lista.sort( (a,b) => a.RazonSocial.toUpperCase() > b.RazonSocial.toUpperCase() ? 1 : -1 );
    // paginar con slice
    var RegistrosTotal = Lista.length;
    var RegistroDesde = (pagina - 1) * 10;
    Lista = Lista.slice(RegistroDesde, RegistroDesde + 10);
    return of({ Lista: Lista, RegistrosTotal: RegistrosTotal });
  }
  // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  getById(Id: number) {
    var items: Empresa = Empresas.filter(x => x.IdEmpresa === Id)[0];
    return of(items);
  }

  post(obj: Empresa) {
    obj.IdEmpresa = new Date().getTime();
    Empresas.push(obj);
    return of(obj);
  }

  put(Id: number, obj: Empresa) {
    var indice;
    var items = Empresas.filter(function(item, index) {
      if (item.IdEmpresa === Id) {
        indice = index;
      }
    });
    Empresas[indice] = obj;
    return of(obj);
  }

  delete(Id: number) {
    var items = Empresas.filter(x => x.IdEmpresa === Id);
    items[0].Activo = !items[0].Activo;
    return of(items[0]);
  }
}