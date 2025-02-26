import mongoose from "mongoose"
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Mongodb connected successfully")
        })
        connection.on('error', (err) => {
            console.log("MongoDB connection error.Please make sure mongoDB is running. " + err);
            process.exit()
        })

    } catch (error) {
        console.log("something went wrong")
        console.log(error)
    }
}