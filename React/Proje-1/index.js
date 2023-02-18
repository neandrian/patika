import { getData } from "./app.js";

await getData(1).then((data) => console.log(data));
