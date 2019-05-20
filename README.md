## Architecture

I decided to create a fully-separated architecture with a frontend being deployed/developed separately from the backend/REST API. This would allow us to have multiple clients interface (in the case we're developing mobile applications or smart devices or anything else that needs the API) with the API since there is no coupling involved between the backend and the consumer.

The **frontend** is written using **React** with **TypeScript**; nothing too crazy if you've used React before. I'm using [hooks](https://reactjs.org/docs/hooks-intro.html) as I feel they're the best way to write [resilient](https://overreacted.io/writing-resilient-components/) components and avoid introducing some development practices that are hard to debug. The only meaningful libraries pulled in are **React Router** for client-side routing and **styled-components** for CSS-in-JS styling. I'm using **Cloudinary** as a CDN to host the party logos and character avatars, which is admittedly a bit overkill for this project.

The **backend** is also a vanilla .NET Core REST API scaffolded using the `dotnet` CLI. I decided to use **Entity Framework Core's** `InMemoryProvider` to store information to meet the requirements for storing the data in memory.

![Simple Architecture Diagram](https://res.cloudinary.com/byronguina/image/upload/v1558377184/Architecture.png)

## Running **Direwolves** & Dragons Locally

**Prerequisites**

- Node 8+
- .NET Core 2.2?

**Clone Repo**

    git clone https://github.com/ByronGuina/direwolves-and-dragons

**Frontend**

```
cd frontend
npm install # yarn
npm start   # yarn start
```

**Backend**

```
cd backend
dotnet run
```

You don't need to run any migration scripts for seeding data as I'm using Entity Framework Core's InMemory Provider and initializing the data when the application starts. 

See `backend/Data/DataGenerator.cs`

## Direwolves & Dragons hosted

- TODO: Write notes about visiting D&D website hosted on **Netlify** and **Digital Ocean**

## Issues I encountered

- Initializing the data in for the InMemory Provider did not correctly associate Character data with a given Party. As a workaround I would have to search for the associated characters in the controller (using LINQ) and assign it to the Party before returning the data to the frontend. Normally this data would be more normalized and I would likely use a **join table** to associate the IDs between a Party and a Character.
- Synchronizing the types between C# and TypeScript caused some difficulty, particularly with how differently C# and TypeScript handle values for enums. I wanted to be able to handle enum values as strings, and I ended up coming up with a solution to ensure the enum-based data (Race, Class) were correctly propagated between the client and server. 

    Now-a-days I tend to prefer to use [GraphQL](https://graphql.org/) over than REST-based APIs where possible. Since the GraphQL schema is typed and inspect-able, we get some really convenient tooling for generating client-side types based on our backend schema.
    
- Creating the initial 25+ characters with associated classes, races, stats, and images took longer than I expected. Thank you Twitch for giving me something to watch in the background while changing 500 lines one at a time.
- We ended up with some duplicate data between the parties UI and the individual party UI (with characters). Normally I would optimize the data returned from the REST API to ensure we're getting as little unnecessary data as possible, but with an application this small and the amount of data I didn't think it was necessary to spend a lot of time on data optimization. Getting unnecessary data in a request is one of the shortcomings of REST APIs in general, and another reason I like using [GraphQL](https://graphql.org/) where I can.

## Logical next steps to improve the app

- A **persistent** database instead of an in memory database is obvious in order to avoid the volatility/security of an in memory solution.
- I generally always write **tests** (where applicable), so the next step would be to include tests so we're more confident the application is working as intended, and that we immediately know if we introduce any breaking changes.
- Set up Continuous Integration/Continuous Deployment pipeline so we can automate the testing and deployment process. Let robots do the work for us! CI/CD is currently set up for the frontend portion of the application using **[GitHub Actions](https://github.com/ByronGuina/direwolves-and-dragons/actions)** and **[Netlify](https://www.netlify.com/)**.
- I'm not a designer (although that's an area I'm improving). Given the short time-frame for the project the UI isn't as fleshed out, designed, or consistent as it could be. Next steps would be to unify the UI components a bit and make the applications have a better overall feel.

    Additionally, it's not mobile-friendly at all. Depending on the target user-base, creating the application to be mobile-first could have been a higher priority.

- Depending on the user base and the business goals it might make sense to implement **server-side rendering** for the frontend. There are many existing solutions for server-side or universal/isomorphic rendering with React (such as [Next.js](https://nextjs.org/)), or we could roll our own SSR solution. Among other things, SSR would allow us faster time-to-interactive on slow connections as well as more reliable indexing for SEO purposes.
- The data architecture could be written better. Currently there's not a great normalized relationship between a Party and Characters. This causes issues with how we set up controllers and the requests on the frontend. Next steps would be to better organize the data architecture for the Parties and Characters and optimize how we retrieve data on the client and the backend so we are doing it as efficiently as possible and not passing around extraneous data to the frontend/backend.
- I'd like to better handle arbitrarily-sized inputs for character/party names and create a more flexible UI or restrict the input size.
- Another optimization win would be to implement image optimization for better performance and correctly size the images for the avatars and party logos. Since we're using **Cloudinary** as our image CDN we can achieve this fairly easily with some url parameters. Additionally I'd use better/more professional pictures altogether.
