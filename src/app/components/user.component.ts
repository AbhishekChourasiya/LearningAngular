import { Component } from '@angular/core';
import { Address } from 'cluster';
import { FormsModule } from '@angular/forms'
import { PostsService } from '../services/posts.service'

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  id1: string;

  constructor(private postsService: PostsService) {
    console.log('constructor running')
    this.name = 'Ram',
      this.email = 'ram.a@gmail.com',
      this.address = {
        street: 'AV street',
        city: 'BLR',
        state: 'india'
      }
    this.hobbies = ['music', 'cricket', 'sports'];
    this.showHobbies = false;
    this.id1='10';
   // this.postsService.getPosts().subscribe(posts => { this.posts = posts });
   
  }

  loadPost(){
    this.postsService.getPostsById(this.id1).subscribe(posts => { this.posts = posts });
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }

  }
  addHobby(hobby: any) {
    console.log(hobby);
    this.hobbies.push(hobby)
  }
  deleteHobby(i: any) {
    this.hobbies.splice(i, 1);
  }
}
interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

