import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FileSizePipe } from './file-size.pipe';

// Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('FileSizePipe', () => {
  describe('Isolate FileSizePipe test', () => {
    describe('Shallow FileSizePipe test', () => {
      // create test class component (fake virtual component)
      @Component({
        template: `
          Size: {{ size | filesize: suffix }}
        `
      })
      class TestComponent {
        suffix;
        size = 123456789;
      }

      let component: TestComponent;
      // Fixture for debugging and testing a component
      let fixture: ComponentFixture<TestComponent>;
      // reference to the native html element
      let el: HTMLElement;

      // Run some shared setup before each of the specs in the describe in which it is called.
      beforeEach(() => {
        // configure module for the TestBed
        TestBed.configureTestingModule({
          declarations: [FileSizePipe, TestComponent]
        });
        // create our TestComponent returned to our component fixture
        fixture = TestBed.createComponent(TestComponent);
        // instance of the component
        component = fixture.componentInstance;
        // native element
        el = fixture.nativeElement;
      });

      it('should convert bytes to megabytes', () => {
        // trigger change detection cycle
        fixture.detectChanges();
        // textContent --> javascript API for accessing methods on the native element
        expect(el.textContent).toContain('Size: 117.74MB');
        component.size = 1029281;
        fixture.detectChanges();
        expect(el.textContent).toContain('Size: 0.98MB');
      });

      it('should use the default extension when not supplied', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('Size: 117.74MB');
      });

      it('should override the extension when supplied', () => {
        component.suffix = 'myExt';
        fixture.detectChanges();
        expect(el.textContent).toContain('Size: 117.74myExt');
      });
    });

    const pipe = new FileSizePipe();
    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });
    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });
    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  });
});
