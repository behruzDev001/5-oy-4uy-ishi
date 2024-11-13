            function loadCards() {
            const cardsContainer = document.getElementById("cardsContainer");
            cardsContainer.innerHTML = '';
            const cards = JSON.parse(localStorage.getItem("cards")) || [];
            cards.forEach((cardText, index) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <p>${cardText}</p>
                    <button class="btn-delete" onclick="deleteCard(${index})">O'chirish</button>
                `;
                cardsContainer.appendChild(card);
            });
        }

        function createCard() {
            const cardText = document.getElementById("cardText").value;
            if (cardText.trim()) {
                let cards = JSON.parse(localStorage.getItem("cards")) || [];
                cards.push(cardText);
                localStorage.setItem("cards", JSON.stringify(cards));
                document.getElementById("cardText").value = '';
                loadCards(); 
            }
        }

        function deleteCard(index) {
            let cards = JSON.parse(localStorage.getItem("cards"));
            if (cards) {
                cards.splice(index, 1);
                localStorage.setItem("cards", JSON.stringify(cards));
                loadCards();
            }
        }

        loadCards();