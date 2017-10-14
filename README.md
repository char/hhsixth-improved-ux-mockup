# hhsixth-ux-mockup

A mockup of potential UX for the HHSixth login system.

## Enhancements

* Loading between all four possible statuses (idle, invalid, signed in, and signed out) is instant, without a page reload.
* Background images fade between each other, instead of sharply randomizing on each page load.
* Serials can be entered in states other than idle, allowing for faster consecutive sign ins/outs. This reduces the time spent waiting for the page to reset.

## Motivations

The presently-existing interface for HHSixth has two main issues:

* Too much time is spent waiting for the interface to 'reset' to scan another card.
* If scanned at the wrong time, a card's serial can be entered incorrectly into the interface.

This project aims to fix these two issues by creating an app in React to serve as a mockup for a more streamlined UX.

## Solutions

This mockup employs a number of solutions to fix the issues in the currently-existing system.

* Use a [Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app) to eliminate redirects, reducing time spent waiting for a new page to be fetched and rendered.
* Allow serial input at any time, not just on the 'idle' page. This allows cards to be scanned without waiting for the confirmation message to redirect back to the 'idle' page.
* Change the confirmation message from a full page to a pop-up notification. (This is a stylistic choice, indicating to users that actions can still be performed irrespective of the confirmation state.)

## Mockup

As this is a mockup site, the sign in/out feature is not functional, and is merely a non-persistent JS table.

### Serials:

`0000000000`: Always return 'invalid'
`0000000001`: Student 'Firstname Lastname (Student)'
`0000000002`: Student 'Other Student (Student)'

Anything else should also return invalid.

## Implementing

The core place to change when implementing is `src/api/serial_api_handler.js` - The request() function will need to be changed to access a proper URL.

request() expects a JSON output:

```json
{
    "status": "invalid"
}
```

```json
{
    "status": "signed_in",
    "name": "Test Student (STUDENT)"
}
```

```json
{
    "status": "signed_out",
    "name": "Test Student (STUDENT)"
}
```
