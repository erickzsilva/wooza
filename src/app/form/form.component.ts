import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Validator } from './../shared/validator'

@Component({
  selector: 'wza-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}\-[0-9]{4}$/

  cpfPattern = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/  

  formClient: FormGroup  

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createForm();
  }

  dataHist = {    
    dataPlan : JSON.parse(localStorage.getItem('plano')),
    dataPlatform:  JSON.parse(localStorage.getItem('plataforma'))
  }

  createForm() { 
    this.formClient = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      birth: ['', Validators.compose([Validators.required, Validator.MaiorQue18Anos])],
      cpf: this.formBuilder.control('', [Validators.compose([Validators.required, Validators.pattern(this.cpfPattern)])]),
      telephone: this.formBuilder.control('', [Validators.required])
    })
  } 


  onSubmit() {
    const data = { 
      dataClient : this.formClient.value,
      dataPlan : JSON.parse(localStorage.getItem('plano')),
      dataPlatform:  JSON.parse(localStorage.getItem('plataforma'))
    }    
    console.log(data);
    
 
    this.formClient.reset();
  }

}
