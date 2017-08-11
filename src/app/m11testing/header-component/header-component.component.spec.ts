import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponentComponent} from './header-component.component';
import {HeaderComponent} from '../../component/header.component';

describe('HeaderComponentComponent', () => {
  let component: HeaderComponentComponent;
  let fixture: ComponentFixture<HeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'header-component works!'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('header-component works!');
  }));

  it('should render title in a p tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('header-component works!');
  }));

});
