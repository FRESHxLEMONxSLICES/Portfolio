const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');

// Predefined colors for the palette
const colors = ['#0c0e1f', '#1e90ff', '#2ed573', '#ffa502', '#ff6b81', '#70a1ff'];

addNoteButton.addEventListener('click', () => {
  const noteText = noteInput.value.trim();

  if (noteText) {
    createNote(noteText);
    noteInput.value = ''; // Clear input after adding the note
  }
});

function createNote(text) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.textContent = text;

  // Set random position within the container
  note.style.left = `${Math.random() * (notesContainer.offsetWidth - 200)}px`;
  note.style.top = `${Math.random() * (notesContainer.offsetHeight - 100)}px`;

  // Create the color palette element
  const colorPalette = document.createElement('div');
  colorPalette.classList.add('color-palette');

  // Add color options to the palette
  colors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener('click', () => {
      note.style.backgroundColor = color; // Change the note's background color
      note.style.color = "white" ; // Change the note's text color - white
      colorPalette.style.display = 'none'; // Hide the palette after color selection
    });
    colorPalette.appendChild(colorOption);
  });

  note.appendChild(colorPalette);

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    note.remove();
  });

  note.appendChild(deleteButton);
  notesContainer.appendChild(note);

  // Make the note draggable
  makeNoteDraggable(note);

  // Show color palette and delete button on click
  note.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    const isVisible = colorPalette.style.display === 'block';
    colorPalette.style.display = isVisible ? 'none' : 'block';
    deleteButton.style.display = isVisible ? 'none' : 'block';
  });

  // Hide the palette and delete button when clicking outside the note
  document.addEventListener('click', () => {
    colorPalette.style.display = 'none';
    deleteButton.style.display = 'none';
  });
}

// Function to make a note draggable
function makeNoteDraggable(note) {
  let offsetX, offsetY;
  let isDragging = false;

  note.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - note.offsetLeft;
    offsetY = e.clientY - note.offsetTop;
    note.classList.add('active');
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const xPos = e.clientX - offsetX;
      const yPos = e.clientY - offsetY;

      // Prevent the note from going outside the container
      const maxX = notesContainer.offsetWidth - note.offsetWidth;
      const maxY = notesContainer.offsetHeight - note.offsetHeight;

      note.style.left = `${Math.max(0, Math.min(xPos, maxX))}px`;
      note.style.top = `${Math.max(0, Math.min(yPos, maxY))}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    note.classList.remove('active');
  });
}
