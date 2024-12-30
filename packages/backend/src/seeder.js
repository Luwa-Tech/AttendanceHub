import 'dotenv/config';
import mongoose from "mongoose";
import seedRoles from "./seeds/role.seed.js";
import seedStatus from "./seeds/status.seed.js";
import seedEmployees from "./seeds/employee.seed.js";
import seedCounter from "./seeds/counter.seed.js";

const seedDB = async () => {
    await mongoose.connect(process.env.DB_URL);

    try {
        await mongoose.connection.dropDatabase();
        console.log('Database dropped successfully!');

        await seedRoles();
        await seedStatus();
        await seedCounter();
        await seedEmployees();

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error dropping database:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();