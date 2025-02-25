class AIPersonalitySelector {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedCharacter = null;
    this.personalities = [
      {
        id: 1,
        name: "Generically You - Just a regular ol' AI",
        description: "A serious, analytical personality who presents news with depth and context. Perfect for those who want their news straight and informative.",
        traits: ["Analytical", "Formal", "Detailed"],
        imagePath: "images/generically.jpeg"
      },
      {
        id: 2,
        name: "Captain Annarky - Pirate Queen of the Seven Seas",
        description: "A blunt, in your face pirate AI. Annarky dives beneath the surface of headlines to find hidden connections and implications.",
        traits: ["Mysterious", "Insightful", "Alternative"],
        imagePath: "images/annarky.jpeg" 
      },
      {
        id: 3,
        name: "M1lkt3a - Pure fairyland chaos",
        description: "Energetic and upbeat, M1lkt3a brings a playful tone to your news feed. Perfect for those who want their news with a dose of chaos.",
        traits: ["Playful", "Energetic", "Optimistic"],
        imagePath: "images/m1lkt3a.jpeg"
      }
    ];
    
    this.render();
    this.addEventListeners();
  }
  
  render() {
    let html = `
      <h2 class="personality-title">Choose Your News Guide</h2>
      <p class="personality-subtitle">
        Select an AI personality to curate and present your news feed in a style that matches your mood
      </p>
      
      <div class="character-grid">
    `;
    
    this.personalities.forEach(character => {
      html += `
        <div class="character-card" data-id="${character.id}">
          <div class="character-image-container">
            <img src="${character.imagePath}" alt="${character.name}" class="character-image">
            <div class="character-name-overlay">
              <h3>${character.name}</h3>
            </div>
          </div>
          
          <div class="character-details">
            <p class="character-description">${character.description}</p>
            
            <div class="character-traits">
              ${character.traits.map(trait => `<span class="character-trait">${trait}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });
    
    html += `
      </div>
      <div id="selection-message" class="selection-message hidden">
        <h3>Ready to read the news with <span id="selected-name"></span>?</h3>
        <p>Get personalized news delivery with your chosen AI personality guiding you through today's headlines.</p>
        <button class="start-reading-button">Start Reading</button>
      </div>
      
      <div class="more-features">
        <h3>More Than Just News</h3>
        <p>
          What the Fluff!? News! doesn't just read headlines - chat with your AI personality about stories,
          ask questions, or simply have a conversation about the topics that matter to you.
        </p>
      </div>
    `;
    
    this.container.innerHTML = html;
  }
  
  addEventListeners() {
    const characterCards = this.container.querySelectorAll('.character-card');
    const selectionMessage = this.container.querySelector('#selection-message');
    const selectedName = this.container.querySelector('#selected-name');
    
    characterCards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove selected class from all cards
        characterCards.forEach(c => c.classList.remove('selected'));
        
        // Add selected class to clicked card
        card.classList.add('selected');
        
        // Get the character id and update the selection message
        const characterId = parseInt(card.dataset.id);
        this.selectedCharacter = this.personalities.find(c => c.id === characterId);
        
        selectedName.textContent = this.selectedCharacter.name;
        selectionMessage.classList.remove('hidden');
      });
    });
  }
}

// Initialize the component when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AIPersonalitySelector('ai-personalities-container');
});