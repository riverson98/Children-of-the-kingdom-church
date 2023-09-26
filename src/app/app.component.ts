import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Children-of-the-kingdom-church';

  images = [{
    imageSrc:'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg',
    imageAlt:'Bolinhas'
  },
  {
    imageSrc:'https://static.vecteezy.com/ti/fotos-gratis/t2/6241067-abstrato-poligono-3d-triangulo-amarelo-fundo-geometrico-gratis-foto.jpg',
    imageAlt:'dourado'
  },
  {
    imageSrc:'https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg',
    imageAlt:'azul'
  }
 ]
}
