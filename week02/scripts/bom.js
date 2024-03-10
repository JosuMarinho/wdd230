// Declare variables holding references to elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create click event listener for the Add Chapter button
button.addEventListener('click', () => {
  // Check if the input is not blank
  if (input.value.trim() !== '') {
    // Create li element
    const li = document.createElement('li');
    
    // Create delete button
    const deleteButton = document.createElement('button');
    
    // Populate li element's textContent with input value
    li.textContent = input.value.trim();
    
    // Populate delete button's textContent with ❌
    deleteButton.textContent = '❌';
    
    // Append li element with the delete button
    li.append(deleteButton);
    
    // Append li element to the unordered list in HTML
    list.append(li);
    
    // Add event listener to the delete button for removing the li element
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });
    
    // Send focus to the input element
    input.focus();
    
    // Change the input value to an empty string
    input.value = '';
  } else {
    // Provide a message or do nothing if the input is blank
    alert('Please enter a chapter before adding.');
    input.focus();
  }
});