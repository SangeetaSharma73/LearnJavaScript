# Events

### Events handlers

Event handlers allow you to react when certain things (an event) happen to the page on an element on the page.

There are many different types of events that can occur. For example:

- The user selects a certain element or hovers the cursor over a certain element.
- The user chooses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or finishes.
- An error occurs.

A comprehensive list of events can be found here: https://developer.mozilla.org/en-US/docs/Web/Events

When we clicked on the child, technically we also clicked on parent and grandparent as the child is inside them. This process of event handling, going from the child out to its ancestors is called event bubbling.

As a third argument of the event listener, we can pass {capture: true}, which will make the outer ancestors handle the event before the actual child on which the event was performed.

We can stop prevent further bubbling or capturing of events using e.stopPropagation()

As a third argument of the event listener, we can pass {once: true}, to immediately remove the listener after the first event.

.removeEventListener() can be used to remove a listener form an event.

difference between e.stopPropagation() and e.preventDefault()
