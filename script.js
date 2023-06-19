async function fetchDemonSlayerData() {
  try {
    const response = await fetch(
      "https://demon-slayer-api.onrender.com/v1/Tanjiro_Kamado"
    )
    if (!response.ok) {
      throw new Error("Erro ao obter os dados do anime")
    }
    const data = await response.json()

    const newData = data[0]

    const animeInfo = document.getElementById("anime-info")

    animeInfo.innerHTML = `
          <h2>${newData.name}</h2>
          <p><strong>Age:</strong> ${newData.age}</p>
          <p><strong>Estilo de combate:</strong> ${newData["combat style"]}</p>
          <p><strong>Race:</strong> ${newData.race}</p>
          <p><strong>Hair Color:</strong> ${newData["hair color"]}</p>
          <p><strong>Eye Color:</strong> ${newData["eye color "]}</p>
          
        `
    fetchDemonSlayerCharacters()
  } catch (error) {
    console.log("Ocorreu um erro ao buscar os dados:", error)
  }
}

async function fetchDemonSlayerCharacters() {
  try {
    const response = await fetch(
      "https://demon-slayer-api.onrender.com/v1/Tanjiro_Kamado"
    )
    if (!response.ok) {
      throw new Error("Erro ao obter os dados dos personagens")
    }

    const data = await response.json()

    const charactersContainer = document.getElementById("characters")
    const techniques = [
      "Dance",
      "Clear Blue Sky",
      "Raging Sun",
      "Setting Sun Transformation",
      "Solar Heat Haze",
      "Beneficent Radiance",
      "Sunflower Thrust",
    ]

    data.forEach((character) => {
      const characterDiv = document.createElement("div")
      characterDiv.innerHTML = `
            <h3>Techniques:
        </h3>
              <ul>
            <li>${techniques[0]}</li>
              <li>${techniques[1]}</li>
                <li>${techniques[2]}</li>
                  <li>${techniques[3]}</li>
                    <li>${techniques[4]}</li>
                      <li>${techniques[5]}</li>
                      <li>${techniques[6]}</li>
            </ul>
            <img src="https://gifs.eco.br/wp-content/uploads/2022/06/gifs-de-kimetsu-no-yaiba-0.gif" alt="${character.name}">
          
          `
      charactersContainer.appendChild(characterDiv)
    })
  } catch (error) {
    console.log("Ocorreu um erro ao buscar os dados:", error)
  }
}

fetchDemonSlayerData()
