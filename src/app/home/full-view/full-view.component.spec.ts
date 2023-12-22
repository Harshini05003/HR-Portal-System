import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullViewComponent } from './full-view.component';

describe('FullViewComponent', () => {
  let component: FullViewComponent;
  let fixture: ComponentFixture<FullViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullViewComponent]
    });
    fixture = TestBed.createComponent(FullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
