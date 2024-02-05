# Learn a11y

A web app for learning web accessibility.

This is meant to accompany my Introduction to Accessibility workshop on Frontend Masters but my hope is that it will stand fine on its own.

To view this course online, head over to [learn-a11y.netlify.com](https://learn-a11y.netlify.app/)!

## Installation

This is made to be as easy as possible. Just download or clone the repository and open index.html in your favorite browser!

## Exercises

All exercises should be clearly explained. Please don't hesitate to ask or open an issue if there is any confusion. Some of them are vague, like the semantic HTML section. There is no _right_ answer for these, just poke around the code and see if you can improve the experience for users with disabilities.

# Personal Notes - Post Course
- The course provides a foundational understanding of web accessibility principles.
- Emphasis on the importance of creating web content that is accessible to all users, regardless of disabilities.

### Semantic HTML
Key Concept: Use of HTML elements according to their intended purpose improves accessibility.

- Use headings (h1 to h6) to structure content logically.
- Employ nav, main, aside, section, and article tags for better document outlining.
- Implement alt text for images for screen reader users.
- ARIA (Accessible Rich Internet Applications)
- Understanding ARIA: It supplements native HTML for better accessibility where HTML falls short.
- Use ARIA roles and properties only when necessary.
- Remember the first rule of ARIA: "If you can use a native HTML element with the behavior and semantics you require already built-in, then do so."

### Keyboard Navigation
Importance: Many users rely on keyboards due to physical or technical constraints.

- Ensure tab order is logical and all interactive elements are keyboard-accessible.
- Focus styles should be clear and distinct for interactive elements.

### Screen Readers
Insight: Screen readers read aloud digital content and are essential for blind and low-vision users.

- Test websites with screen readers to understand the user experience.
- Use ARIA labels to provide additional context where necessary.

### Color and Contrast
Critical Learning: Sufficient contrast helps users with visual impairments or color blindness.

- Use contrast ratio tools to check text against background colors.
- Be mindful of color choices and test for color blindness compatibility.

### Additional Resources
Recommended to use accessibility checklists and tools like WAVE, Axe, or Lighthouse for ongoing testing.

### Personal Reflection
Accessibility is not just a technical requirement but a moral obligation to make the web inclusive.
Plan to review and update current projects (and the Platform) with the learned accessibility practices.