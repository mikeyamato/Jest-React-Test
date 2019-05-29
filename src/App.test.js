import { total } from './App';  // curly braces when export isn't used so we need to call the function by name

// to mock a dependency import the actual dependencies
import { add} from './add';

jest.mock('./add', () => ({  // we add the path to mock then define the return value which is an object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_syntax
	add: jest.fn(() => 25)  // this is a fake function that will return '25'
}));  

// test('fake test', () => {
// 	expect(true).toBeTruthy();
// })

// integration test since we are testing total which relies on add above
test('<Total>', () => {
	expect(total(5,20)).toBe('$25');
	expect(add).toHaveBeenCalledTimes(1);

	// redundant as it tests the exact same thing above so it really isn't needed
	add.mockImplementation(()=>30);  // allows us to change the value midway threw
	expect(total(10,20)).toEqual('$30');
	expect(add).toHaveBeenCalledTimes(2);
})



