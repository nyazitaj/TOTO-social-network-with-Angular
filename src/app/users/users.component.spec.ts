import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UsersComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'coursAngular'`, () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('coursAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('coursAngular app is running!');
  });
});
