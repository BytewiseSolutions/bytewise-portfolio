import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should validate form with correct input', () => {
    component.contactForm.setValue({
      name: 'Lebo',
      email: 'lebo@example.com',
      subject: 'Feedback',
      message: 'Great job!'
    });
    expect(component.contactForm.valid).toBeTrue();
  });

  it('should reset form after submission', () => {
    component.contactForm.setValue({
      name: 'Lebo',
      email: 'lebo@example.com',
      subject: 'Support',
      message: 'Help me with login.'
    });
    component.onSubmit();
    expect(component.contactForm.value).toEqual({
      name: null,
      email: null,
      subject: null,
      message: null
    });
  });
});
