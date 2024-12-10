import { Counter } from "../model/Counter.js";
import { counter } from "../seed.data.js";

const seedCounter = async () => {
    try {
         await Counter.insertMany(counter);
    } catch (err) {
        console.log('error seeding to counter collection', err)
    }
}

export default seedCounter;