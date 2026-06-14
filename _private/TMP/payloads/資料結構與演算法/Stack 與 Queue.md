六、Stack 與 Queue

[必背] Stack
- LIFO：Last In, First Out。
- 操作：push、pop、peek。
- 應用：函式呼叫、遞迴、括號配對、DFS、運算式轉換。

[必背] Queue
- FIFO：First In, First Out。
- 操作：enqueue、dequeue、front/rear。
- 應用：排程、BFS、緩衝區。

[比較]
- Stack：一端進出。
- Queue：一端進、一端出。
- Array 實作：需注意 overflow、underflow。
- Linked List 實作：大小較彈性，但需額外指標。

[會算] Circular Queue
- 以陣列實作 queue 時，front/rear 透過 modulo 循環。
- 常見判斷：
  - 空：front == rear，或依教材設定。
  - 滿：(rear + 1) mod size == front，若保留一格。
