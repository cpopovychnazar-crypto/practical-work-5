
# Practical Work No. 5 — NestJS Modular Architecture and Dependency Injection

## Student Information

- Student: Popovych Nazar
- Group: KN-42
- Variant: 10
- Topic: Modular Architecture and Dependency Injection in NestJS
- Domain: Pet Supplies Store

## Project Description

This project demonstrates modular architecture and dependency injection in NestJS. It implements a pet supplies API with a feature module and a shared module.

## Modules and Services

- `PetSuppliesModule` — feature module for pet supplies.
- `PetSuppliesController` — handles HTTP requests.
- `PetSuppliesService` — manages pet supply data.
- `SharedModule` — provides shared services.
- `SlugService` — generates URL-friendly slugs from product titles.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/pet-supplies` | Get all pet supplies |
| GET | `/pet-supplies/:id` | Get a pet supply by ID |
| POST | `/pet-supplies` | Create a pet supply |

## Installation and Run

Install dependencies:

```bash
npm install
```

Run the application in development mode:

```bash
npm run start:dev
```

Check TypeScript compilation:

```bash
npx tsc --noEmit
```

## Example POST Request

```json
{
  "title": "Dog Food Premium",
  "price": 450,
  "petCategory": "Dogs",
  "packageWeightKg": 3,
  "brand": "Test Brand"
}
```

The generated slug is `dog-food-premium`.

## Technologies

- Node.js
- TypeScript
- NestJS
- npm

## Conclusion

The project demonstrates feature and shared modules, provider registration and exports, dependency injection, and automatic slug generation.
