import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { imageService } from '../services/image.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userFile:any;
  public imagePath:any;
  imgURL:any;
  InputImage:string  ="";
  userModificationForm : FormGroup
  @Input() user : User
  @Output() notification = new EventEmitter<boolean>();
  user2 : any
  user3 : User
  constructor(private fb:FormBuilder, private us : UserService, private session: SessionService,private imageService : imageService) { }

  ngOnInit(): void {
    this.userModificationForm = this.fb.group(
      {
        'nom' : [this.user.nom,[Validators.required]],
        'prenom' : [this.user.prenom,[Validators.required]],
        'datenaissance' : [this.user.dateNaissance,[Validators.required]],
        'picture' : [this.user.urlpicture],
      }
    )
  }
  notifyParent(){
    this.notification.emit(false);
  }
  update(f:FormGroup){
    this.user.nom = f.value.nom;
    this.user.prenom = f.value.prenom;
    this.user.dateNaissance = f.value.datenaissance;
    let response =this.us.updateUser(this.user);
    response.subscribe((data)=>
    {
      if(this.InputImage!=""){
      const formdata=new FormData();
      formdata.append('file',this.userFile,this.InputImage);
      this.imageService.postFileUser(formdata,this.session.getUser().idUser).subscribe((data)=> {
        this.user2 = data
        this.session.setUser(this.user2);
      });
    }
      this.session.setUser(this.user);
    });
    
    this.notifyParent();
  }

  selectFile(event : any){
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
 
      this.userFile=file;
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event) =>{this.imgURL=reader.result}
    }
  }

}
