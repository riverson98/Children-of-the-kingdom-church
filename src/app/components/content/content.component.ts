import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
  @Input()
  title:string = "";
  @Input()
  description:string = "";
  @Input()
  photoSrc:string = "";
  @Input()
  photoAlt:string ="";
  @Input()
  buttonIsVisible:boolean = false;
}
