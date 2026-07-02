# A New Wave of IDEs + Coding Languages is Imminent

I believe the following are true; and together they leave a large gap in the IDE + Programming Languages (PLs) space/market:
 1. PLs are a mostly-unexplored bottleneck in the software development stack, and there's an opportunity for far better PLs and DSLs in individual domains, supplanting today's generalist PLs.
 2. Due to the rise of LLMs and agents, novel PLs are becoming easier to develop, distribute and adopt. Therefore, we will see a proliferation of new languages.
 3. There is an opportunity for PL-specific IDEs to dominate any-language IDEs (e.g. VS Code, Cursor), because targeted IDEs (e.g. IntelliJ, Figma, Powerpoint) have better UXs than generic IDEs that keep users around.

As a result, I think that the IDE + PL market is going to start focusing on niche products with heavily-tailored workflows, made possible by building better programming languages.

In this article, I discuss the factors at play, which products have won historically, and some product ideas on what the future might hold.

# What is a Programming Language? What is an IDE?

My definition of a Programming Language is the communication medium between producers of text (humans or agents), and consumers of those text strings: computers.

An IDE is the interface by which *humans* write PLs. It's the thing humans type into and click on.

Some notable example combos include:
 1. Cursor + <insert PL>: you use cursor to write most PLs
 2. Powerpoint + `.pptx`: you use Powerpoint to manipulate underlying `.pptx`
 3. IntelliJ + `.java`: basically like Cursor, but for Java

# 1. PLs Remain Unnoticed

At its core, software development is approximately the following stack:

  Human -> IDE -> Agent -> LLM -> PL -> Computer

Today, money is being funneled into LLMs and increasingly towards agents, and for good reason. But the models we are training (and the agents we are teaching) are building mostly on old languages built for humans decades ago. They were also developed before we learned how to design good languages (did I hear someone say null?).

At a structural level, at some point the cost of improving LLMs will outweigh the cost of revisiting PLs and starting from better principles.

I'm not certain when the market will catch up, but I'm confident there are already opportunities for taking a PL approach to problems instead of an AI approach. I often build mini languages when I have agents build plans for other programs to consume (agentically or deterministically). The result is better agent performance combined with better end UX.

## Example PL Improvements

Here are a list of ideas for unexplored (and practical) opportunities for improving PLs as they exist today:
 1. PLs targeted for specific use-cases
   - n8n has taken off amongst non-technical agentic workflow builders
 2. PLs with better performance guarantees by restricting the language
   - Rust succeeded because of performance guarantees in spite of a *massive* adoption hurdle, and LLMs can adopt difficult languages far quicker than humans
 3. paradigm-shifting PLs that humans were too dumb to be able to produce code for
   - Natural-language PLs without strict grammars
   - Spec-driven PLs compiled by agents
   - Lean has been taking off because it turns out LLMs are great theorem solvers
   - Building highly-pure/declarative PLs (e.g. Elm, Haskell) that can manage complexity at larger scales compared to imperative PLs (e.g. JS, Python): agents get less frustrated at compilation errors than humans.
   - A PL that supports full backtracking and replayability
   - A PL with no versioning (Unison already tried this)

# 2. PLs are Becoming a Valid Business Model

## Why were PLs traditionally such a Tarpit?

PLs have, for years, been an extremely brutal and unreasonable business model because:
 A. decision makers are unwilling to buy technical risk when choosing a PL for a new project
 B. migration, adoption, and teaching costs were astronomically high
 C. network effects put PLs years behind
 D. you couldn't monetize PLs anyway!

But things are changing. Let's take a look.

### A. New PLs are less Scary Now

As a PL buyer traditionally chose between:

Popular Language A: Well-trodden language that works and is popular on StackOverflow (RIP btw 🪦). I also know that my boss won't fire me for picking Python.

Research Language B: Language design communicated to PhD student by God Himself. Uses weird words like Monad. Requires a 1 month onboarding. My boss asked me whether we would be using Fortran or Cobol.

But the matrix is shifting...

Popular Language A: I don't know which language my Claude picked, but I do know Claude spins a lot sometimes when I tell it to run the code. Also there's a lot of user-facing bugs and stability issues.

Research Language B: I don't know which language my Claude picked, but it's kind of cool that it never crashes!

And now, if you change your mind, the migration is a flat cost of $1k tokens as you run Claude overnight. I'm oversimplifying: but the cost matrix really is changing!

### B. Migration Costs are Crashing

3 years ago, if you wanted to migrate a codebase:
 - you stalled or forked development for a month
 - you lost 1-2 engineers during that time doing 0 product work
 - you paid the onboarding cost for the new language
 - you might face attrition from old developers not wanting to use the new language

