document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.createElement("button");
    addButton.textContent = "Add Square";
    document.body.appendChild(addButton);

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.margin = "20px";
    document.body.appendChild(container);

    let squareCount = 0;

    const colors = ["#FF5733", "#33FF6A", "#336BFF", "#FF33D1", "#F1C40F"];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createSquare() {
        const square = document.createElement("div");
        square.className = "square";
        square.id = `square${squareCount}`;
        square.textContent = squareCount;

        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "blue";
            square.style.color = "black";
        });

        square.addEventListener("mouseleave", function () {
            square.style.backgroundColor = "black";
            square.style.color = "white";
        });

        square.addEventListener("click", function () {
            const randomColor = getRandomColor();
            square.style.backgroundColor = randomColor;
            square.style.color = "black";
        });

        square.addEventListener("dblclick", function () {
            const squareId = parseInt(square.id.match(/\d+/)[0]);

            if (squareId % 2 === 0) {
                const nextSquare = square.nextElementSibling;
                if (nextSquare) {
                    container.removeChild(nextSquare);
                } else {
                    alert("There is no square after this one.");
                }
            } else {
                const prevSquare = square.previousElementSibling;
                if (prevSquare) {
                    container.removeChild(prevSquare);
                } else {
                    alert("There is no square before this one.");
                }
            }
            container.removeChild(square);
        });

        container.appendChild(square);
        squareCount++;
    }

    addButton.addEventListener("click", createSquare);

    const style = document.createElement("style");
    style.textContent = `
        .square {
            width: 100px;
            height: 100px;
            background-color: black;
            margin: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            transition: all 0.2s;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});
