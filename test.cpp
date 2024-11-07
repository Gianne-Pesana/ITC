#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double income, incomeTax;
    cout << "Enter Income: ";
    cin >> income;

    if (income >= 8000000)
    {
        incomeTax = 2410000 + 0.35 * (income - 8000000);
    }
    else if (income >= 2000000)
    {
        incomeTax = 490000 + 0.32 * (income - 2000000);
    }
    else if (income >= 800000)
    {
        incomeTax = 130000 + 0.30 * (income - 800000);
    }
    else if (income >= 400000)
    {
        incomeTax = 30000 + 0.25 * (income - 400000);
    }
    else if (income >= 250000)
    {
        incomeTax = 0.20 * (income - 250000);
    }
    else
    {
        incomeTax = 0;
    }

    cout << "Income Tax: " << fixed << setprecision(2) 
         << incomeTax << endl;

    return 0;
}