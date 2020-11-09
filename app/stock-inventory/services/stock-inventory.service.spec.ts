import { TestBed } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { StockInventoryService } from './stock-inventory.service';

// configure the environment
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// create response function
function createResponse(body) {
  return Observable.of(new Response(new ResponseOptions({ body: JSON.stringify(body) })));
}

// create mock http class
class MockHttp {
  get() {
    return createResponse([]);
  }
}

// static data to mockup our backend api´s
const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 }
];

const productItems = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another test' }
];

describe('StockInventoryService', () => {

  let service: StockInventoryService;
  let http: Http;

  beforeEach(() => {
    // configure our testing module
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        // http is a dependency of StockInventoryService | override the value of the http with our MockHttp
        { provide: Http, useClass: MockHttp }
      ]
    });
    // reference from the testbed to go and get that http value so we can spy on things and provide the mock data
    http = bed.get(Http);
    // reference to our service
    service = bed.get(StockInventoryService);
  });

  it('should get cart items', () => {
    // spyOn http get
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));
    service.getCartItems().subscribe(result => {
      // testing logic such as expecting the result to be a length of 2
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));
    service.getProducts().subscribe(result => {
      expect(result.length).toBe(2);
      expect(result).toEqual(productItems);
    });
  });
});
