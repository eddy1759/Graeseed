# What are Arrays
> Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index.

Each item can be accessed through its index (position) number. Arrays always start at index 0, so in an array of 4 elements we could access the 3rd element using the index number 2.

## What's Special About Array
- Having constant time access to any particular element in an array.
- Constant time access to any element O(1)
- Constant time to add and remove at the end O(1)
- Linear time to add and remove at any arbitrary location O(n)

### Getting the address of an array arithmetically
 $address-of-interest = address + array size * (i - first index$)

e.g Given an array whose:
> - address is 1000,
> - element size is 8
> - first index is 0

What is the address of the element at index 6?

address_of_interest = 1000 + 8 * (6 - 0) = 1048
The address of element at index 6 is 1048