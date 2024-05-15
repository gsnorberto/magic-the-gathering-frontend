import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsAreaComponent } from './sets-area.component';

describe('SetsAreaComponent', () => {
  let component: SetsAreaComponent;
  let fixture: ComponentFixture<SetsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetsAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
