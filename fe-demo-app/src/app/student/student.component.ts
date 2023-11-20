import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  public studName ='';

  constructor(public activateRouter:ActivatedRoute){
    console.log("activateRouter",activateRouter);
    activateRouter.params.subscribe((param:any)=>{
      console.log(param);
      this.studName=param.studName;
      
    })
    
  }

}
