import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputTodoComponent } from './imput-todo.component';

describe('ImputTodoComponent', () => {
  let component: ImputTodoComponent;
  let fixture: ComponentFixture<ImputTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
