import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionFormComponent } from './devotion-form.component';

describe('DevotionFormComponent', () => {
  let component: DevotionFormComponent;
  let fixture: ComponentFixture<DevotionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
