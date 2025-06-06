# Trendy Books

View trending books using [Hardcover](https://hardcover.app/) graphql api.

# Running the application

1. Copy `.env` to create `.env.local` file.
2. Set Hardcover API key in the `.env.local` file using `VITE_HARDCOVER_API_URL` variable.
3. Run following commands to install dependencies and start the development server:

```bash
npm install
npm start
```

# Building For Production

```bash
npm run build
```

Note:
Hardcover API doesn't allow CORS requests, so requests only work in dev mode.

## Testing

```bash
npm run test
```

## Tools and Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com/)
- [graphql-request](https://www.npmjs.com/package/graphql-request)
- [gql.tada](https://www.npmjs.com/package/gql.tada)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [msw](https://mswjs.io/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
