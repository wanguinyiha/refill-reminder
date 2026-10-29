Two Sum - Two loop solution
Idea: Check each pair of elements until their sum equals the target.
Time complexity: O(n^2).
Space complexity: O(1) auxilliary space.

Two sum - Map solution
Idea: Store previously seen numbers and their indices. Look up the number needed to reach the target.
Time Complexity: O(n) average
Space complexity: O(n) auxilliary space



Time Complexity
Time complexity measures how an algorithm's execution time increases as the input size (\(n\)) grows, independent of hardware or processor speed.
• \(O(1)\) — Constant Time: Runtime stays the same regardless of input size (e.g., looking up an array index).
• \(O(\log n)\) — Logarithmic Time: Runtime grows slowly as input increases, cutting the problem size in half each step (e.g., binary search).
• \(O(n)\) — Linear Time: Runtime grows directly and proportionally with input size (e.g., looping through a list once).
• \(O(n \log n)\) — Log-linear Time: Common in efficient sorting algorithms like Merge Sort or Quick Sort.
• \(O(n^2)\) — Quadratic Time: Runtime grows non-linearly, typically seen in nested loops (e.g., bubble sort, checking all pairs).
• \(O(2^n)\) — Exponential Time: Runtime doubles with each addition to the input size (e.g., naive recursive Fibonacci)

Space complexity
Space complexity measures the total memory an algorithm needs to run relative to the input size (\(n\)). It includes:
• Fixed Part: Space for code, constants, and simple variables.
• Variable Part: Space that changes with input size, such as dynamic arrays, objects, or the call stack during recursion.
• Auxiliary Space: Extra or temporary memory used by the algorithm excluding the space taken up by the input data itself.

Common Space Complexities
• \(O(1)\) — Constant Space: Uses a fixed amount of memory regardless of input size (e.g., sorting an array in-place).
• \(O(n)\) — Linear Space: Memory usage grows linearly with input size (e.g., creating a new copy of an array of length \(n\)).