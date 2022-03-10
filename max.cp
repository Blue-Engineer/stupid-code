// C++ program to obtain the maximum
// value that can be store in int
#include <climits>
#include <iostream>
using namespace std;

// Driver Code
int main()
{
	// From the constant of climits
	// header file
	int valueFromLimits = INT_MAX;

	cout << "Value from climits "
		<< "constant (maximum): ";
	cout << valueFromLimits << "\n";

	valueFromLimits = INT_MIN;
	cout << "Value from climits "
		<< "constant(minimum): ";
	cout << valueFromLimits << "\n";

	// Using the wrap around property
	// of data types

	// Initialize two variables with
	// value -1 as previous and another
	// with 0 as present
	int previous = -1;
	int present = 0;

	// Keep on increasing both values
	// until the present increases to
	// the max limit and wraps around
	// to the negative value i.e., present
	// becomes less than previous value
	while (present > previous) {
		previous++;
		present++;
	}

	cout << "\nValue using the wrap "
		<< "around property:\n";

	cout << "Maximum: " << previous << "\n";
	cout << "Minimum: " << present << "\n";

	return 0;
}
