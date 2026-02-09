import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektDetailComponent } from './projekt-detail.component';

describe('ProjektDetailComponent', () => {
  let component: ProjektDetailComponent;
  let fixture: ComponentFixture<ProjektDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
