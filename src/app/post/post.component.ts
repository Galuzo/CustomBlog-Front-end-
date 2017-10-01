import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Post } from '../post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post:Post
@Output() deleteEmiter=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

delete(){
  this.deleteEmiter.emit();
}

}
