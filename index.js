import { spawn, Thread, Worker } from "threads"

export default async function invokeMainWorker() {
    const testWorker = await spawn(new Worker("./workers/test.js"))

    console.log("Hashed password:", testWorker.testCallback())

    await Thread.terminate(testWorker)
}