Sunset Animation

This is a simple p5.js sketch that creates an animated sunset scene with a moving sun and a dynamic background.

Description

The sketch displays a sun moving downward over a mountainous landscape. As the sun descends, the background color transitions to a reddish hue, simulating a sunset effect. The scene includes:





A circular sun with a fixed orange color.



Four brown triangular mountains.



A background that changes from black to a red-green mix as the sun moves.

How It Works





Canvas: 600x400 pixels.



Sun: Starts at sunHeight = 600 and moves upward at 2 pixels per frame until it reaches sunHeight = 100.



Background: Initially black (redvalue = 0, greenvalue = 0). When sunHeight is below 400, redvalue increases by 5 and greenvalue by 1 per frame, creating a reddish sunset effect.



Mountains: Drawn as triangles with brown fill colors, one with a slightly darker shade for depth.