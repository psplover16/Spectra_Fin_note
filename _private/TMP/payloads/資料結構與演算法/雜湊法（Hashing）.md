十一、雜湊法（Hashing）

[必背]
- Hash Function：將 key 映射到 table index。
- Collision：不同 key 映射到同一位置。
- Overflow：碰撞或桶空間不足造成溢位。

[比較] Overflow / Collision 處理
- Chaining：每格接 linked list 或 bucket。
- Open Addressing：
  - Linear Probing：線性探測，易 primary clustering。
  - Quadratic Probing：平方探測。
  - Double Hashing：用第二個 hash function 決定探測距離。
- Rehashing：擴大 table 後重新雜湊。

[補充]
- Load Factor = 已存元素數 / table 大小。
- Load factor 太高會降低效率。
