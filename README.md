
# Frontend Mentor - Audiophile E-commerce Website

![alt text](images/preview.png)

Howdy!

This was a fun little project. It was surprisingly quick to pull together after I realised that the products as well as the product pages were identical to each other. So I spent time creating templates more than anything.

## Overview

### Philosophy 
KISS (Keep it simple, stupid). As always I avoid using anything I don't **need** to use. Although I did try Tailwind, more on that later.

### Tools I used 🛠:

- SvelteKit: to build the entire project with
- LocalStorage: to store the selected products from the store. I didn't opt for a fullstack solution on this project as the results would have been identical and unnecessary. 
- Tailwind: to style the project with. I loved/hated parts of it, more on this below.

### Cool features I spent time on 😊:

- Soft transitions/animations all over the place! I wanted to avoid 'sudden' changes that are not something 'explained' by a soft animation that gently communicates new information to the user.
- Building through 'templates'/routing with data: After studying the design I quickly realised that almost every page in the project was styled identically. So I opted to go for a solution where I use sveltekit routes and minimal ssr code to inject the correct content to either the product/<specific product name> or products/<specific products category> pages. This was great for 2 reasons:
    - Firstly because I realised how other websites (amazon, wordpress blogs etc) are built with data and 'templates' that simply inject the correct content into them. It didn't shock me at all but I always enjoy moments when the idea of something clicks with a real-life implementation by me.
    - Secondly because it was one of those solutions I wouldn't have thought of a few months ago. Having used/focused more on data and how to structure your projects around it is a great way to problem-solve. I only wish I looked towards these things sooner.
- I optimised the customer journey ever so slightly. In the original design the
  custom would select product/s, go to the checkout, input their details, click
  buy and they were done. I added an additional step that confirms the order as
  well as the customers address and gives the customer an option to edit their
  details in case they were misspelled. 

  

## What I've learned

- Tailwind is pretty cool! I was really against using Tailwind. Mostly because of how it makes HTML look 'messy'. Whilst that still remains the case I was pleasantly surprised by how intuitive it became. Also the speed with which you can build components was welcomed.
- Tailwind has some issues though... Main issue is that if Tailwind doesn't have something it takes quite a bit of figuring out as to how it can be implemented. But most of the time it's simply easier to go into your style tags and just add the necessary css. Any semi-complex grid structure? @supports (property:value)? Not there. Finally - I found myself writing worse HTML. This is an issue with ME not Tailwind but I fear that it could lead to this. Also not needing to think of 'class names' for elements can lead to the same issue and potential readability problems. Perhaps these are offset if you write 'realistically sized' components.
- When JS seems difficult to understand, break it down line by line (literally). Another seemingly obvious lesson but one I had to go through nevertheless. Things just made sense when I slowed down and actually paid attention instead of throwing 'intuitive code' into VSC.
- Planning: It seems that during every project I lack the methodology to break the project down into small enough components. This leads to some time wasted as I end up rewriting code. So before starting a next project I will find a system that helps me plan the 'flow' of the page/app. Then I'll start implementing.
- Much better use of the inspector tool: In the past I would have spent quite a lot of time in the code editor trying to understand what the CSS issue is. During this project I spent most of this time in the inspector and quickly found the things I missed/misunderstood. Took me 2 minutes to learn that display:flex actually gives display:block to its children. In the past I would have assumed this was a mistake of my own doing and wasted a great deal of time 😅...
- Challenge UI! Currently I build projects solo. So I don't work with a designer although I dabbled in the field briefly. I think it's a great skill/focus for the developer to challenge any UI issues they see whilst reviewing the design and coding the project. I have done this in the last 2 projects and I felt the results were ideal after my fixes. And I guess as developers we can be the last frontier when it comes to good/bad UI. I'm not saying we can build it all without the necessary expertise of real pros but we should defenitely remain critical and vigilant of anything that may lessen user-experience. 

## Bugs - none I found after initial wave of fixes.

