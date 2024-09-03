---
title: "Clean Code Chapter 7: Error Handling"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2017-04-20"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
---

Error handling is just one of those things that we all have to do when we program. Input can be abnormal and devices can fail. In short, things can go wrong, and when they do, we as programmers are responsible for making sure that our code does what it needs to do.

Error handling is important, but `if it obscures logic`, it’s wrong.

## Use Exceptions Rather Than Return Codes
Function logic should not been obscured by error handling.

```
public class DeviceController {
  public void sendShutDown() { 
    try {
      tryToShutDown();
    } catch (DeviceShutDownError e) {
      logger.log(e); 
    }
  }

  private void tryToShutDown() throws DeviceShutDownError { 
    DeviceHandle handle = getHandle(DEV1);
    DeviceRecord record = retrieveDeviceRecord(handle);

    pauseDevice(handle); 
    clearDeviceWorkQueue(handle); 
    closeDevice(handle);
  }

  private DeviceHandle getHandle(DeviceID id) { 
    ...
    throw new DeviceShutDownError("Invalid handle for: " + id.toString());
    ... 
  }

```
This isn’t just a matter of aesthetics. The code is better because two concerns that were tangled, `the algorithm for device shutdown` and `error handling`, are now `separated`. You can look at each of those concerns and understand them independently.

## Write Your Try-Catch-Finally Statement First

## Use Unchecked Exceptions

## Provide Context With Exceptions

## Define Exception CLasses in Terms of a Caller's Needs

## Define the Normal Flow

## Don't return null

Especially in lower level function design.
When we return null, we are essentially creating work for ourselves and foisting problems upon our callers. All it takes is one missing null check to send an application spinning out of control.

```
if (item != null) {
  ...
}
```

If you are tempted to return null from a method, consider `throwing an exception` or `returning a SPECIAL CASE object` instead. If you are calling a null-returning method from a third-party API, consider `wrapping that method with a method` that either throws an exception or returns a special case object.

Array returns [] instead of null to minimize the chance of NullPointerExceptions.

## Don't pass null

- Avoid attribute value is null in an entity (graphql??)
- Avoid function arguments is null acceptable
- Avoid passing null to API if have to

## Conclusion

Clean code is `readable`, but it must also be `robust`. These are not conflicting goals. We can write robust clean code if we `see error handling as a separate concern`, something that is `viewable independent`ly of our main logic. To the degree that we are able to do that, we can reason about it independently, and we can make great strides in the maintainability of our code.
