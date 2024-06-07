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
    {id:1,name:"لازانيا",price:30,description:"لازانيا لحم",img:"/assets/Pasta.jpg"},
    {id:2,name:"برجر",price:30,description:" برجر دجاج مشوي مع صوص رعيب",img:"/assets/burger.jpg"},
    {id:3,name:"شاورما",price:20,description:" شاورما مع المخلل وصوص الثوم",img:"/assets/shaurma.jpg"},
    {id:4,name:"مقبلات",price:20,description:"  سلطه فتوش",img:"/assets/salad.jpg"}
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
