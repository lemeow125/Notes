---
title: Boilerplate Is Free Now. What Are We Actually Measuring?
slug: /boilerplate-is-free-now-what-are-we-actually-measuring
---
I used to take pride in how fast I could wire up a service from scratch. Schemas, retries, time zone math, tests — I wore the hours like proof that I cared.

Then the tools changed, and it felt like a rug pull. The first time a model spat out in twenty minutes what used to take me two days, I had to ask what I was actually bringing to the room.

It didn't kill the work. It just stripped away the hiding places.

You can't hide behind volume anymore when anyone can generate three thousand lines before lunch. What's left is the part that hurts when you get it wrong:

- **The traps fluent output hides.** A model writes with the same calm confidence whether the parameter exists or not. Give it too much context and it hallucinates; give it too little and it misses the edge case that wakes you up at 3 AM.
- **The restraint.** Adding layers and endpoints is free now. Knowing what _not_ to build—and narrowing the blast radius before a prompt ever runs—takes scar tissue a model doesn't have.
- **The last mile.** Generating code or docs at machine speed is trivial. Reading every line with suspicion, verifying it against the diff, and standing behind what ships is still heavy.

I still catch myself measuring my days by how much code moved. Old habits die hard.

If the boilerplate is free, stop scoping for the typing. Measure the judgment instead.