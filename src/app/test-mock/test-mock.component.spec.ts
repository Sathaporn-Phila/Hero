import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMockComponent } from '@src/app/test-mock/test-mock.component';

describe('TestMockComponent', () => {
  let component: TestMockComponent;
  let fixture: ComponentFixture<TestMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
