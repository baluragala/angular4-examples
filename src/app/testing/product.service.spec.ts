import {TestBed, inject} from '@angular/core/testing';
import {ProductService} from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be instantiated', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getProducts method', inject([ProductService], (service: ProductService) => {
    expect(service.getProducts).toBeTruthy();
  }));

  it('should retrun 2 products on calling getProducts', inject([ProductService], (service: ProductService) => {
    expect(service.getProducts().length).toEqual(2);
  }));
});
