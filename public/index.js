document.addEventListener("DOMContentLoaded", async () => {

    const ingredientTextArea = document.getElementById("ingredients-text");
    const addIngredientBtn = document.getElementById("add-ingredient");

    const instructionTextArea = document.getElementById("instructions-text");
    const addInstructionBtn = document.getElementById("add-instruction");

    const submitBtn = document.getElementById("submit");

    const ingredientList = document.getElementById("list");
    try {
        const foodName = "Pizza";

        const res = await fetch(`/recipe/${foodName}`, {
            method: "GET",
            Headers: {
                "Content-Type": "application/json",
            },
        });

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
    submitBtn.addEventListener("click", async () => {


    });
});

