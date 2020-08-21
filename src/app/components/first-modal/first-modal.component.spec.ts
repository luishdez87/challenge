import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalComponent } from './first-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogRefMock } from 'src/app/test-utils/dialogRef.mock';

describe('FirstModalComponent', () => {
  let component: FirstModalComponent;
  let fixture: ComponentFixture<FirstModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalComponent ],
      imports: [
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useClass: DialogRefMock
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on openPokeball should change the values of message and isClicked', () => {

    component.openPokeball();

    expect(component.message).toEqual('');
    expect(component.isClicked).toBe(true);
  });

  it('on close has to call dialogRef close method', () => {
    const ref = TestBed.get(MatDialogRef);
    const spy = spyOn(ref, 'close').and.callThrough();
    component.close();

    expect(spy).toHaveBeenCalled();
  });
});
