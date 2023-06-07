import { spawn, Thread, Worker } from "threads"

export async function invokeMainWorker() {
    const testWorker = await spawn(new Worker(new URL("./workers/worker.js", import.meta.url)));

    console.log('result:', await testWorker.callback());

    await Thread.terminate(testWorker);
}