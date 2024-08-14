#include <iostream>
using namespace std;

struct employee
{
    /* data */
    int eid;
    char favchar;
    int salary;
};

int main(){
    struct employee rohit;
    rohit.eid = 1;
    rohit.favchar = 'a';
    rohit.salary = 1000000000;
    cout<<"the value is : "<<rohit.eid<<endl;
    cout<<"the value is : "<<rohit.favchar<<endl;
    cout<<"the value is : "<<rohit.salary<<endl;
    
    return 0;
}
