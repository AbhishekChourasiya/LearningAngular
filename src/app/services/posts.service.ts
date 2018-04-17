import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import 'rcjx/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
    export class PostsService{
        constructor(private http:Http){
            console.log('post service init');
        }

        getPosts(){
            return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
       
    }
    getPostsById(id:string){
        return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .map(res => res.json()); 
   
}
}
