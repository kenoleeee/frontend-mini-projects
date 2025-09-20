# Flipping Card UI Animation

This is a mini project that demonstrates a modern, interactive flipping card UI using HTML and CSS. The card features a front and back face, and flips on hover to reveal the back side, mimicking a real credit card.

## Demo


![Card Demo](/images/demo.png)


## Features
- **3D Card Flip Animation**: Hover over the card to see a smooth 3D flip effect.
- **Front and Back Design**: The front shows card details (logo, chip, number, name, expiry), while the back shows a magnetic strip, signature, and info.
- **Responsive & Stylish**: Uses modern CSS (flexbox, gradients, blur, Google Fonts) for a clean, responsive look.
- **Image Assets**: Includes a card logo and chip image for realism.

## How It Works
- The card is built with two main divs: `.front-face` and `.back-face`.
- CSS `transform: rotateY(180deg)` and `backface-visibility` are used for the flip effect.
- The `.container` div is the 3D parent; hovering it triggers the flip.
- All styling and animation are handled in `style.css`.

## Getting Started
1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Hover over the card to see the animation.

## File Structure
- `index.html` — Main HTML structure for the card.
- `style.css` — All styles and animation logic.
- `images/` — Contains `logo.png` (Mastercard logo) and `chip.png` (card chip image).

## Credits
This project was created by following the tutorial:
[Flipping Card UI Design | HTML & CSS](https://www.youtube.com/watch?v=20Qb7pNMv-4&t=1s)

> All design and animation ideas belong to the original video creator. This repo is for educational/demo purposes only.
