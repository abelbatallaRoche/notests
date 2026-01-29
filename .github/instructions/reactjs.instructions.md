---
description: "ReactJS development standards and best practices"
applyTo: "**/*.jsx, **/*.tsx, **/*.js, **/*.ts, **/*.css, **/*.scss"
---

# ReactJS Development Instructions

Instructions for building high-quality ReactJS applications with modern patterns, hooks, and best practices following the official React documentation at https://react.dev.

## Project Context

- Latest React version (React 18+)
- TypeScript for type safety
- Functional components with hooks as default (no class components)
- One main React component per `.tsx` file. Directly related, private sub-components are permissible.
- Follow React's official style guide and best practices
- Use Vite
- Implement proper component composition and reusability patterns
- If the user wants to setup a new react project you MUST use npm create vite@latest command with the `--template react-ts` option to ensure a modern React setup with TypeScript. DON'T create a new workspace. Example: npm create vite@latest my-app -- --template react-ts

## Development Standards

### Architecture

- Use functional components with hooks as the primary pattern
- Implement component composition over inheritance
- Organize components by feature or domain for scalability
- Separate presentational and container components clearly
- Use custom hooks for reusable stateful logic
- Implement proper component hierarchies with clear data flow

### TypeScript Integration

- Define a mandatory `interface ComponentNameProps` for props. **Never use `any`**.
  ```ts
  interface UserCardProps {
    userId: string
    isActive?: boolean
  }
  const UserCard: React.FC<UserCardProps> = ({ userId, isActive }) => {
    /* ... */
  }
  ```
  • No React.PropTypes. Rely on TypeScript.
  • Pass props explicitly. Avoid blindly spreading {...props}.
  • Define proper types for event handlers and refs.
  • Implement generic components where appropriate.
  • Use strict mode in tsconfig.json.
  • Leverage React’s built-in types (React.FC, React.ComponentProps, etc.).
  • Create union types for component variants and states.

### Component Design

    •	Follow the Single Responsibility Principle.
    •	Use descriptive, consistent naming conventions.
    •	Keep components small and focused on one concern.
    •	Ensure components are testable and reusable.
    •	Follow composition patterns (children-as-functions, compound components, provider pattern).
    •	Extract reusable logic into custom hooks.
    •	Implement proper loading and error states for data-fetching components.

### Rendering

    •	Prefer JSX; avoid direct React.createElement unless required.
    •	Adhere to established component structure and conventions.

### State Management

    •	useState for local state.
    •	useReducer for complex state logic.
    •	useContext for shared state across trees.
    •	Normalize state when needed.
    •	Use SWR for server state management and data fetching.
    •	Separate client state from server state clearly.

### Hooks and Effects

    •	Use useEffect with proper dependency arrays.
    •	Implement cleanup in effects to prevent leaks.
    •	Use useMemo and useCallback where performance benefits are measurable.
    •	Create custom hooks for reusable stateful logic.
    •	Use useRef for DOM access or mutable values.
    •	Follow the rules of hooks strictly.

### Styling

    •	Use CSS Modules.
    •	Responsive, mobile-first design.
    •	Use BEM or consistent naming for CSS classes.
    •	CSS custom properties (variables) for theming.
    •	Consistent spacing, typography, and colors.
    •	Ensure accessibility (semantic HTML, ARIA attributes).

### Performance Optimization

    •	Use React.memo where beneficial.
    •	Code-splitting via React.lazy + Suspense.
    •	Optimize bundle size with tree shaking and dynamic imports.
    •	Virtual scrolling for large lists.
    •	Profile with React DevTools.

### Data Fetching

    •	Use SWR with React Suspense for server state management and declarative loading states.
    •	Combine Error Boundaries with Suspense for error handling and retry logic.
    •	Leverage SWR's automatic revalidation, caching, and deduplication.
    •	Use mutate API for optimistic updates and useSWRInfinite for pagination.
    •	Configure global settings via SWRConfig provider and custom fetchers per endpoint.
    •	Use conditional fetching (null key) when appropriate.
    •	Mock API responses with MSW using intention-revealing, realistic data structures.

### Error Handling

    •	Use Error Boundaries for UI safety.
    •	Provide fallback UI for errors.
    •	Log errors for debugging.
    •	Handle async errors in effects and handlers.
    •	Provide meaningful messages to users.

### Forms & Validation

    •	Use controlled components for inputs.
    •	Use React Hook Form for validation.
    •	Accessibility-first (labels, ARIA).
    •	Handle submission and error states.
    •	Support debounced validation.
    •	Handle file uploads and advanced cases.

