import { spawn, Thread, Worker } from "threads"

export default async function invokeMainWorker() {
    const testWorker = await spawn(new Worker(new URL('./workers/test.js', import.meta.url)));

    console.log("Hashed password:", testWorker.testCallback())

    await Thread.terminate(testWorker)
}