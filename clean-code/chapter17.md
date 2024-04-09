# Chapter 17: Smells and Heuristics 

## Comments

## Environment

## Functions

## General

## Java

## Names

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