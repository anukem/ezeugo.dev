---
title: writing a typing game is hard.
date: "10.27.21"
image: "images/typing.png"
---

# Writing a Typing Game is Hard.

On my way to NOLA from Boston, I spent some time thinking about what the most useful thing i could write without an internet connection would be with the 4 hours i would spend in the air. In the past, I've writen everything from sudoku solvers, to solutions to as many leet code problems i could copy before i lost internet. Today, I had the bright idea to go make a typing game similar to the one at typegun.com, but in the terminal. Without a doubt, this has proven to be one of the most painful experiences I've had writing code and in many ways, exposed how reliant I am on the internet to save me from myself when I get stumped.

To provide context, let me outline the requirements so what i was trying to achieve is clear.

1. The program should be able to accept user input.
2. The program should be executed in the terminal.
3. The program should simultaneously have a timer that counts down from some predetermined period to 0.
   a. The program should display this time above the place where the user types the input.
4. The program should display a target word that needs to be typed.
5. The program should also record the average amount of time it takes to completely type the target word.
6. When the target word is misspelled and submitted, the program should record the discrepancy and keep a percentage of words typed correctly.
7. The program should also keep tally of the total number of words presented to the user.

The first 3 requirements alone were enough to keep me preoccupied for the entirety of the plane ride.

As I saw it, there were 2 major issues, one of which I found a resolution for, but not with enough time to make traction on the second.
The first was an issue with figuring out how to have two seperate processes running at the same time. The first process was meant to be
responsible for keeping track of how much time was left to continue typing. The second process was supposed to continually accept user input
and validate that the word matched the target. Having no internet connection I had no way of googling how to handle async operations in python.

_note to self to try to figure out terminal gui's using some third party_
