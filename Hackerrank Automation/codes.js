module.exports = {
    answers: [
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            
            unsigned long long int N, Sum = 0, i, Num;
            
            cin>>N;
            
            for (i = 1 ; i <= N ; i++)
                {
                cin>> Num;
                Sum += Num;
            }
            
            cout<<Sum<<endl;
               
            
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            int n,i,a[1000];
            long sum=0;
            scanf("%d",&n);
            for(i=0;i<n;i++)
                {
                scanf("%d",&a[i]);
                sum+=a[i];
            }
            printf("%ld\n",sum);
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            int n;
            cin >> n;
            long long sum = 0, x;
            
            while (n--) {
                cin >> x;
                sum += x;
            }
            
            cout << sum << endl;
            
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
            int n,i,a[10000],sum=0;
            cin>>n;
            for(int i=0;i<n;i++)
                {cin>>a[i];sum+=a[i];}
            cout<<sum;
            return 0;
        }`,
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            int n;
            cin >> n;
            int sum = 0;
            for (int i = 0;i<n;i++) {
                int in;
                cin >> in;
                sum += in;
            }
            cout << sum;
            return 0;
        }`
    ]
}