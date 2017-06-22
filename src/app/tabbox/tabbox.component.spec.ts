import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabboxComponent } from './tabbox.component';

describe('TabboxComponent', () => {
  let component: TabboxComponent;
  let fixture: ComponentFixture<TabboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
