import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

enteredTitle='';
enteredContent ='';
@Output() postCreated = new EventEmitter();

onAddPost(form: NgForm) {
  if(form.invalid) {
    return;
  }
 const post = {
   title:form.value.title, content:form.value.content
 }
 this.postCreated.emit(post)
}


  constructor() { }

  ngOnInit(): void {
  }

}