### Routing

    •	Use React Router (v6+).
    •	Support nested routes, protected routes, and lazy loading.
    •	Handle params and query strings properly using hooks (useParams, useSearchParams).
    •	Implement loaders and actions for data fetching at route level.
    •	Use outlet for nested route rendering.
    •	Support breadcrumbs and navigation state.

### Testing

    •	Unit tests with Vitest + React Testing Library.
    •	Test component behavior, not implementation.
    •	Integration tests for complex flows.
    •	Mock APIs and external dependencies.
    •	Test accessibility and keyboard navigation.
    •	Add identifiers "data-qa-id" for all interactive elements.

### Security

    •	Sanitize inputs, prevent XSS.
    •	Escape and validate rendered data.
    •	Always use HTTPS for APIs.
    •	Implement authentication/authorization patterns.
    •	Avoid storing sensitive data in local/session storage.
    •	Apply Content Security Policy headers.

### Accessibility

    •	Comply with WCAG 2.1 AA (AAA where possible).
    •	Semantic HTML elements.
    •	Proper ARIA attributes and roles.
    •	Ensure full keyboard navigation.
    •	Alt text for media.
    •	Adequate color contrast.
    •	Test with screen readers & Lighthouse audits.

### Code Style & Formatting

    •	Use single quotes (') for strings and JSX attributes.
    •	No blank lines at start/end of function bodies.
    •	Enforced by ESLint & Prettier.

### Documentation & Comments

    •	Use JSDoc for all public/exported functions, classes, complex types.
    •	Comment why, not what.
    •	Document complex algorithms, business rules, or non-obvious choices.
    •	Do not leave commented-out code (use version control).

### Implementation Process

    1.	Plan component architecture and data flow.
    2.	Set up project structure and folders.
    3.	Define TypeScript types/interfaces.
    4.	Build core components with proper styling.
    5.	Add state management and data fetching.
    6.	Implement routing and navigation.
    7.	Handle forms and validation.
    8.	Add error handling and loading states.
    9.	Write tests.
    10.	Optimize performance.
    11.	Ensure accessibility.
    12.	Document with JSDoc and meaningful commit messages.

### Common Patterns

    •	Higher-Order Components for cross-cutting concerns.
    •	Render props for flexible composition.
    •	Compound components for related functionality.
    •	Provider pattern for context-based state sharing.
    •	Container/presentational separation.
    •	Custom hooks for reusable logic.

### Project structure

src/
├── core/ # Cross-cutting concerns (routes, providers, auth, constants, configuration)
├── pods/ # Domain-specific features (self-contained functionality)
├── scenes/ # Pages or route-level components (composing pods + layout)
├── common/ # Common components and utilities (components, hooks, validations)
├── assets/ # Static files (images, fonts, styles)
├── index.html # Application HTML entry point
└── App.tsx # Application bootstrap

#### Folder Purposes

#### `core/`

- Defines **application-wide configuration**.
- Contains:
  - `router/`
  - `providers/` (context, i18n, theming, queryClient, etc.)
  - `constants/`
  - `config/` (environment variables, feature flags)
  - `index.ts` (export entrypoint)
- Goal: keep **startup logic separate from features**.

#### `pods/`

- Each pod = **self-contained domain/feature**.
- Example (`dashboard/`):

pods/dashboard/
├── components/ # Feature-specific UI
├── hooks/ # Feature-specific hooks
├── services/ # API/data access for this feature
├── index.ts # Export entrypoint

- Encourages **modularity** & **team ownership**.

#### `scenes/`

- Represents **pages or route-level components**.
- Responsibilities:
- Compose **pods** for display.
- Choose the **layout** (header/footer/sidebar).
- Handle **route parameters** and query strings.
- Example (`patient-dashboard/`):
  scenes/patient-dashboard/
  ├── patient-dashboard.scene.tsx
  └── index.ts

#### `common/`

- Holds **everything shared across pods**.
- Subfolders:
- `components/` → generic reusable UI (buttons, tables, modals)
- `hooks/` → shared hooks (useDebounce, useFetch, useLocalStorage)
- `utils/` → pure helpers (dates, math, formatting)
- `services/` → shared APIs (auth, http client, error handling)
- `constants/` → config values, enums
- `types/` → TypeScript interfaces, DTOs

#### `assets/`

- Fonts, icons, images, global CSS, etc.

#### Key Principles

- New features → go into `pods/` as isolated modules.
- Route-level pages → go into `scenes/`, compose pods.
- Shared logic → move to `common/` if used by 2+ pods.
- Global setup → only lives in `app/`.
- Do not create new top-level folders without agreement.
