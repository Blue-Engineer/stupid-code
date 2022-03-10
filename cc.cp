// C++ program to obtain the maximum
// value stored in unsigned int
#include <climits>
#include <iostream>
using namespace std;

// Function that prints the maximum
// value stored in unsigned int
void maxUnsignedInt()
{
	// From the constant of climits
	// header file
	unsigned int valueFromLimits = UINT_MAX;

	cout << "Value from climits constant : "
		<< valueFromLimits << "\n";

	// Using the wrap around property
	// of data types

	// Initialize a variable with 0
	unsigned int value = 0;

	// Subtract 1 from value since
	// unsigned data type cannot store
	// negative number, the value will
	// wrap around and store the
	// maximum value in it
	value = value - 1;

	cout << "Value using the wrap"
		<< " around property : "
		<< value << "\n";
}

// Driver Code
int main()
{
	// Function call
	maxUnsignedInt();

	return 0;
}
