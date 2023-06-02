import { expose } from "threads/worker"

expose({
    testCallback() {
        return 'testWorkerCalled';
    }
})