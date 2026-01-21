import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

const EMAIL_CONFIG = {
  serviceId: 'service_2l43zrg',
  templateId: 'template_ywdz5kj',
  publicKey: 'Tgpg5Y0bWXYlsH458'
};

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm;

  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        formData,
        EMAIL_CONFIG.publicKey
      )
      .then(response => {
        this.successMessage = 'Thank you for your message! We will get back to you shortly.';
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch(err => {
        this.errorMessage = 'Something went wrong. Please try again later.';
      });
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }
}
