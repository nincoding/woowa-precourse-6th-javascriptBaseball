import RandomPicker from "../src/models/RandomPicker";

const randomPicker = new RandomPicker();
const computerNumber = randomPicker.getComputerNumber();

describe('RandomPicker', () => {
  it('생성된 임의의 숫자가 3자리인지 테스트', () => {
    expect(computerNumber.toString().length).toBe(3);
  })
});

describe('RandomPicker', () => {
  it('데이터 타입이 숫자타입인지 테스트', () => {
    expect(typeof computerNumber).toBe('number');
    expect(isNaN(computerNumber)).toBe(false);
  });
});

describe('RandomPicker', () => {
  it('중복없이 3자리인지 테스트', () => {
    const digitSet = new Set(computerNumber.toString());
    expect(digitSet.size).toBe(3);
  });
});