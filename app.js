const express = require("express");
const cron = require("node-cron");

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World!");
})


const job = cron.schedule("* 10 * * * *",async function() {
    console.log("running a task every 10 minute");

    try {
        const res1 = await fetch("https://supamart-v-backend.onrender.com/")
        const res2 = await fetch("https://r-r-ornaments-backend.onrender.com")
        const res3 = await fetch("https://ai-project-backend-1vla.onrender.com/wake")
        const data1 = await res1.json()
        const data2 = await res2.json()
        const data3 = await res3.json()
        console.log("All APIs are running successfully",{data1,data2,data3});
    } catch (error) {
        console.log("error ",{error});
    }
    
});

job.start();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
