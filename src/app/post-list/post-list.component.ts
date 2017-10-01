import { Component, OnInit } from '@angular/core';
import {Post } from "../post";
import { Observable } from 'rxjs/Observable';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then(posts => this.posts = posts );
  }

  deletePost(id: number): void {
     this.postService.deleteTodo(id)
     .then(() => {
       this.posts = this.posts.filter(post => post.id != id);
     });
   }
}
