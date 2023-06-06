import { spawn, Thread, Worker } from "threads"

export async function invokeMainWorker() {
    const testWorker = await spawn(new Worker('./workers/worker.js'));

    console.log('result:', await testWorker.callback());

    await Thread.terminate(testWorker);
}