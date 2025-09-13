---
status: draft
title: Jadis - A Redis Implementation
category: library
tecnologies:
  - java
btns:
  - { t: "View on Github", href: "https://github.com/Oudwins/tailwind-merge-go" }
asset:
  type: image
  img: redis.svg
---
A reimplementation of the Redis in-memory database using Java. This was created purely for fun as a good way to get a better understanding of this brilliant database.

Unlike many Redis reimplementations Jadis does not use threads to handle concurrent requests. Just like Redis, Jadis is single-threaded. It takes advantage of an event loop (implemented through the Java NIO package) to handle concurrent requests without the possibility of race conditions.

One of the most interesting parts of this project is the implementation of the Redis Serialization protocol which can be found in the Protocol file.
