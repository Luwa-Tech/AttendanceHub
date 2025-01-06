import { status } from "../seed.data.js";
import Status from "../model/Status.js";

const seedStatus = async () => {
    try {
        await Status.insertMany(status);
    } catch (err) {
        console.log('Error seeding to status collection', err)
    }
}

export default seedStatus;