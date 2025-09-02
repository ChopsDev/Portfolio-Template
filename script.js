// Portfolio Template - Two Panel Layout
// This script handles the panel expansion/collapse functionality and collapsible content

const htmlBody = document.querySelector("body")
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const leftHeading = leftPanel.querySelector('h1');
const rightHeading = rightPanel.querySelector('h1');
const leftContent = leftPanel.querySelector('.panel-content');
const rightContent = rightPanel.querySelector('.panel-content')
const middle = document.querySelector('.middle');

const HIDE_TEXT = "HIDE"

// Function to close all panels and reset to initial state
function closeAll() {
  toggleScroll(false);

  leftPanel.classList.remove('expanded', 'expanding');
  rightPanel.classList.remove('expanded', 'expanding');
  leftHeading.classList.remove('slide-left');
  rightHeading.classList.remove('slide-right');
  leftContent.classList.remove('visible');
  rightContent.classList.remove('visible');
  middle.classList.remove('shrink');

  // Reset panel headings to original text
  rightHeading.textContent = "RIGHT PANEL"
  leftHeading.textContent = "LEFT PANEL"
}

// Expand the left panel and shrink the middle
function expandLeft() {
  closeAll();
  toggleScroll(true);
  leftHeading.classList.add('slide-left');
  leftPanel.classList.add('expanding', 'expanded');
  middle.classList.add('shrink');

  rightHeading.textContent = HIDE_TEXT
  leftContent.classList.add('visible');
}

// Expand the right panel and shrink the middle
function expandRight() {
  closeAll();
  toggleScroll(true);
  rightHeading.classList.add('slide-right');
  rightPanel.classList.add('expanding', 'expanded');
  middle.classList.add('shrink');

  leftHeading.textContent = HIDE_TEXT
  rightContent.classList.add('visible');
}

// Toggle scrolling on the body element
function toggleScroll(toggle){
    if (toggle){
        htmlBody.classList.remove("no-scroll");
        htmlBody.classList.add("allow-scroll");
    }else {
        htmlBody.classList.remove("allow-scroll");
        htmlBody.classList.add("no-scroll");
    }
}

// Event listener for left panel clicks
leftPanel.addEventListener('click', () => {
  if (rightPanel.classList.contains('expanded')) {
    closeAll();
  } else if (!leftPanel.classList.contains('expanded')) {
    expandLeft();
  }
});

// Event listener for right panel clicks
rightPanel.addEventListener('click', () => {
  if (leftPanel.classList.contains('expanded')) {
    closeAll();
  } else if (!rightPanel.classList.contains('expanded')) {
    expandRight();
  }
});

// Collapsible content functionality
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    while (content) {
      if (content.nodeName === "DIV" && content.classList.contains("content")) {
        content.classList.toggle("show");
        break; // Only toggle the first content div found
      }
      content = content.nextElementSibling;
    }
  });
}

// Dropdown functionality for section headers
var dropdownHeaders = document.getElementsByClassName("dropdown-header");

// Initialize all dropdowns as open by default
for (i = 0; i < dropdownHeaders.length; i++) {
  var targetId = dropdownHeaders[i].getAttribute("data-target");
  var dropdownContent = document.getElementById(targetId);
  if (dropdownContent) {
    dropdownContent.classList.add("show");
    dropdownHeaders[i].classList.add("active");
  }
}

// Add click event listeners to dropdown headers
for (i = 0; i < dropdownHeaders.length; i++) {
  dropdownHeaders[i].addEventListener("click", function(e) {
    // Prevent event bubbling to panel click handlers
    e.stopPropagation();
    
    // Remove focus to prevent outline
    this.blur();
    
    this.classList.toggle("active");
    
    var targetId = this.getAttribute("data-target");
    var dropdownContent = document.getElementById(targetId);
    
    if (dropdownContent) {
      dropdownContent.classList.toggle("show");
    }
  });
}

