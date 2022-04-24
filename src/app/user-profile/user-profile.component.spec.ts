import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserProfileComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'coursAngular'`, () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('coursAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('coursAngular app is running!');
  });
});
