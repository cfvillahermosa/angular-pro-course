import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { StockCounterComponent } from './stock-counter.component';

// configure environment
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('StockCounterComponent', () => {
  // set up component
  let component: StockCounterComponent;
  // set up fixture wich takes our StockCounterComponent
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    // added our StockCounterComponent to our config testing module
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });

    // overwrite variables in our before each
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    // give an initial value (in this step we could overwrite minimum and maximum values)
    component.value = 0;
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not decrement below the minimum value', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);

    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment below the maximum value', () => {
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  });

  it('should not increment over the maximum value', () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(20);
  });

  it('should call the output on a value change', () => {
    // we´re checking the emit function gets called
    spyOn(component.changed, 'emit').and.callThrough();
    component.step = 100;
    component.increment();
    // make sure emit has benn called with a value of 100 because our step must increments 100 
    expect(component.changed.emit).toHaveBeenCalledWith(100);
  });
});
