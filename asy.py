#!/usr/bin/python3

import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(5)
    print(dir(asyncio))

asyncio.run(say_hello())
