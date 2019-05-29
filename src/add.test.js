import { add } from './add';


// // mock functions...testing functions when we don't have access to that function
// const add = jest.fn(() => 3); 

// // unit test since we are only testing one function only
// test('<Add>', () => {  
// 	expect(add(1,2)).toBe(3); 
// 	expect(add).toHaveBeenCalledTimes(1); 
// 	expect(add).toHaveBeenCalledWith(1,2); 
// })


// unit test since we are only testing one function only
test('<Add>', () => {  // name should be that of what is being tested, Add component
	const value = add(1,2);
	expect(value).toEqual(3);

	// expect(add(1,2)).toBe(3);  // this assertion can also be written as such. just remove the const statement. 
	// having redundancies can be good to avoid false positives.
})