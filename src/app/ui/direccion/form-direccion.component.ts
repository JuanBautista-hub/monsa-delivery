import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CatalogoService } from 'src/app/infraestructure/service/catalogo.service';

@Component({
  selector: 'app-form-direccion',
  templateUrl: './form-direccion.component.html',
  styleUrls: ['./form-direccion.component.scss']
})
export class FormClienteComponent implements OnInit {
  formProducto: FormGroup = new FormGroup({});
  displayBasic: boolean = false;
  Estados:any[]=[];
  Municipios:any[]=[];
  Localidades:any[]=[];
  constructor(private formBuilder: FormBuilder,private _catalogo:CatalogoService) { }

  ngOnInit(): void {
    this.displayBasic = true;
    this.formProducto = this.formBuilder.group({
      Pais: ["",],
      Estado: ["",],
      Municipio: ["",],
      Calle: ["",],
      CodigoPostal:[""],
      NumeroInterior:[""],
      NumeroExterior:[""],
      Referencia:[""]
    });
    this.getEstados();
  }
  onSubmit(){}
  getEstados() {
this._catalogo.getEstados().subscribe((res)=>{
  this.Estados = res;

})
  }
  getMunicipio(estado:any){
    console.log(estado)
    this._catalogo.getMunicipios(estado.target.value).subscribe((res)=>{

  this.Municipios = res;
    })
  }

  getLocalidad(municipio:any){

    this._catalogo.getLocalidades(municipio.target.value).subscribe((res)=>{

  this.Localidades = res;
    })
  }
}
