# 物件導向 OOP 三大特性 ★

> 科目：程式（專業 B）｜OOP 三大特性（封裝、繼承、多型）**幾乎必考**。本篇用經典的「動物、狗、貓」與 Java 例子，把抽象的三大特性變具體。
>
> 學習方式：三大特性的**定義與口訣**屬【硬背】；但配上動物例子理解後很好記。Override/Overload、抽象類別/介面的**對照表**要背熟。範例以 Java 為主。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「類別 Class」和「物件 Object」差在哪？用一個比喻說明。
> 2. OOP 三大特性是哪三個？各一句話。
> 3. `Animal a = new Dog(); a.sound();` 會執行 Animal 還是 Dog 的 sound()？這是 Override 還是 Overload？

先想想再往下。

---

## 🤔 先想想

- **類別是藍圖，物件是照藍圖蓋出來的實體**。設計圖只有一張（類別），但可以蓋很多棟房子（物件）。
- 三大特性其實在解決三件事：**藏**（封裝把細節包起來）、**傳**（繼承讓子類承接父類）、**變**（多型讓同一個呼叫有不同表現）。
- 「同名方法」有兩種玩法：一種是子類**改寫**父類的（Override），一種是同一個類別裡**參數不同**的多個同名方法（Overload），別搞混。

---

## 📖 觀念拆解

### 一、類別 Class 與物件 Object

- **類別 Class**：藍圖或模板，定義**屬性**與**方法**。
- **物件 Object**：根據類別造出的**具體實例**。
- 比喻：類別是**餅乾模具**，物件是做出的**一塊塊餅乾**。

```java
class Dog {          // 類別：藍圖
    String name;     // 屬性
    void bark() { System.out.println(name + "：汪汪"); }  // 方法
}

Dog d1 = new Dog();  // 物件：照藍圖造出來的實例
d1.name = "小黑";
d1.bark();           // 小黑：汪汪
```

### 二、三大特性（核心表）

| 特性 | 核心 | 做法或例子 |
|---|---|---|
| 封裝 Encapsulation | 把資料和方法包在類別裡並隱藏細節 | 屬性 private，提供 public getter/setter |
| 繼承 Inheritance | 子類別繼承父類別，可重用與擴充 | Dog extends Animal，is-a 關係 |
| 多型 Polymorphism | 同一操作，不同物件有不同表現 | Animal a = new Dog(); a.sound() 執行 Dog 的版本 |

📌 口訣：**封裝＝包起來藏細節、繼承＝子承父可重用、多型＝同操作不同表現。**

**封裝**——屬性 private，對外只開受控入口：

```java
class Account {
    private int balance;                          // private：外面不能直接碰
    public int getBalance() { return balance; }   // getter
    public void deposit(int n) {                  // 受控的存款
        if (n > 0) balance += n;                  // 可以檢查、保護資料
    }
}
```

**繼承**——子承父，可重用又能擴充：

```java
class Animal {
    void sound() { System.out.println("動物叫"); }
}
class Dog extends Animal {                 // Dog is-a Animal
    void fetch() { System.out.println("撿球"); }  // 擴充新能力
}
// Dog 自動擁有 sound()，還多了 fetch()
```

**多型**——同一句呼叫，不同物件不同表現：

```java
class Dog extends Animal {
    void sound() { System.out.println("汪汪"); }
}
class Cat extends Animal {
    void sound() { System.out.println("喵喵"); }
}

Animal a = new Dog();  a.sound();  // 汪汪（實際跑 Dog 版）
Animal b = new Cat();  b.sound();  // 喵喵（實際跑 Cat 版）
// 同一句 x.sound()，不同物件表現不同 → 多型
```

### 三、Override vs Overload　【易混，必背】

| 種類 | 說明 | 時機 |
|---|---|---|
| 覆寫 Override | 子類別重新定義父類別同名方法 | 執行期多型 |
| 重載 Overload | 同名但參數數量或型別不同 | 編譯期多型 |

```java
// Override（覆寫）：子類改寫父類同名方法，簽章相同
class Animal { void sound(){ System.out.println("動物叫"); } }
class Dog extends Animal {
    @Override void sound(){ System.out.println("汪汪"); }  // 執行期才決定跑哪個
}

// Overload（重載）：同一類別、同名、參數不同
class Calc {
    int add(int a, int b)          { return a + b; }
    double add(double a, double b) { return a + b; }     // 參數型別不同
    int add(int a, int b, int c)   { return a + b + c; } // 參數數量不同
}
// 編譯期就依「傳什麼參數」決定呼叫哪個
```

記法：**Override 在「不同類別、父子之間」，執行期多型；Overload 在「同一類別、參數不同」，編譯期多型。**

### 四、抽象類別 vs 介面

| 比較 | 抽象類別 Abstract Class | 介面 Interface |
|---|---|---|
| 能否 new | 不能 | 不能 |
| 內容 | 可含已實作方法、抽象方法與欄位 | 傳統上只有方法宣告 |
| 關係 | is-a | can-do |
| Java 關鍵字 | extends | implements |

