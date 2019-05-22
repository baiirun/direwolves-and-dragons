[![Netlify Status](https://api.netlify.com/api/v1/badges/1c079f73-9085-40db-b526-f860925e23ff/deploy-status)](https://app.netlify.com/sites/direwolves-and-dragons/deploys)

## Architecture

I decided to create a fully-separated architecture with a frontend being deployed/developed separately from the backend/REST API. This would allow us to have multiple clients interface (in the case we're developing mobile applications or smart devices or anything else that needs the API) with the API since there is no coupling involved between the backend and the consumer.

The **frontend** is written using **React** with **TypeScript**; nothing too crazy if you've used React before. I'm using [hooks](https://reactjs.org/docs/hooks-intro.html) as I feel they're the best way to write [resilient](https://overreacted.io/writing-resilient-components/) components and avoid introducing some development practices that are hard to debug. The only meaningful libraries pulled in are **React Router** for client-side routing and **styled-components** for CSS-in-JS styling. I'm using **Cloudinary** as a CDN to host the party logos and character avatars, which is admittedly a bit overkill for this project.

The **backend** is also a vanilla .NET Core REST API scaffolded using the `dotnet` CLI. I decided to use **Entity Framework Core's** `InMemoryProvider` to store information to meet the requirements for storing the data in memory.

![Simple Architecture Diagram](https://res.cloudinary.com/byronguina/image/upload/v1558377184/Architecture.png)

## Running **Direwolves & Dragons** Locally

**Prerequisites**

- [Node 10+](https://nodejs.org/en/download/current/)
- [.NET Core 2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2)

**Clone Repo**
```bash
git clone https://github.com/ByronGuina/direwolves-and-dragons
```

**Frontend**

```bash
npm install # yarn
npm start   # yarn start
```

**Backend**

```bash
cd backend
dotnet run
```

You don't need to run any migration scripts for seeding data as I'm using Entity Framework Core's InMemory Provider and initializing the data when the application starts. 

See `backend/Data/DataGenerator.cs`

## You can also check out **Direwolves & Dragons** online! Sorta...

The application frontend is hosted at [https://direwolves-and-dragons.netlify.com](https://direwolves-and-dragons.netlify.com) and the backend/API is hosted on Digital Ocean. Unfortunately I did not spin up the backend on Digital Ocean long ago enough to get SSL working in time (it can take 24-48+ hours for the public domain name to propagate to the necessary DNS). Because the frontend is using SSL/HTTPS and the backend isn't (as of 5/22), most browsers block the request for safety reasons.

It _might_ still work if you disable HTTPS in your browser for the Direwolves & Dragon URL. Double unfortunately, Chrome doesn't care if you do that and will attempt to use HTTPS and block the mixed HTTP/HTTPS request anyway. I _was_ able to get it working on an Edge Chromium build. Hopefully the SSL stuff propagates before you check this out so you can see my sweet deployment set up. I'll be watching it in the meantime.

## Issues I encountered

- Initializing the data in for the InMemory Provider did not correctly associate Character data with a given Party. As a workaround I would have to search for the associated characters in the controller (using LINQ) and assign it to the Party before returning the data to the frontend. Normally this data would be more normalized and I would likely use a **join table** to associate the IDs between a Party and a Character.
- In the client I initially tried to be more generic with my API layer, but the way I designed/architected the editing UI made it so it was convoluted to determine whether a request should be POST or PATCH. I opted for separate functions, but the UI design could have been more distinct between creating and editing an item which would help allegiate some issues with the ambiguity.
- Synchronizing the types between C# and TypeScript caused some difficulty, particularly with how differently C# and TypeScript handle values for enums. Rather than set up complicated validation logic on the client and server, I just opted to store the race and class as strings and let the user enter whatever they want. In the future I'd rather restrict the race and class options and unify the types between the client and API.

    Now-a-days I tend to prefer to use [GraphQL](https://graphql.org/) over than REST-based APIs where possible. Since the GraphQL schema is typed and inspect-able, we get some really convenient tooling for generating client-side types based on our backend schema.
    
- Creating the initial 25+ characters with associated classes, races, stats, and images took longer than I expected. Thank you Twitch for giving me something to watch in the background while changing 500 lines one at a time.
- We ended up with some duplicate data between the parties UI and the individual party UI (with characters). Normally I would optimize the data returned from the REST API to ensure we're getting as little unnecessary data as possible, but with an application this small and the amount of data I didn't think it was necessary to spend a lot of time on data optimization. Getting unnecessary data in a request is one of the shortcomings of REST APIs in general, and another reason I like using [GraphQL](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/) where I can.

## Logical next steps to improve the app

- A **persistent** database instead of an in memory database is obvious in order to avoid the volatility/security issues with an in memory solution. As part of this, the data architecture could be written better. Currently there's not a great normalized relationship between a Party and Characters. This causes issues with how we set up controllers and the requests on the frontend. Next steps would be to spin up a persistent database and improve the current data architecture and normalization to ensure we are safely/correctly updating relationships and make the data more meaningful, while also making requests and responses as optimized as possible by not passing around extraneous data to the frontend. (that was a long sentence)
- I generally always write **tests** (where applicable), so the next step would be to include tests so we're more confident the application is working as intended, and that we immediately know if we introduce any breaking changes.
- Set up Continuous Integration/Continuous Deployment pipeline so we can automate the testing and deployment process. Let robots do the work for us! CI/CD is currently set up for the frontend portion of the application using **[GitHub Actions](https://github.com/ByronGuina/direwolves-and-dragons/actions)** and **[Netlify](https://www.netlify.com/)**.
- I'm not a designer (although that's an area I'm improving). Given the short time-frame for the project the UI isn't as fleshed out, designed, or consistent as it could be. Next steps would be to unify the UI components a bit and make the applications have a better overall feel.

    Additionally, it's not mobile-friendly at all. Depending on the target user-base, creating the application to be mobile-first could have been a higher priority.

- The management forms for a given item are missing a few key features usually found in forms. There isn't super strict validation for every field in the form. The number-related statistics and saving throws fields _do_ have validation to ensure the value entered is a number, but the pure string fields do not. Including validation and error states for the user-entered fields could help direct and educate users to provide a better user experience. Additionally, there is no sanitation for the fields on either the client _or_ the backend. Next steps would be to validate the fields to ensure data integrity and a better user experience while also sanitizing inputs on the client and backend to protect against malicious scripts.
- Improved UX for the management UI altogether. Currenty the management UI is fairly simple. The simplicity results in there being some unclear actions in regards to _how_ to create/edit/delete items. Adding animations to show loading/submitting/deleting states and some on-boarding elements would help direct users in the right direction and educate how to correctly manage items. Additionally, I would remove the ambiguity between creating and editing an item. This could be done with separate UIs or workflows or a myriad of different things. Again, I'm improving my UX and UI design skills as much as I can!
- Depending on the user base and the business goals it might make sense to implement **server-side rendering** for the frontend. There are many existing solutions for server-side or universal/isomorphic rendering with React (such as [Next.js](https://nextjs.org/)), or we could roll our own SSR solution. Among other things, SSR would allow us faster time-to-interactive on slow connections as well as more reliable indexing for SEO purposes.
- I'd like to better handle arbitrarily-sized inputs for character/party names and create a more flexible UI or restrict the input size.
- Another optimization win would be to implement image optimization for better performance and correctly size the images for the avatars and party logos. Since we're using **Cloudinary** as our image CDN we can achieve this fairly easily _for the initial data_ with some url parameters. Additionally I'd use better/more professional pictures altogether.

    Along with this, I would add functionality for _uploading_ images rather than links, which would be stored in Cloudinary. This would allow us to use all the image optimization and caching wins we get with a CDN for _every_ image rather than just the initial ones.
