<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JavaScript Homework 8 — Events & Libraries</title>
</head>
<body>

  <h1>📘 JavaScript Homework 8 — Events & Libraries</h1>

  <p>
    This repository contains a complete step-by-step solution for Homework 8.
    The project is designed as a full guide that demonstrates critical concepts
    from JavaScript Module 8, including <strong>event delegation</strong>,
    <strong>DOM manipulation</strong>, and <strong>working with external libraries</strong>.
  </p>

  <h2>🚀 Overview</h2>

  <p>
    Two-thirds of the JavaScript course are now complete — great progress! 💪
    In this homework, the goal is to apply both theoretical knowledge and
    practical skills by building a fully functional image gallery with a modal window.
  </p>

  <p>This homework reinforces your understanding of:</p>
  <ul>
    <li>The event lifecycle and event termination</li>
    <li>Event delegation patterns</li>
    <li>Dynamic DOM creation and manipulation</li>
    <li>Connecting and using third-party libraries via CDN</li>
    <li>Object and array destructuring</li>
    <li>Optimized event handling and keyboard interactions</li>
  </ul>

  <h2>📂 Project Structure</h2>

  <ul>
    <li><strong>index.html</strong> — Application skeleton and library connections</li>
    <li><strong>gallery.js</strong> — Gallery logic, event handling, and modal control</li>
    <li><strong>styles.css</strong> — Layout and visual styling</li>
  </ul>

  <hr />

  <h2>🧩 Step-by-Step Implementation Guide</h2>

  <p>
    The project was built from scratch following modern web development standards.
    Below is a detailed explanation of what each file does and why certain decisions
    were made.
  </p>

  <h3>1️⃣ HTML Structure (<code>index.html</code>)</h3>

  <p>
    This file acts as the backbone of the project. It defines where the gallery
    will appear and connects all required external resources.
  </p>

  <p><strong>Key decisions:</strong></p>
  <ul>
    <li>
      An empty <code>&lt;ul class="gallery"&gt;</code> element is used as a placeholder
      for dynamically generated content.
    </li>
    <li>
      The <strong>basicLightbox</strong> library is connected via CDN to avoid building
      a modal system from scratch.
    </li>
    <li>
      Scripts are loaded at the bottom of the body to ensure the DOM is ready.
    </li>
  </ul>

  <h3>2️⃣ Visual Design (<code>styles.css</code>)</h3>

  <p>
    CSS is used to center the gallery on the page and present images in a clean,
    modern grid layout.
  </p>

  <p><strong>Styling highlights:</strong></p>
  <ul>
    <li>
      <code>display: grid</code> creates a 3-column gallery layout.
    </li>
    <li>
      <code>object-fit: cover</code> ensures all images maintain consistent proportions.
    </li>
    <li>
      Hover effects provide visual feedback and improve user experience.
    </li>
    <li>
      Flexbox is used on the <code>body</code> element to center the gallery vertically
      and horizontally.
    </li>
  </ul>

  <h3>3️⃣ JavaScript Logic (<code>gallery.js</code>)</h3>

  <p>
    This file contains the core logic of the application. It handles data,
    generates markup, and manages user interactions.
  </p>

  <h4>📌 Dynamic Gallery Creation</h4>
  <p>
    The gallery is generated from an array of image objects. Each object contains
    preview, original, and description properties.
  </p>

  <ul>
    <li>
      <strong>map() + join()</strong> are used to efficiently generate HTML markup.
    </li>
    <li>
      All gallery items are injected into the DOM in a single operation.
    </li>
  </ul>

  <h4>📌 Event Delegation</h4>
  <p>
    Instead of attaching individual click handlers to each image, a single
    event listener is attached to the gallery container.
  </p>

  <ul>
    <li>
      Improves performance by reducing the number of event listeners.
    </li>
    <li>
      Ensures scalability if more images are added later.
    </li>
    <li>
      Clicks are filtered to respond only when an image is clicked.
    </li>
  </ul>

  <h4>📌 Modal Window & Keyboard Control</h4>
  <p>
    When an image is clicked, a modal window opens using basicLightbox.
  </p>

  <ul>
    <li>
      The full-size image URL is stored in a <code>data-source</code> attribute.
    </li>
    <li>
      The modal listens for the <strong>Escape</strong> key only while it is open.
    </li>
    <li>
      Keyboard listeners are removed immediately after the modal is closed,
      preventing unnecessary background processing.
    </li>
  </ul>

  <hr />

  <h2>✅ Mentor Checklist</h2>

  <ul>
    <li>Gallery is generated dynamically from JavaScript data</li>
    <li>Layout matches the provided design</li>
    <li>Event delegation is correctly implemented</li>
    <li>basicLightbox library is connected via CDN</li>
    <li>Modal opens with the correct full-size image</li>
    <li>Modal closes when the Escape key is pressed</li>
    <li>No console errors or warnings</li>
  </ul>

  <h2>📌 Final Notes</h2>

  <p>
    As a result, this project demonstrates a clean, optimized, and modern
    approach to building interactive web interfaces using JavaScript.
    It combines theory and practice into a single, maintainable solution.
  </p>

  <h2>🔗 Links</h2>

  <ul>
    <li>GitHub Repository: <em>[add link here](https://github.com/kutluhangil/goit-js-hw-08)</em></li>
    <li>Live Demo (GitHub Pages): <em>kutluhangil.github.io/goit-js-hw-08/</em></li>
  </ul>

</body>
</html>
