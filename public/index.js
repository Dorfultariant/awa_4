
// Lists for storing temp data:
let listOfInstructions = [];
let listOfIngredients = [];


document.addEventListener("DOMContentLoaded", async () => {

    // Populate index.html with default stuff
    sendData("get", "Pizza");

    const recName = document.getElementById("name-text");

    const ingredientTextArea = document.getElementById("ingredients-text");
    const addIngredientBtn = document.getElementById("add-ingredient");

    const instructionTextArea = document.getElementById("instructions-text");
    const addInstructionBtn = document.getElementById("add-instruction");

    const submitBtn = document.getElementById("submit");


    // Add ingredients to a list
    addIngredientBtn.addEventListener("click", async () => {
        listOfIngredients.push(ingredientTextArea.value);
    });

    // Add instructions to a list
    addInstructionBtn.addEventListener("click", async () => {
        listOfInstructions.push(instructionTextArea.value);
    });

    // When recipe is submitted, send to server
    submitBtn.addEventListener("click", async () => {
        sendData("post", recName.value);
        listOfIngredients = [];
        listOfInstructions = [];
    });

});

async function sendData(method, foodName) {
    try {
        let res;
        const ingredientList = document.getElementById("list");
        if (method === "get") {
            res = await fetch(`/recipe/${foodName}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

        } else if (method === "post") {
            const resBody = JSON.stringify({
                name: foodName,
                instructions: listOfInstructions,
                ingredients: listOfIngredients
            });

            res = await fetch(`/recipe/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: resBody,
            });
        }

        // Data is added to the frontend from response json
        if (res.ok) {
            const data = await res.json();
            console.log(data);

            const recName = document.createElement("h2");
            const instrcution = document.createElement("p");
            const ingredients = document.createElement("p");

            recName.textContent = data.name;
            instrcution.textContent = data.instructions;
            ingredients.textContent = data.ingredients;

            ingredientList.appendChild(recName);
            ingredientList.appendChild(instrcution);
            ingredientList.appendChild(ingredients);
        }

    } catch (error) {
        console.error("Error produced: ", error);
    }
}
