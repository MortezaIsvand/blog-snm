# Blog App

This is a blog app built using Next.js, Prisma, React Hook Form, Zod, DaisyUI, and NextAuth. It provides a RESTful API for creating, editing, deleting, and retrieving blog posts. The app also includes server-side pagination, server-side filtering with a search input, and server-side data fetching. The layout and design of the website are enhanced with DaisyUI.

## Visit website 

👉 [blog-snmlo.vercel.app](blog-snmlo.vercel.app)

HomePage
<img width="934" alt="homePage" src="https://github.com/MortezaIsvand/blog-snm/assets/107297151/9bde618f-60b9-4cae-a122-518dde7aedc6">

DetailPage
<img width="950" alt="detailPage" src="https://github.com/MortezaIsvand/blog-snm/assets/107297151/2f44ab39-9b20-41e9-9ef4-aa06dd35ba82">


CreatePage
<img width="956" alt="createPage" src="https://github.com/MortezaIsvand/blog-snm/assets/107297151/366aad8d-5782-472f-aa49-cfd907931cdd">


## Features


- RESTful API for CRUD operations on blog posts
- Server-side pagination for efficient rendering of large data sets
- Server-side filtering with a search input to find specific posts
- Server-side data fetching for improved performance
- Beautiful layout and design using DaisyUI

## Used Libraries

This blog app utilizes several libraries to enhance its functionality. Here are the main libraries used:

- Next.js: A React framework for building server-side rendered and static websites.
- Prisma: A database toolkit and ORM (Object-Relational Mapping) for Node.js that simplifies database access and management.
- React Hook Form: A library for building forms in React with easy form validation and state management.
- Zod: A TypeScript-first schema validation library used for validating form inputs and data.
- DaisyUI: A lightweight UI component library for Tailwind CSS that provides a set of ready-to-use components and utilities.
- NextAuth: A library for handling authentication and authorization in Next.js applications.
- Tailwind CSS: A highly customizable, low-level CSS framework that provides utility classes for styling elements, enabling rapid custom UI development without predefined component classes.

These libraries have been chosen for their reliability, ease of use, and robust feature sets, and they play a crucial role in making this blog app efficient and user-friendly.

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/mortezaisvand/blog-snm.git
```

2. Change into the project directory:

```shell
cd blog
```

3. Install the dependencies:

```shell
npm install
```

4. Set up the environment variables:

Create a `.env` file in the root directory and add the following variables:

```shell
DATABASE_URL=your-database-url
NEXT_URL=http://localhost:3000
NEXTAUTH_SECRET=a-random-string
GOOGLE_CLIENT_ID=insert-your-google-client-id-here
GOOGLE_CLIENT_SECRET=insert-your-google-client-secret-here
```
Please replace the placeholders (<insert-...-here>) with your actual values. For instance, replace <insert-your-database-url-here> with the URL of your database. Similarly, replace <insert-your-google-client-id-here> and <insert-your-google-client-secret-here> with your Google Client ID and Secret respectively for session management. The <insert-a-random-string-here> should be replaced with a random string of your choice for NextAuth secret. Remember to keep these values confidential to protect your application’s security.

5. Run the migrations:

```shell
npx prisma migrate dev --name init
```

6. Start the development server:

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

7. Open your browser and navigate to `http://localhost:3000` to access the blog app.

## Usage

1. Create a new blog post:

- Log In
- Click on the "CREATE" button.
- Fill in the required fields (title, content and tag).
- Click "CREATE" to create the post.

2. Edit an existing blog post:

- Click on a post.
- Click on the "Edit" button next to the post you want to modify.
- Update the fields you want to change.
- Click "UPDATE" to update the post.

3. Delete a blog post:
- Click on a post
- Click on the "Delete" button next to the post you want to delete.

4. Search for blog posts:

- Enter keywords in the search input field.
- The blog posts will be filtered based on the entered keywords.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Next.js: https://nextjs.org/
- Prisma: https://www.prisma.io/
- React Hook Form: https://react-hook-form.com/
- Zod: https://github.com/colinhacks/zod
- DaisyUI: https://daisyui.com/
- NextAuth: https://next-auth.js.org/
