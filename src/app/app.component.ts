import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Menu';
total =0;
Quan=0;
  foodmenu=[
    {id:1,name:"دجاج",price:30,description:"دجاج مشوي على الفحم",img:"/assets/m.jpeg"},
    {id:2,name:"دجاج",price:30,description:"دجاج شواية ",img:"/assets/v.jpeg"},
    {id:3,name:"ايدام",price:20,description:"ايدام خضار مشكل",img:"/assets/m.jpeg"},
    {id:4,name:"ايدام",price:20,description:"ايدام  بالدجاج على الفرن",img:"/assets/m.jpeg"}
  ]
event: any;


  sum(event:any,price:number){
    const ischecked:boolean =event.target.checked;
    console.log(event,price)
    if(!ischecked){
      console.log("You hadn't select any thing! ")
    }
    if(ischecked){
      this.total=this.total+ price;
      this.Quan+=1;
    }
    else{
      this.total=this.total-price;
      this.Quan-=1;
    }

  }
}
