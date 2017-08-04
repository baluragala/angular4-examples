import {Observable} from 'rxjs/Observable';

export const getProduct = () => {
  return Observable.of({
    id: 1,
    title: 'Angular',
    duration: '5',
  }).delay(3000);
};
