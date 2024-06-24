document.addEventListener("DOMContentLoaded", () => {

    const ingredientTextArea = document.getElementById("ingredients-text");
    const addIngredientBtn = document.getElementById("add-ingredient");

    const instructionTextArea = document.getElementById("instructions-text");
    const addInstructionBtn = document.getElementById("add-instruction");

    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", async () => {
        try {
            const foodName = "Pizza";

            const res = await fetch(`/recipe/${foodName}`, {
                method: "GET",
                Headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                const data = res.json();
                console.log(data);
            }
            console.log()
        } catch (error) {
            console.error("Error produced: ", error);
        }
    });
});

