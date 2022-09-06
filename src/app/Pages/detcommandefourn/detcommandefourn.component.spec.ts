import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetcommandefournComponent } from './detcommandefourn.component';

describe('DetcommandefournComponent', () => {
  let component: DetcommandefournComponent;
  let fixture: ComponentFixture<DetcommandefournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetcommandefournComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetcommandefournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
