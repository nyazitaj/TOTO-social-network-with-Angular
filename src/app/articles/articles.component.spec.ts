import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ArticlesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'coursAngular'`, () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('coursAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ArticlesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('coursAngular app is running!');
  });
});
