import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectorProvider} from '../../providers/conector/conector';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public rut: string;
  public rutOk: boolean;
  public mail: string;
  public password :string;
  public empresas :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conector: ConectorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit(){
    this.conector.traedatosGet("api/v1/ventasdiarias/empresas")
    .subscribe(datos => {console.log(datos.Data);
                         this.empresas = datos.Data;
                        })
  }

  validarRut(rut){
    this.rutOk = false;
    console.log(rut, this.rutOk);

    this.empresas.forEach(function(element) {
      if (element.Rut == rut){
        console.log("lo encontré " + element.Rut);
        this.rutOk = true;
        }
    });
  }



}
