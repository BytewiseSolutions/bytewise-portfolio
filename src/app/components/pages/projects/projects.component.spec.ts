import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], // Import CommonModule
      declarations: [ProjectsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of projects', () => {
    const projectCards = fixture.nativeElement.querySelectorAll('.project-card');
    expect(projectCards.length).toBe(component.projects.length);
  });

it('should display the correct project details', () => {
  const projectCards = fixture.nativeElement.querySelectorAll('.project-card');
  projectCards.forEach((card: HTMLElement, index: number) => {
    const titleEl = card.querySelector('h3');
    const descEl = card.querySelector('p');

    expect(titleEl?.textContent).toBe(component.projects[index].title);
    expect(descEl?.textContent).toBe(component.projects[index].description);
  });
});

});
