五、Linked List

[必背]
- 節點由資料欄位與指標欄位組成。
- 不需連續記憶體。
- 插入與刪除在已知節點位置時可很快，但搜尋通常 O(n)。

[比較] Array vs Linked List
- Array：隨機存取快、記憶體連續、大小較固定。
- Linked List：插入刪除彈性高、需額外指標空間、無法 O(1) 直接索引。

[會寫虛擬碼]
- 插入：
  - 在 head 前插入。
  - 在 tail 後插入。
  - 在節點中間插入。
- 刪除：
  - 刪除 head。
  - 刪除 tail。
  - 刪除指定節點。

[比較]
- Singly Linked List：單向。
- Circular Linked List：尾端指回頭端。
- Doubly Linked List：每節點有 prev 與 next，可雙向走訪。
