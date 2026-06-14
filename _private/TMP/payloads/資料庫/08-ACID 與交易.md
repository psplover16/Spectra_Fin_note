八、ACID 與交易

[必背]
- Atomicity：交易全做或全不做。
- Consistency：交易前後資料庫維持一致。
- Isolation：並行交易彼此隔離。
- Durability：提交後永久保存。

[補充] 隔離性問題
- Dirty Read：讀到未提交資料。
- Non-repeatable Read：同一筆資料重讀結果不同。
- Phantom Read：同一查詢條件重查出現新增或消失的列。
