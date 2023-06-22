const express = require("express");
const PORT = 8000;

const app = express();

app.use(express.json());

const hall_booking_routes = require("./routes/hall_booking_routes");
app.use("/api", hall_booking_routes);
app.listen(process.env.PORT || PORT, () => {
  console.log("Server is listening to", PORT);
});