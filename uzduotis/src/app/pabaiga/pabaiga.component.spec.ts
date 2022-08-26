import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabaigaComponent } from './pabaiga.component';

describe('PabaigaComponent', () => {
  let component: PabaigaComponent;
  let fixture: ComponentFixture<PabaigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PabaigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PabaigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
