const express = require("express");
// const routeparser = require("treeparser");

const server = express();

server.use(express.static("public"));

const PORT = 3000;


server.get("/", function(req, res, next) {
    console.log("Hello There");
    res.send()
});

server.get("/recipe/:food", function(req, res, next) {
    try {

        const food = req.params.food;

        console.log(`Food given: ${food}`);

        res.status(200).json({ name: `${food}`, instructions: "Just DO IT", ingredients: "What ever you have" });
    } catch (error) {
        console.error("Error produced from recipe path: ", error);
    }

});


server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});






