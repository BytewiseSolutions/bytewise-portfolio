import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the skills component', () => {
    expect(component).toBeTruthy();
  });

  it('should have "All" as the default selected category', () => {
    expect(component.selectedCategory).toBe('All');
  });

  it('should return all skill groups when "All" is selected', () => {
    const allGroups = component.filteredGroups;
    expect(allGroups.length).toBe(component.skillGroups.length);
  });

  it('should return only one group when a specific category is selected', () => {
    component.selectedCategory = 'Frontend';
    const filtered = component.filteredGroups;
    expect(filtered.length).toBe(1);
    expect(filtered[0].category).toBe('Frontend');
  });

  it('should include "Frontend", "Backend", "Tools & Platforms" in categories list', () => {
    const categories = component.categories;
    expect(categories).toContain('Frontend');
    expect(categories).toContain('Backend');
    expect(categories).toContain('Tools & Platforms');
  });
});
