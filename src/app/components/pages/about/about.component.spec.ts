import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct name and title', () => {
    expect(component.name).toBe('Lebohang Monamane');
    expect(component.title).toContain('Software Engineer');
  });

  it('should have key skills listed', () => {
    expect(component.skillsSummary.length).toBeGreaterThan(0);
  });
});
