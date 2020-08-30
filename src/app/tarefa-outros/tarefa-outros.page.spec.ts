import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarefaOutrosPage } from './tarefa-outros.page';

describe('TarefaOutrosPage', () => {
  let component: TarefaOutrosPage;
  let fixture: ComponentFixture<TarefaOutrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaOutrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaOutrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
