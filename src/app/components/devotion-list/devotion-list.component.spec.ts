import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionListComponent } from './devotion-list.component';

describe('DevotionListComponent', () => {
  let component: DevotionListComponent;
  let fixture: ComponentFixture<DevotionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
