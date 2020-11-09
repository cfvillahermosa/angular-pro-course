import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { StockCounterComponent } from './stock-counter.component';

// configure environment
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('StockCounterComponent', () => {
  // set up component
  let component: StockCounterComponent;
  // set up fixture wich takes our StockCounterComponent
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    // added our StockCounterComponent to our config testing module
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });

    // overwrite variables in our before each
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    // give an initial value (in this step we could overwrite minimum and maximum values)
    component.value = 0;
  });

  it('should increment when the + button is clicked', () => {
    el.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
  });

  it('should increment the value when the up arrow is pressed', () => {
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';
    el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });
});
