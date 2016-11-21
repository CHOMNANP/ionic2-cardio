import { Component } from '@angular/core';

import { NavController , Platform} from 'ionic-angular';
import { CardIO } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {
  		this.platform.ready()
  		.then(() =>{

  			

  		});

  }


  showCamera(){

    alert('start Cardio');


    	/*Camera.getPicture().then((imageData) => {
			 // imageData is either a base64 encoded string or a file URI
			 // If it's base64:
			 let base64Image = 'data:image/jpeg;base64,' + imageData;
			}, (err) => {
			 	
			});

    	*/
   
      CardIO.canScan()
      .then(
        (res: boolean) => {
     //     if(res){
       //     let options = {
         //     requireExpiry: true,
           //   requireCCV: false,
             // requirePostalCode: false
            //};
            //CardIO.scan(options);
          //}          
          alert('Can scan Cardio');
        })
      .catch(function(error) {
        alert(JSON.stringify(error));
      });


     

    alert('run Cardio completed');
  }

}
