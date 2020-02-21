import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TimetablePage } from './timetable.page';

describe('TimetablePage', () => {
  let component: TimetablePage;
  let fixture: ComponentFixture<TimetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimetablePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
