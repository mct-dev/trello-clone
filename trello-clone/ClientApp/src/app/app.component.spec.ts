import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BoardComponent } from './task-board/board/board.component';
import { ColumnComponent } from './task-board/column/column.component';
import { CreateColumnComponent } from './task-board/create-column/create-column.component';
import { TextInputComponent } from './shared-components/text-input/text-input.component';
import { ColumnTitleComponent } from './task-board/column-title/column-title.component';
import { ColumnItemComponent } from './task-board/column-item/column-item.component';
import { ColumnAddItemComponent } from './task-board/column-add-item/column-add-item.component';
import { ButtonComponent } from './shared-components/button/button.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BoardComponent,
        ColumnComponent,
        CreateColumnComponent,
        TextInputComponent,
        ColumnTitleComponent,
        ColumnItemComponent,
        ColumnAddItemComponent,
        ButtonComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ClientApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ClientApp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ClientApp!');
  });
});
