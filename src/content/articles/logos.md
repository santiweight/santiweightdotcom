
# What's Next for Software Development?

For me, the answer is Product Development: the abstraction of software into product-level thinking. Whereas as we used to have Product Managers designing products that SWEs would implement, we now have Product Engineers or FDEs.

It used to be that:
 - Product Managers used Figma to design products
 - Software Engineers used traditional IDEs + programming languages to implement products' software

 So the old stack was:
  - Figma + [INSERT] -> IDE-PL combo for UI design
  - VS Code + Python/TS -> IDE-PL combo for software implementation

Now the question is: what is the IDE-PL combo for the product engineer?

Some attempted answers are:
 1. Replit + TS
 2. Lovable + TS
 3. Cursor + Python/TS
 4. Zed + Python/TS

Notice: they all just built layers on top of the old stuff!

## What does a Product Engineer want?

PL design is a tale of abstraction, where abstraction lets you stop thinking about details:
 1. C's heap + pointer model let you not think registers
 2. Python's garbage collector let you not think about managing memory and pointers
 3. Rust's ownership model let you not think about memory safety

As a Product Engineer, *I don't want to think about*:
 1. git and code diffs/merges
 2. code and how behavior was implemented
 3. product/codebase stability

 *I do want to think about*:
  2. Product behavior: any change to the product's behavior has to go through me first
   - Change in UI design
   - Change in a user story
   - Change in performance
  1. Architecture: architecture is a product-level concern that I need full control over
  3. Review and QA: I need to be able to review and QA product changes as they come in, and I need to be able to automate the process of capturing tests and running them
  4. Security: I need to have confidence in the security of the product at a glance, without using agents to review the code

Today's software products are fundamentally *terrible* at the above, because they focus on the old *software engineer* paradigm, instead of building a better product for a *product engineer*.

## What IDE does a Product Engineer want?

As a product engineer, I want my IDE to focus on:
 - reviewing architecture-level changes
 - reviewing product-level behavior
 - enabling easy QA and automated testing of user stories

To that end, a product engineer's IDE should look like:
 1. on the left *workspaces*, where I am working on product features/changes in parallel
 2. on the right, a combination of:
   a. the *product* itself - think Browser windows, CLIs
   b. the *architecture* (not the code) - think UML, architecture diagrams, function signatures
   c. *behaviors + tests* - think Playwright, Storybook, tests
   d. the ability to review all of the above as the product changes

 # Building [NAME], Powerpoint for Product Engineers

 In order to build the right stack here, you'll need:
  1. a better PL, targeted for Product Engineering
  2. a better IDE, targeted for Product Engineering workflows

My answer to #1 is Logos, an architecture-level programming language.

My answer to #2 is the IDE on top (name TBD), which I've built but turns out to be the harder part!

# Logos: a Programming Language that abstracts Code

Programming is, fundamentally about taking an intent (normally human generated), and producing instructions for a computer to execute said intent (normally repeatedly).

LLMs and agents have recently enabled humans to specify intent in natural language: human writes intent, LLM/agent build the computer instructions.

Before LLMs: intent -> software engineer -> code -> computer
After LLMs: intent -> human that can type -> LLM/agent -> instructions for computer

The issue is that the translation from intent to agent *is actually a tragically difficult problem*. There are a couple reasons:
 1. text is a very low bandwidth communication medium
 2. humans have a lot more context than they can sanely provide in a chat prompt
 3. LLMs and agents fail to make effective changes past ~50k lines of code

All of these are fundamental limitations: *they are about communication between humans and agents, not about agent ability*.

## Intent Encoding is the Hard Part

How many times have you:
 1. told the agent thing X, and it does it
 2. told another agent Y, and it forgot about X, and you suffered

How many times have you:
 1. told the agent thing X, and checked X
 2. realized, a day later that another agent changed X to X', and now you have to untangle X' back to X

 The reason is because agents are fundamentally *imperative* machines that make you write code of old *faster*.

 The right type of agent would be one that builds a *model of your intent*, and *translates that model into instructions* for the computer.

 So the new model is:

Before LLMs: intent -> software engineer -> code -> computer
After LLMs: intent -> human that can type -> LLM/agent -> instructions for computer
After Logos: intent -> human + agent -> encoded intent -> Logos agent -> instructions for computer

## Logos Features

1. natural language code
2. skills and context as a language primitive
3. knowledge and intent as a primitive
4. native support for videos and images
