export const DSA = [
  {
    id: 1,
    question: `Q1. Given a square matrix, turn it by 90 degrees in anti-clockwise direction without using any extra space.
    Example - Input:
    Matrix:
     1  2  3
     4  5  6
     7  8  9
    Output:
     3  6  9 
     2  5  8 
     1  4  7 
    The given matrix is rotated by 90 degree 
    in anti-clockwise direction.
    
    Input:
     1  2  3  4 
     5  6  7  8 
     9 10 11 12 
    13 14 15 16 
    Output:
     4  8 12 16 
     3  7 11 15 
     2  6 10 14 
     1  5  9 13
    The given matrix is rotated by 90 degree 
    in anti-clockwise direction.`,
    answer: `// C++ program to rotate a matrix
    // by 90 degrees
    #include <bits/stdc++.h>
    #define N 4
    using namespace std;
    
    void displayMatrix(
        int mat[N][N]);
    
    // An Inplace function to
    // rotate a N x N matrix
    // by 90 degrees in
    // anti-clockwise direction
    void rotateMatrix(int mat[][N])
    {
        // Consider all squares one by one
        for (int x = 0; x < N / 2; x++) {
            // Consider elements in group
            // of 4 in current square
            for (int y = x; y < N - x - 1; y++) {
                // Store current cell in
                // temp variable
                int temp = mat[x][y];
    
                // Move values from right to top
                mat[x][y] = mat[y][N - 1 - x];
    
                // Move values from bottom to right
                mat[y][N - 1 - x]
                    = mat[N - 1 - x][N - 1 - y];
    
                // Move values from left to bottom
                mat[N - 1 - x][N - 1 - y]
                    = mat[N - 1 - y][x];
    
                // Assign temp to left
                mat[N - 1 - y][x] = temp;
            }
        }
    }
    
    // Function to print the matrix
    void displayMatrix(int mat[N][N])
    {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                printf("%2d ", mat[i][j]);
    
            printf("\n");
        }
        printf("\n");
    }
    
    /* Driver program to test above functions */
    int main()
    {
        // Test Case 1
        int mat[N][N] = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 },
            { 13, 14, 15, 16 }
        };
    
        // Test Case 2
        /* int mat[N][N] = {
                            {1, 2, 3},
                            {4, 5, 6},
                            {7, 8, 9}
                        };
        */
    
        // Test Case 3
        /*int mat[N][N] = {
                        {1, 2},
                        {4, 5}
                    };*/
    
        // displayMatrix(mat);
    
        rotateMatrix(mat);
    
        // Print rotated matrix
        displayMatrix(mat);
    
        return 0;
    }
    `,
  },
  {
    id: 2,
    question: `Question 2 - Given an array of positive numbers, find the maximum sum of a subsequence with the constraint that no 2 numbers in the sequence should be adjacent in the array. So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).Answer the question in most efficient way.

    Examples : 
    
    Input : arr[] = {5, 5, 10, 100, 10, 5}
    Output : 110
    
    Input : arr[] = {1, 2, 3}
    Output : 4
    
    Input : arr[] = {1, 20, 3}
    Output : 20`,
    answer: `//c++ program for the above approach
    #include <bits/stdc++.h>
    
    using namespace std;
    
    
    /*Function to return max sum such that no two elements
    are adjacent */
    int FindMaxSum(vector<int> arr, int n)
    {
        int incl = arr[0];
        int excl = 0;
        int excl_new;
        int i;
    
        for (i = 1; i < n; i++)
        {
            /* current max excluding i */
            excl_new = (incl > excl) ? incl : excl;
    
            /* current max including i */
            incl = excl + arr[i];
            excl = excl_new;
        }
    
        /* return max of incl and excl */
        return ((incl > excl) ? incl : excl);
    }
    
    // Driver program to test above functions
    int main()
    {
        vector<int> arr = {5, 5, 10, 100, 10, 5};
        cout<<FindMaxSum(arr, arr.size());
    }
    `,
  },
  {
    id: 3,
    question: `Question - 3 Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

    Example: 
    
    Input: arr[] = {3, 1, 4, 6, 5} 
    Output: True 
    There is a Pythagorean triplet (3, 4, 5).
    
    Input: arr[] = {10, 4, 6, 12, 5} 
    Output: False 
    There is no Pythagorean triplet. `,
    answer: `// A C++ program that returns true if there is a Pythagorean
    // Triplet in a given array.
    #include <iostream>
    
    using namespace std;
    
    // Returns true if there is Pythagorean triplet in ar[0..n-1]
    bool isTriplet(int ar[], int n)
    {
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    // Calculate square of array elements
                    int x = ar[i] * ar[i], y = ar[j] * ar[j], z = ar[k] * ar[k];
    
                    if (x == y + z || y == x + z || z == x + y)
                        return true;
                }
            }
        }
    
        // If we reach here, no triplet found
        return false;
    }
    
    /* Driver program to test above function */
    int main()
    {
        int ar[] = { 3, 1, 4, 6, 5 };
        int ar_size = sizeof(ar) / sizeof(ar[0]);
        isTriplet(ar, ar_size) ? cout << "Yes" : cout << "No";
        return 0;
    }
    `,
  },
  {
    id: 4,
    question: `Question - 4 Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor.`,
    answer: `// C++ Program for Lowest Common Ancestor in a Binary Tree
    // A O(n) solution to find LCA of two given values n1 and n2
    #include <iostream>
    #include <vector>
    
    using namespace std;
    
    // A Binary Tree node
    struct Node
    {
        int key;
        struct Node *left, *right;
    };
    
    // Utility function creates a new binary tree node with given key
    Node * newNode(int k)
    {
        Node *temp = new Node;
        temp->key = k;
        temp->left = temp->right = NULL;
        return temp;
    }
    
    // Finds the path from root node to given root of the tree, Stores the
    // path in a vector path[], returns true if path exists otherwise false
    bool findPath(Node *root, vector<int> &path, int k)
    {
        // base case
        if (root == NULL) return false;
    
        // Store this node in path vector. The node will be removed if
        // not in path from root to k
        path.push_back(root->key);
    
        // See if the k is same as root's key
        if (root->key == k)
            return true;
    
        // Check if k is found in left or right sub-tree
        if ( (root->left && findPath(root->left, path, k)) ||
            (root->right && findPath(root->right, path, k)) )
            return true;
    
        // If not present in subtree rooted with root, remove root from
        // path[] and return false
        path.pop_back();
        return false;
    }
    
    // Returns LCA if node n1, n2 are present in the given binary tree,
    // otherwise return -1
    int findLCA(Node *root, int n1, int n2)
    {
        // to store paths to n1 and n2 from the root
        vector<int> path1, path2;
    
        // Find paths from root to n1 and root to n1. If either n1 or n2
        // is not present, return -1
        if ( !findPath(root, path1, n1) || !findPath(root, path2, n2))
            return -1;
    
        /* Compare the paths to get the first different value */
        int i;
        for (i = 0; i < path1.size() && i < path2.size() ; i++)
            if (path1[i] != path2[i])
                break;
        return path1[i-1];
    }
    
    // Driver program to test above functions
    int main()
    {
        // Let us create the Binary Tree shown in above diagram.
        Node * root = newNode(1);
        root->left = newNode(2);
        root->right = newNode(3);
        root->left->left = newNode(4);
        root->left->right = newNode(5);
        root->right->left = newNode(6);
        root->right->right = newNode(7);
        cout << "LCA(4, 5) = " << findLCA(root, 4, 5);
        cout << "\nLCA(4, 6) = " << findLCA(root, 4, 6);
        cout << "\nLCA(3, 4) = " << findLCA(root, 3, 4);
        cout << "\nLCA(2, 4) = " << findLCA(root, 2, 4);
        return 0;
    }
    `,
  },
  {
    id: 5,
    question: `Question 5 Given two numbers represented by two lists, write a function that returns the sum list. The sum list is a list representation of the addition of two input numbers.
    Example - 
    Input: 
List1: 5->6->3 // represents number 563 
List2: 8->4->2 // represents number 842 
Output: 
Resultant list: 1->4->0->5 // represents number 1405 
Explanation: 563 + 842 = 1405

Input: 
List1: 7->5->9->4->6 // represents number 75946
List2: 8->4 // represents number 84
Output: 
Resultant list: 7->6->0->3->0// represents number 76030
Explanation: 75946+84=76030`,
    answer: `// C++ program to add two numbers
    // represented by linked list
    #include <bits/stdc++.h>
    using namespace std;
    
    /* Linked list node */
    class Node {
    public:
        int data;
        Node* next;
    };
    
    /* Function to create a
    new node with given data */
    Node* newNode(int data)
    {
        Node* new_node = new Node();
        new_node->data = data;
        new_node->next = NULL;
        return new_node;
    }
    
    /* Function to insert a node at the
    beginning of the Singly Linked List */
    void push(Node** head_ref, int new_data)
    {
        /* allocate node */
        Node* new_node = newNode(new_data);
    
        /* link the old list off the new node */
        new_node->next = (*head_ref);
    
        /* move the head to point to the new node */
        (*head_ref) = new_node;
    }
    
    /* Adds contents of two linked lists and
    return the head node of resultant list */
    Node* addTwoLists(Node* first, Node* second)
    {
    
        // res is head node of the resultant list
        Node* res = NULL;
        Node *temp, *prev = NULL;
        int carry = 0, sum;
    
        // while both lists exist
        while (first != NULL
            || second != NULL) {
            // Calculate value of next
            // digit in resultant list.
            // The next digit is sum of
            // following things
            // (i) Carry
            // (ii) Next digit of first
            // list (if there is a next digit)
            // (ii) Next digit of second
            // list (if there is a next digit)
            sum = carry + (first ? first->data : 0)
                + (second ? second->data : 0);
    
            // update carry for next calculation
            carry = (sum >= 10) ? 1 : 0;
    
            // update sum if it is greater than 10
            sum = sum % 10;
    
            // Create a new node with sum as data
            temp = newNode(sum);
    
            // if this is the first node then
            // set it as head of the resultant list
            if (res == NULL)
                res = temp;
    
            // If this is not the first
            // node then connect it to the rest.
            else
                prev->next = temp;
    
            // Set prev for next insertion
            prev = temp;
    
            // Move first and second
            // pointers to next nodes
            if (first)
                first = first->next;
            if (second)
                second = second->next;
        }
    
        if (carry > 0)
            temp->next = newNode(carry);
    
        // return head of the resultant list
        return res;
    }
    
    Node* reverse(Node* head)
    {
        if (head == NULL || head->next == NULL)
            return head;
    
        /* reverse the rest list and put
            the first element at the end */
        Node* rest = reverse(head->next);
        head->next->next = head;
    
        head->next = NULL;
    
        /* fix the head pointer */
        return rest;
    }
    
    
    // A utility function to print a linked list
    void printList(Node* node)
    {
        while (node != NULL) {
            cout << node->data << " ";
            node = node->next;
        }
        cout << endl;
    }
    
    /* Driver code */
    int main(void)
    {
        Node* res = NULL;
        Node* first = NULL;
        Node* second = NULL;
    
        // create first list 7->5->9->4->6
        push(&first, 6);
        push(&first, 4);
        push(&first, 9);
        push(&first, 5);
        push(&first, 7);
        printf("First List is ");
        printList(first);
    
        // create second list 8->4
        push(&second, 4);
        push(&second, 8);
        cout << "Second List is ";
        printList(second);
    
        // reverse both the lists
        first = reverse(first);
        second = reverse(second);
        // Add the two lists
        res = addTwoLists(first, second);
    
        // reverse the res to get the sum
        res = reverse(res);
        cout << "Resultant list is ";
        printList(res);
    
        return 0;
    }
    `,
  },
];
