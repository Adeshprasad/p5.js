Flower Garden 🌸
An interactive p5.js sketch where you can grow beautiful flowers by watering them with your mouse!
Description
This project creates a charming garden simulation where three flowers can be grown interactively. Move your mouse cursor (which displays as a watering can) over the flowers and hold down the mouse button to watch them grow taller and larger. The flowers will reset to their original size when they reach maximum growth.
Features

Interactive Watering: Use your mouse as a watering can to nurture the flowers
Realistic Growth: Flowers grow both in size and height when watered
Auto Reset: Flowers automatically return to seedling size when fully grown
Visual Stems: Brown stems that extend as flowers grow taller
Three Flower Varieties: Different flower types for visual variety

How to Play

Move your mouse cursor around the canvas - it will appear as a watering can
Click and hold the mouse button to start watering the flowers
Watch as the flowers grow taller and larger while you water them
Release the mouse button to stop watering
When flowers reach maximum size, they'll automatically reset to start the cycle again

Technical Details
Canvas Size

600 x 600 pixels

Assets Required
The following image files must be placed in an images/ folder:

 - flower-1.png - First flower variety
 - flower-2.png - Second flower variety
 - flower-3.png - Third flower variety
 - Watercan.gif - Animated watering can cursor

Key Variables

flowerY: Y-coordinate controlling flower height (starts at 450)
flowerSize: Size of flowers (starts at 20, grows to 100)
mouseX/mouseY: Controls watering can position