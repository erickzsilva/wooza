import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Client } from './../shared/client'

@Component({
  selector: 'wza-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  cpfPattern = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/

  formClient: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Client());
  }

  createForm(client: Client) { 
    this.formClient = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      birth: this.formBuilder.control('', [Validators.required]),
      cpf: this.formBuilder.control('', [Validators.required, Validators.pattern(this.cpfPattern)]),
      telephone: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),

    })
  }

  onSubmit() {
    const data = { 
      dataClient : this.formClient.value,
      dataPlan : JSON.parse(localStorage.getItem('plano')),
      dataPlatform:  JSON.parse(localStorage.getItem('plataforma'))
    }
    console.log(data);
 
    this.formClient.reset(new Client());
  }

}
