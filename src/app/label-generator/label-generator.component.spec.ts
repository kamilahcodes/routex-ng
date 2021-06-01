import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelGeneratorComponent } from './label-generator.component';

describe('LabelGeneratorComponent', () => {
  let component: LabelGeneratorComponent;
  let fixture: ComponentFixture<LabelGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
