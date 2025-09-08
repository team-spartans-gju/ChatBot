import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";



dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 8000;


connectDB()
.then(
    app.listen(port, () => {
        console.log(`you are running on the Port. ${port}`);
    })
)
.catch((error) => {
    console.log(`error in connecting the database: ${error}`);
}
)



