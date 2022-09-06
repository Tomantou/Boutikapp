import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetcommandeclComponent } from './detcommandecl.component';

describe('DetcommandeclComponent', () => {
  let component: DetcommandeclComponent;
  let fixture: ComponentFixture<DetcommandeclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetcommandeclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetcommandeclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
