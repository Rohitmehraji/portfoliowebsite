#include<string.h>
#include<iostream>
using namespace std;


int main(){

char string[10] =  "radar";
int i,len;
bool flag   =   false;

len  =  strlen(string);

for (  i = 0; i < len; i++)
{
    /*checking if string is palindrome or not */

    if (string[i]  !=  string[len-i-1]){


        flag  =true;
        break;

        if (flag){
        cout<<string <<"is not palindrome";
        }
        else{
        cout<<  string << "is palindrome";    /* code */
        }
        
    }
}

return 0;
}