let db = [
    {
        image: "images/Hammarby.svg",
        options: [
            {
                team: "Hammarby",
                answer: 1
            },
            {
                team: "Elfsborg",
                answer: 0
            },
            {
                team: "Aik",
                answer: 0
            },
            {
                team: "BK Häcken",
                answer: 0
            }
        ]
    },
    {
        image: "images/Varbergs BoIS.svg",
        options: [
            {
                team: "Degerfors IF",
                answer: 0
            },
            {
                team: "Sirius",
                answer: 0
            },
            {
                team: "Värnamo",
                answer: 0
            },
            {
                team: "Varbergs BoIS",
                answer: 1
            }
        ]
    },
    {
        image: "images/IFK Norrköping.svg",
        options: [
            {
                team: "Bajen",
                answer: 0
            },
            {
                team: "Norrköping",
                answer: 1
            },
            {
                team: "Mjällby",
                answer: 0
            },
            {
                team: "Dif",
                answer: 0
            }
        ]
    },
    {
        image: "images/Helsingborgs IF.svg",
        options: [
            {
                team: "Sundsvall",
                answer: 0
            },
            {
                team: "Elfsborg",
                answer: 0
            },
            {
                team: "Sirius",
                answer: 0
            },
            {
                team: "Helsingborg",
                answer: 1
            }
        ]
    },
    {
        image: "images/AIK.svg",
        options: [
            {
                team: "Värnamo",
                answer: 0
            },
            {
                team: "Elfsborg",
                answer: 0
            },
            {
                team: "Aik",
                answer: 1
            },
            {
                team: "Malmö",
                answer: 0
            }
        ]
    },
    {
        image: "images/Malmö FF.svg",
        options: [
            {
                team: "Malmö",
                answer: 1
            },
            {
                team: "AIK",
                answer: 0
            },
            {
                team: "Göteborg",
                answer: 0
            },
            {
                team: "Degerfors",
                answer: 0
            }
        ]
    },
    {
        image: "images/IFK-Göteborg.svg",
        options: [
            {
                team: "Kalmar",
                answer: 0
            },
            {
                team: "Helsingborg",
                answer: 0
            },
            {
                team: "Hammarby",
                answer: 0
            },
            {
                team: "Göteborg",
                answer: 1
            }
        ]
    },
    {
        image: "images/Degerfors IF.svg",
        options: [
            {
                team: "Kalmar",
                answer: 0
            },
            {
                team: "Degerfors",
                answer: 1
            },
            {
                team: "Djurgården",
                answer: 1
            },
            {
                team: "Häcken",
                answer: 0
            }
        ]
    },
    {
        image: "images/IK Sirius.svg",
        options: [
            {
                team: "Sirius",
                answer: 1
            },
            {
                team: "Varberg",
                answer: 0
            },
            {
                team: "Värnamo",
                answer: 0
            },
            {
                team: "Malmö",
                answer: 0
            }
        ]
    },
    {
        image: "images/IFK Värnamo.svg",
        options: [
            {
                team: "Djurgården",
                answer: 0
            },
            {
                team: "Kalmar",
                answer: 0
            },
            {
                team: "Värnamo",
                answer: 1
            },
            {
                team: "Göteborg",
                answer: 0
            }
        ]
    },
    {
        image: "images/Kalmar FF.svg",
        options: [
            {
                team: "Hammarby",
                answer: 0
            },
            {
                team: "Kalmar",
                answer: 1
            },
            {
                team: "Sirius",
                answer: 0
            },
            {
                team: "AIK",
                answer: 0
            }
        ]
    },
    {
        image: "images/BK_Häcken_logo.svg",
        options: [
            {
                team: "Värnamo",
                answer: 0
            },
            {
                team: "Häcken",
                answer: 1
            },
            {
                team: "Sundsvall",
                answer: 0
            },
            {
                team: "Mjällby",
                answer: 0
            }
        ]
    },
    {
        image: "images/Mjällby.svg",
        options: [
            {
                team: "AIK",
                answer: 0
            },
            {
                team: "Häcken",
                answer: 0
            },
            {
                team: "Sundsvall",
                answer: 0
            },
            {
                team: "Mjällby",
                answer: 1
            }
        ]
    },
    {
        image: "images/IF Elfsborg.svg",
        options: [
            {
                team: "Degerfors",
                answer: 0
            },
            {
                team: "Varberg",
                answer: 0
            },
            {
                team: "Elfsborg",
                answer: 1
            },
            {
                team: "Malmö",
                answer: 0
            }
        ]
    },
    {
        image: "images/GIF Sundsvall.svg",
        options: [
            {
                team: "Sirius",
                answer: 0
            },
            {
                team: "Göteborg",
                answer: 0
            },
            {
                team: "Norrköping",
                answer: 0
            },
            {
                team: "Sundsvall",
                answer: 1
            }
        ]
    },
    {
        image: "images/Djurgården.svg",
        options: [
            {
                team: "Djurgården",
                answer: 1
            },
            {
                team: "Häcken",
                answer: 0
            },
            {
                team: "Helsingborg",
                answer: 0
            },
            {
                team: "Kalmar",
                answer: 0
            }
        ]
    }
];

let counter = 0;
let index = 0;

function question() {
    let item = db[index];
    document.querySelector(".container").innerHTML = `
        <div class="question-frame">
            <div class="question">
                <img class="logga" src="${item.image}">
            </div>
            <div class="answers">
                <label>
                    <input type="radio" value="${item.options[0].answer}" name="option">${item.options[0].team}
                </label>
                <label>
                    <input type="radio" value="${item.options[1].answer}" name="option">${item.options[1].team}
                </label>
                <label>
                    <input type="radio" value="${item.options[2].answer}" name="option">${item.options[2].team}
                </label>
                <label>
                    <input type="radio" value="${item.options[3].answer}" name="option">${item.options[3].team}
                </label>
            </div>
        </div>
    `;
}
question();


document.querySelector(".next-btn").addEventListener("click", function() {
    let value = document.querySelector('input[name="option"]:checked').value;
    if (value == 1) {
        alert("Right answer");
        counter++
    } else {
        alert("Wrong answer");
        counter--
    }
    document.querySelector(".counter").innerText = counter;

    if (index == db.length - 1){
        document.querySelector(".counter").innerText = "Du vann";
        return
    }
    
    index++;
    question();
})