# Chapter 17: Smells and Heuristics

## Comments

### C1: 不恰当的信息

### C2: 废弃的注释

### C3:冗余注释

### C4: 糟糕的注释

### C5: 注释掉的代码

## Environment

### E1: 需要多步才能实现的构建

### E2: 需要多步才能做到的测试

## Functions

### F1: 过多的参数

### F2: 输出参数

### F3: 标识参数

### F4: 死函数

## General

### G1: 一个源文件中存在多种语言

### G2: 明显的行为未被实现

### G3: 不正确的边界行为

### G4: 忽视安全

### G5: 重复

### G6: 在错误的抽象层级伤的代码

### G7: 基类以来于派生类

### G8: 信息过多

### G9: 死代码

### G10: 垂直分隔

### G11: 前后不一致

### G12: 混淆视听

### G13: 人为耦合

### G14: 特性依恋

### G15: 选择算子参数

### G16: 晦涩的意图

### G17: 位置错误的权责

### G18: 不恰当的静态方法

### G19: 使用解释性变量

### G20: 函数名称应该表达其行为

### G21: 理解算法

### G22: 把逻辑依赖改为物理依赖

### G23: 用多态替代 if/else 或者 switch/case

### G24: 遵循标准约定

### G25: 用命名常量替代魔术数

### G26: 准确

### G27: 结构基于约定

### G28: 封装条件

### G29: 避免否定性条件

### G30: 函数只该做一件事

### G31: 遮蔽时序耦合

### G32: 别随意

### G33: 封装边界条件

### G34: 函数应该只在一个抽象层级上

## Names

### N1: 采用描述性名称

### N2: 名称应与抽象层级相符

### N3: 尽可能使用标准命名法

### N4: 无歧义的名称

### N5: 为较大作用范围选用较长名称

### N6: 避免编码

### N7: 名称应该说明副作用

## Tests

### T1: Insufficient Tests 测试不足

A test suite should test everything that could possibly break.

### T2: Use a Coverage Tool 使用覆盖率工具

### T3: Don’t Skip Trivial Tests 别略过小测试

easy to write and their documentary value is higher than the cost to produce them

### T4: An Ignored Test Is a Question about an Ambiguity 被忽略的测试就是对不确定事物的疑问

We can express our question about the requirements as a test that is commented out, or as a test that annotated with @Ignore.

### T5: Test Boundary Conditions 测试边界条件

Take special care to test boundary conditions. We often get the middle of an algorithm right but misjudge the boundaries.

### T6: Exhaustively Test Near Bugs 全面测试相近的缺陷

Bugs tend to congregate. When you find a bug in a function, it is wise to do an exhaustive test of that function. You’ll probably find that the bug was not alone.

### T7: Patterns of Failure Are Revealing 测试失败的模式有启发性

Sometimes you can diagnose a problem by finding patterns in the way the test cases fail. This is another argument for making the test cases as complete as possible. Complete test cases, ordered in a reasonable way, expose patterns.

### T8: Test Coverage Patterns Can Be Revealing 测试覆盖率的模式有启发性

Looking at the code that is or is not executed by the passing tests gives clues to why the failing tests fail.

### T9: Tests Should Be Fast 测试应该快速

Do what you must to keep your tests fast. Small and pure function without side effect.

## Conclusion

Indeed, that value system has been the goal, and the topic, of this book. Clean code is not written by following a set of rules. You don’t become a software craftsman by learn- ing a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines.