This has changed *drastically*. Now you set Claude in a long-running migration session in parallel for 2-5 days, and lose 0.3 of an engineer for a week.

Of course, that's still expensive, but we're talking up to 10x cheaper migration costs, and those costs will likely only trend downwards.

### C. PL Ecosystem Moats are Weakening

Network effects and ecosystem moats were one of the primary moats of major languages traditionally. People don't use JS because it's good, but because:
 1. it's just got *all* the tooling.
 2. I can google JS answers
 3. JS has every library
 4. I can easily hire JS devs

While these network effects remain, they are reducing every day:
 1. building tooling for a language is way cheaper now
 2. agents are good at self-synthesizing answers to questions compared to humans
 3. re-building a new library in a new language is getting way cheaper
 4. single-language developers are soon being priced out by agents

For example, I don't think we're that far away from:
 1. I build a new language
 2. User complains that the language doesn't support Acme library
 3. I point <insert migration tool> at Acme library, and the ecosysmte gap is yet weaker

So, while the network effect is strong, it's definitely not like it once was, and continues to weaken by the day.

### D. PLs Cost Money Now?

Imagine it's 1995. You just built a new programming language. Someone wants to use it. How do you make money???

Well, you can't charge money for using the compiler: that's just not done! (unless it's hardware)

Instead you had the following mechanisms:
 1. Sell your time, or a course, or a group of consultants you've trained
 2. Sell your fancy IDE that sits on top of your language (e.g. IntelliJ, Visual Studio)
 3. Sell your runtime + deployment services (e.g. Vercel, Unison)

These are all pretty good, but note that they're all *extra* costs over the incumbents. Python is literally totally free (or way cheaper) on all of these axes, and your language has an *apparent* monopoly that users will shy away from, since they'll be at your mercy in the long-term when it comes to costs.

PLs now have a fresh monetization strategy: PL-specific agents and model inference costs. There is also *much more appetite for paying for IDEs and their custom model/agent offerings* (think: Cursor, Zed).

While PLs aren't God's gift to business models, the landscape *has changed*, and in a way that users are more willing to pay.

# 3. Niche IDEs will Beat Generalist IDEs

The IDE market today is focused squarely on *generalist* coding IDEs and coding agents, often combining both. The 3 types of product are:
 1. IDE + Custom Agent + Custom Model: Cursor + Composer, Zed + Zed Agent
 2. IDE, no agent: VS Code, Conductor
 3. Custom Agent, no IDE: Claude, Codex

These approaches are fundamentally un-sticky:
 - Text-based agents are extremely switchable (you can used Claude + Codex in parallel wihtout issue)
 - IDEs are also fairly switchable (switching from Cursor to Zed took me around 1 hour of pain, maybe less)

We'll look at some of the longest-lasting IDEs, and talk about how they've maintained decades-long advantages by:
 1. Building IDEs on top of proprietary languages that serve the IDE
 2. Becoming the IDE for a specific niche

## Generalist IDEs aren't Sticky

IDEs today are largely not taking differentiated opinions on how software development should be different.

Most products look something like:
 - Workspaces on the left
 - Agent view to the right of that
 - File view to the right of that
 - File Tree view somewhere as well

This is basically VS Code with extra steps

[Insert Image]

The following products all fall into this:
 1. Zed
 2. Conductor
 3. IntelliJ

The way to think of these products is "I'm writing code, and now the agent helps me write code quicker".

In my opinion, these products will be extremely vulnerable in the years to come. Their value proposition comes down to being a better IDE, but IDEs are generally extremely interchangeable unless you take a seriously differentiated opinion.

For example, I've switched between the following IDEs liberally within the last 2-3 months:
 1. Cursor
 2. Zed
 3. VS Code

My main point here isn't that these are bad businesses (e.g. Cursor is becoming an LLM shop, not just an IDE). My point is that these IDEs are largely indistinguishable barring quality, and so will be competing each other somewhat liberally.

### Cursor Agent Mode is a Good Step

Cursor Agent Mode takes a swing at differentiating itself by betting: is "The next IDE interface is not code, but agent chats, and that my interface for building products is coding agents".

This strategy is basically "I don't look at code, I talk to agents". I think this is pretty good, but I don't think it's quite right for a few reasons.

First, text-based agentic coding is fundamentally switchable. The Cursor agent view is:
 1. workspaces on the left
 2. agent view to the right of that
 3. browser/file view to the right of that

Secondly, text-based agentic coding isn't all it's purported to be. Agentic coding is *really* good at getting to prototype, but past a certain amount of complexity, my experience tells me that regular coding agents don't scale, even with access to images.

I think a good next step here is to try to combine:
 1. non-textual interfaces for agentic coding
 2. strategies like spec-driven development, which allow agents to scale past the ~50k lines of code that they seem to get stuck at right now

## Which Software Development Products Outlasted Historically?

The primary factors for long-lasting IDEs have historically been:
 1. niche targets
 2. proprietary PLs
 3. opinionated interfaces that cause stickiness

Let's look at two: IntelliJ and `.java`, and Powerpoint and `.pptx`

### IntelliJ and `.java`

IntelliJ crushes the Java and JVM market, even now with vibe coding. Some of the core reasons are:
 1. it targeted and hunted the Java market exclusively, where there weren't many great players
 2. it built proprietary best-in-class compilers for Java, Scala etc. They even built custom Java-focused merge resolution, such that their UX was an upgrade over the competition
 3. the IntelliJ interface *is very different to VS Code*. Keystrokes are different; the UI is different... whereas migrating VS Code <-> Cursor is nigh-instant, *it's harder for humans to switch from IntelliJ*

At my current job, we had serious getting people off IntelliJ to VS Code because users struggled with: the new git interface (especially losing IntelliJ merging), the worse compiler, losing the easy "play button" next to Scala runtime objects.

Humans are super unadaptable, and nailing their favorite UX is a good way to win.

### Powerpoint and `.pptx`

Powerpoint is such a good IDE, that you don't even realize it is one and you've never even *seen* the coding language underneath. It's a click-and-drag interface that lets you create slides however you want to. Primarily, the limitation in your expression is your hands, not the interface, and that is the sign of a genius product.

Powerpoint is powerful insofar as it *lets humans express themselves succinctly and directly*, and without much of an onboarding cost. The result is a product so sticky and so niche-capturing that the Powerpoint IDE is eponymous with its output.

When you look at the alternatives (Google Slides, Keynote), it's just very hard to switch after a decade of using Powerpoint.

Treating Powerpoint as the ultimate IDE experience is a great way to think about IDEs, in my opinion. The more that people think your IDE is an app, not a coding interface, the more that they don't even consider opening Cursor.

# Conclusion

It's easy to think of the software development market as just a "who's best" game. But a closer look (with a little history) tells you that the best products have been *so sticky* that they make you forget you're even in a software development IDE.

Most of the swings in 2026 are basically VS Code + Coding Agent panel. It doesn't give "Powerpoint". I'm excited for the next Powerpoint.

## What could the Next Powerpoint Be?

In order to find the next Powerpoint, I think you can ask yourself some of these questions:
 1. how am I letting people express themselves directly in ways that they couldn't before?
 2. is what I'm offering a differentiated product experience to <insert generalist IDE>?
 3. am I a Claude wrapper?
 4. can I *name* the use-case for my IDE? (e.g. IntelliJ's Java Dev; Powerpoint's Deck Builder)
 5. why could the IDE's target (i.e. PL) not exist before today?

## What's the next Powerpoint?

The reason Powerpoint worked is because it exposed the ability to express programmable GUIs that had been recently made available by Windows. So what's new now?

### LLMs are Natural Language Interpreters

One of the core points of LLMs is that they expose the *ability to express technical ideas in non-technical language*, where coding agents are the barrier.

They also allow for the ability to express technical ideas in higher-level intermediate languages. For example, if you want to build a Sudoku app, you don't need the code, you can actually get away with a really good prompt and some style guides. This is basically a higher-level PL, and so your new IDE will likely target a use-case that cannot be reasonably expressed in raw code.

### Be more than a Claude Wrapper

You don't want to be an app that hosts a text interface (that's not sticky at all). And ideally you also want to be more than a good system prompt (unless it's *very* good). That means that each of these will require some kind of insight into how to build a new intermediate layer (*ahem* Programming Language *ahem*) even if that Programming Language is not a traditional PL (e.g. spec-driven development, or a graph/image format).

### Ideas

Enabling non-technical investors to explore ideas with natural language and trade on those ideas. The intermediate language is a format for expressing technical analyses in a level of abstraction above Pandas. The compilation strategy would be an agent. (note: this is what we basically did with [AI Analyst](TODO LINK))

Enabling Software Architects to build software *at the architecture level*. The intermediate language would probably be some mixture of graphs and function signatures, and the compilation strategy would be an agent.

Enabling content creators to express animations using text and drawings. The intermediate language would be some sort of storyboard, and the compilation strategy would be a VLM.

Enabling musicians to express musical ideas using mouth sounds and textual directions. Intermediate format will be a combo of audio format and directions on how to synthesize the target music. [TODO] (Oops! turns out someone already did this!).

Enabling UI designers to have backend architectures built for them based only on Figma wireframes. Intermediate layer is Figma wireframes and some product spec notes; compilation strategy is coding agents.