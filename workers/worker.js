import { expose } from "threads/worker"

expose({
    callback() {
        return 'testWorkerCalled';
    }
})