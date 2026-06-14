四、陣列（Array）

[必背]
- 連續記憶體配置。
- 支援 O(1) 隨機存取。
- 插入與刪除可能需搬移元素，通常 O(n)。

[會算] 位址計算
- 一維陣列：
  - LOC(A[i]) = Base(A) + (i - lower_bound) * element_size。
- 二維陣列 Row-major：
  - LOC(A[i][j]) = Base + [(i - row_lower) * number_of_columns + (j - column_lower)] * element_size。
- 二維陣列 Column-major：
  - LOC(A[i][j]) = Base + [(j - column_lower) * number_of_rows + (i - row_lower)] * element_size。
