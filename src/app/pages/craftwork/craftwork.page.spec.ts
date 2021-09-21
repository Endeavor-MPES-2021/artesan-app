import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftworkPage } from './craftwork.page';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CraftworkPage', () => {
  let component: CraftworkPage;
  let fixture: ComponentFixture<CraftworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CraftworkPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TranslateModule.forRoot(), NgxWebstorageModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