```java
abstract class Animal {           // 抽象類別，不能 new
    abstract void sound();        // 抽象方法（沒實作）
    void breathe(){ System.out.println("呼吸"); }  // 可有已實作方法
}
interface Swimmer {               // 介面
    void swim();                  // 傳統上只有宣告
}
class Dog extends Animal implements Swimmer {  // is-a Animal，can-do 游泳
    void sound(){ System.out.println("汪汪"); }
    public void swim(){ System.out.println("狗爬式"); }
}
```

記法：抽象類別描述「**是什麼（is-a）**」用 `extends`；介面描述「**能做什麼（can-do）**」用 `implements`；兩者都**不能 new**。

📌 **多重繼承常考：** Java 的**類別只能單一繼承**（一個 `extends`），但**可同時 `implements` 多個介面**——這就是 Java 繞過「多重繼承」的方式；而 **C++ 允許類別多重繼承**（也因此有菱形繼承問題）。

---

## ✅ 回到題目：解答

1. **類別是藍圖／模板**（定義屬性與方法），**物件是照藍圖造出的實例**。比喻：類別是餅乾模具，物件是做出來的一塊塊餅乾。
2. 三大特性：**封裝**＝把資料方法包起來、藏細節；**繼承**＝子類承接父類、可重用擴充；**多型**＝同一操作不同物件有不同表現。
3. 會執行 **Dog 的 sound()**（`Animal a = new Dog();` 實際物件是 Dog）。這是 **Override（覆寫）**，屬**執行期多型**。

---

## 📌 重點整理

- 類別＝藍圖（餅乾模具）；物件＝實例（做出來的餅乾）。
- 三大特性口訣：**封裝＝包起來藏細節、繼承＝子承父可重用、多型＝同操作不同表現**。
- 封裝：屬性 private + public getter/setter；繼承：`Dog extends Animal`（is-a）；多型：`Animal a = new Dog(); a.sound()` 跑 Dog 版。
- **Override**＝子類改寫父類同名方法，執行期多型；**Overload**＝同名參數不同，編譯期多型。
- 抽象類別（is-a、extends）與介面（can-do、implements）**都不能 new**；抽象類別可有已實作方法與欄位，介面傳統上只有宣告。

---

## ⚠️ 常見陷阱

- **Override vs Overload 別反**：Override 是「父子改寫、簽章相同、執行期」；Overload 是「同類別、參數不同、編譯期」。
- **多型看的是「實際物件」**：`Animal a = new Dog()` 呼叫被覆寫的方法時跑 Dog 版，不是 Animal 版。
- **抽象類別和介面都不能 new**：只能被繼承/實作後，用子類別建物件。
- **封裝不是只把欄位設 private**：重點是**隱藏細節、對外只開受控入口**（getter/setter 可加驗證）。
- **is-a vs can-do**：繼承／抽象類別表達「是一種」（Dog is-a Animal）；介面表達「會做某事」（Dog can swim）。
- **三大還是四大特性？** 主流講**三大**（封裝、繼承、多型）；部分教材把「**抽象 Abstraction**」（隱藏實作、只暴露必要介面）也算進去成**四大**——看題目用哪套。

---

## 📝 練習題（含解答）

**Q1.** 用一句比喻說明類別與物件的關係。
<details><summary>看解答</summary>

類別是**餅乾模具**（藍圖／模板，定義屬性與方法），物件是用模具做出的**一塊塊餅乾**（具體實例）。一個類別可造出很多物件。
</details>

**Q2.** 封裝通常怎麼做？目的為何？
<details><summary>看解答</summary>

把屬性設成 **private**（外面不能直接改），對外提供 **public 的 getter/setter**。目的是**隱藏細節、保護資料**（例如 setter 可加驗證），讓資料與行為有清楚邊界。
</details>

**Q3.** `Animal a = new Dog(); a.sound();` 跑誰的 sound()？這體現哪個特性？
<details><summary>看解答</summary>

跑 **Dog 的 sound()**（實際物件是 Dog）。這體現**多型**（同一操作、不同物件不同表現），且是透過 **Override（覆寫）** 達成的執行期多型。
</details>

**Q4.** 下列哪個是 Override、哪個是 Overload？
```java
// (甲) class Dog extends Animal { void sound(){...} }  // Animal 也有 sound()
// (乙) int add(int a, int b){...}   double add(double a, double b){...}
```
<details><summary>看解答</summary>

(甲) 是 **Override**（子類改寫父類同名方法，執行期多型）；(乙) 是 **Overload**（同名但參數型別不同，編譯期多型）。
</details>

**Q5.** 抽象類別和介面有什麼共同點與差異？
<details><summary>看解答</summary>

共同點：**都不能 new**。差異：抽象類別表達 **is-a**、用 `extends`、**可含已實作方法/抽象方法/欄位**；介面表達 **can-do**、用 `implements`、傳統上**只有方法宣告**。
</details>
