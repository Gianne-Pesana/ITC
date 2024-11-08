#include <iostream>
#include <iomanip>
using namespace std;

float nthFactorial(float n);
float sumFirstNumbers(float n);
float averageFirstNumbers(float n);

int main() {
    float n = 15;
    float result = sumFirstNumbers(n);

    cout << fixed << setprecision(2)
         << result << endl;

    return 0;
}

float nthFactorial(float n) {
    float result = n;
    while (n > 1) {
        result *= n - 1;
        n--;
    }
    return result;
}

float sumFirstNumbers(float n) {
    float result = 0;
    int i = 1;
    do
    {
        result += i;
        i++;
    } while (i <= n);
    
    return result;
}

float averageFirstNumbers(float n) {
    float result = 0;
    int i;
    for (i = 1; i <= n; i++)
    {
        result += i;
    }
    result /= n;

    return result;
}
