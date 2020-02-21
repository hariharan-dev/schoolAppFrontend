import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomeworkPage } from './homework.page';

describe('HomeworkPage', () => {
  let component: HomeworkPage;
  let fixture: ComponentFixture<HomeworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeworkPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
