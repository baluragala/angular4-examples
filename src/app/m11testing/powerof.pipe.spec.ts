import {PowerofPipe} from './powerof.pipe';

describe('PowerofPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerofPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 4 on calling transform(2,2)', () => {
    const pipe = new PowerofPipe();
    expect(pipe.transform(2, 2)).toEqual(4);
  });
});
