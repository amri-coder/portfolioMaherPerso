import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  registerForm!: FormGroup;
  errorMsg: string = '';
  submitted: boolean = false;
  successMsg: string = '';
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.errorMsg = '';
    this.successMsg = '';
    this.submitted = true;
    if (this.registerForm.valid) {
      this.successMsg = 'Formulaire envoyé avec succès';
    } else {
      this.errorMsg =
        'Le formulaire est invalide. Veuillez remplir correctement les champs.';
    }
  }
}
