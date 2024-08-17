---
slug: why-you-might-not-want-to-hire-frontend-and-backend-developers
title: Why you might not want to hire "frontend" and "backend" developers
authors: mac
tags: [software teams, frontend, backend]
---

# Why you might not want to hire "frontend" and "backend" developers

I am fairly convinced that for most of us within the webdev SaaS world, putting the words "backend" or "frontend" into the titles of our engineers is one of the more damaging things we can do to our engineering culture, and via Conway's law, to our software products.

Doing so inevitably creates backend/frontend teams, backend/frontend chapters, backend/frontend channels in your communication tools, and the list goes on and on.
Silos emerge, people are blocked, and our products suffer as individuals make technical decisions which often prioritize not having to deal with “the other stuff” rather than the best solution for the product.

At the end of the day, we’re all working towards the same goal and the ownership of that should be shared. Otherwise, you’ll end up asking questions like:

- How many backend engineers should we hire per frontend engineer?
- (During Sprint planning): is there enough frontend/backend work in this sprint to match our capacities? (Note the plural here)
- Who can fix \<insert extremely minor frontend issue> now that \<frontend dev> is on vacation?

I am not arguing that everyone should be masters of everything. Rather, I think it’s important to assess whether those are self-made problems stemming from our organizations telling someone that they’re supposed to be a backend or frontend (only) engineer.

There exist no engineers who can’t obtain the technical ability to change the color of a button in your app, or rename an API endpoint with relative ease, unless our organizations create those boundaries. Engineers in turn internalize such boundaries and believe them to be identifiers of their position and its responsibilities, and the divide grows over time.

These days, it’s easier than ever to bridge this gap. Amazing code-sharing solutions like tRPC or generated types can be great enablers of reducing the divide between layers of architecture. You can utilize these tools to pull a so-called inverse Conway maneuver; designing your organization around the technology.

Of course there are exceptions to the above; if you’re building an API that gets consumed by many different external clients, and you've designed your team around the [x-as-a-service model](https://teamtopologies.com/key-concepts), you're probaly good to go. In fact, so long as you're actively evaluating whether a given structure works for your organization, you are probably going to be fine in the long run.

But I have seen many organizations that build one product, consisting of one API, which is consumed by one client, who still divide their architecture, people and culture this way.
Not because of an active decision, but because it’s the way we’re used to.

The result is inefficient - and if you ask me - uninspiring to partake in.

On the other hand, I've now worked in three separate organizations where we've actively tried to break down these barriers, and the results have been amazing. It takes hard work, and it's paramount that your engineers get the support they need to bridge the gap, and that you do it _with_ them, not _to_ them. But if you succeed, you will see so many benefits for both the engineering department and the organization at large in places you weren't even expecting.

And more importantly - to me as an engineer anyway - it's way more fun. Or as one of my fellow engineers put it during the tail-end of one such transition:

"I've spent the last few months working on things I didn't feel good enough at to do. And... I don't know, it just keeps on working."

!["Product Developers diagram"](/img/frontend-backend-teams.png "Product Developers diagram")
