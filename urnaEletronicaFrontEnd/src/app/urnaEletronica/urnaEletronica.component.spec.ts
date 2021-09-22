/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrnaEletronicaComponent } from './urnaEletronica.component';

describe('UrnaEletronicaComponent', () => {
  let component: UrnaEletronicaComponent;
  let fixture: ComponentFixture<UrnaEletronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrnaEletronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrnaEletronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
