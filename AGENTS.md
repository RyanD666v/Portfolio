# Agent Guide

Tài liệu này hướng dẫn agent làm việc trong dự án `Portfolio`. Hãy đọc file này trước khi chỉnh code để giữ thay đổi nhất quán với cấu trúc hiện tại.

## Tổng Quan Dự Án

Đây là frontend React/Vite cho portfolio website.

- Runtime: React 19, Vite 8, ES modules.
- Language: TypeScript, JSX runtime `react-jsx`.
- Routing: `react-router` 8, route config khai báo trong `src/router/router.tsx`.
- i18n: `i18next`, `react-i18next`, locale JSON trong `src/i18n/locales`.
- Styling: CSS thuần qua `src/index.css` và `src/App.css`.
- Alias: `~/*` trỏ tới `src/*`.

## Lệnh Thường Dùng

```bash
npm run dev
npx tsc -b
npm run lint
npm run build
npm run preview
npm run prettier:fix
```

Chưa có test runner trong `package.json`. Khi thay đổi code TypeScript/React, tối thiểu chạy `npx tsc -b` và `npm run lint`. Khi thay đổi routing, Vite config, dependency, lazy import hoặc build-sensitive code, chạy thêm `npm run build`.

Lưu ý trên Windows sandbox: `npm run build` có thể lỗi `spawn EPERM` khi Vite load config. Nếu `npx tsc -b` đã pass và lỗi chỉ là `spawn EPERM`, chạy lại build ngoài sandbox để xác nhận.

## Cấu Trúc Chính

- `src/main.tsx`: mount React app.
- `src/App.tsx`: render `RouterProvider`.
- `src/router/index.tsx`: tạo `createBrowserRouter` và export `appRoutes`.
- `src/router/router.tsx`: khai báo route config như `fixedRoutes`, `notFoundRoute`, `appRoutes` và map sang React Router routes.
- `src/router/routes`: route-level components, nơi lazy-load page và bọc bằng `SuspenseWrapper`.
- `src/components/common/SuspenseWrapper.tsx`: wrapper `Suspense` dùng chung cho lazy route.
- `src/components/common/ErrorBoundary.tsx`: error boundary dùng cho route `errorElement`.
- `src/pages`: page-level components, mỗi page nên có folder riêng với `index.tsx`.
- `src/constants`: constants dùng chung, route paths chính đặt trong `app.paths.ts`.
- `src/i18n/index.ts`: khởi tạo i18n.
- `src/i18n/locales`: locale JSON `en.json`, `vi.json` và config ngôn ngữ.
- `src/assets`: ảnh và SVG import trực tiếp từ code.
- `public`: static assets dùng qua public URL như `/icons.svg`.

## Quy Ước Import Và Module

- Dùng alias `~` khi import từ `src`, ví dụ:

```ts
import { APP_PATHS } from '~/constants/app.paths'
import HomePage from '~/pages/Home'
```

- Dùng relative import cho file cùng module gần nhau, ví dụ trong `src/router` có thể dùng `./routes/HomeRoute`.
- Không hard-code route path trong component nếu path đã có trong `APP_PATHS`.
- Giữ TypeScript type rõ ràng khi export type dùng chung.
- Xóa import/biến thừa khi chỉnh file.
- Không thêm barrel export nếu chưa có nhu cầu thật.

## Routing

Route hiện tại là route tĩnh. Route config được khai báo tập trung trong `src/router/router.tsx`, sau đó `src/router/index.tsx` dùng config đó để tạo `createBrowserRouter`.

Route có 3 phần chính:

- Path constants trong `src/constants/app.paths.ts`.
- Route config như `fixedRoutes`, `notFoundRoute`, `appRoutes` trong `src/router/router.tsx`.
- Route-level component trong `src/router/routes`.
- Page component trong `src/pages`.

Router được mount tại `src/App.tsx` qua:

```tsx
<RouterProvider router={router} />
```

Khi thêm page mới:

1. Thêm path vào `src/constants/app.paths.ts`.
2. Tạo page component trong `src/pages/<PageName>/index.tsx`.
3. Tạo route component trong `src/router/routes/<PageName>Route.tsx`.
4. Lazy-load page trong route component bằng `lazy(() => import(...))`.
5. Bọc page bằng `SuspenseWrapper` để dùng `Suspense` fallback.
6. Import route component trong `src/router/router.tsx`.
7. Thêm route config mới vào `fixedRoutes` hoặc `appRoutes`.
8. `reactRouterRoutes` tự gắn `errorElement: <ErrorBoundary />` cho route config.
9. Nếu page có link điều hướng, dùng `APP_PATHS` thay vì hard-code string path.

Pattern route component:

```tsx
import { lazy } from 'react'
import SuspenseWrapper from '~/components/common/SuspenseWrapper'

const AboutPage = lazy(() => import('~/pages/About'))

function AboutRoute() {
  return (
    <SuspenseWrapper>
      <AboutPage />
    </SuspenseWrapper>
  )
}

export default AboutRoute
```

Pattern khai báo route config:

```tsx
import { APP_PATHS } from '~/constants/app.paths'

export const appRoutes = [
  {
    path: APP_PATHS.about,
    layout: 'main',
    page: 'about',
    element: <AboutRoute />
  }
]
```

Route fallback hiện dùng:

```ts
APP_PATHS.notFound = '*'
```

Khi thêm route mới, giữ `notFoundRoute` ở cuối `appRoutes` để các path không khớp rơi vào `NotFoundRoute`.

Không đặt `lazy()` constants trực tiếp trong `src/router/index.tsx`, vì ESLint `react-refresh/only-export-components` sẽ báo lỗi khi file vừa export router vừa khai báo component/lazy component.

Hiện dự án chưa có protected route, nested layout route, dynamic route, loader/action hoặc route guard. Nếu thêm các cơ chế này, phải tách rõ vào `src/router` thay vì nhét logic điều hướng vào page component.

## Component/Page Pattern

- Page public có folder riêng trong `src/pages/<PageName>` với `index.tsx` là entry chính.
- Nếu page có style riêng, đặt file style cạnh page trong cùng folder và chỉ import trong page đó.
- Component dùng lại đặt trong `src/components/<Domain>` hoặc `src/components/common` nếu thật sự dùng chung.
- Loading/lazy route dùng `SuspenseWrapper`.
- Error route dùng `ErrorBoundary`.
- Route-level component đặt trong `src/router/routes` và không chứa UI page phức tạp; route component chỉ nên lo lazy-load/bọc wrapper.
- Page component không tự khai báo route path; dùng `APP_PATHS` khi cần điều hướng.

## i18n

- i18n khởi tạo trong `src/i18n/index.ts`.
- Ngôn ngữ hỗ trợ được khai báo trong `src/i18n/locales/config.ts`.
- Locale hiện có: `en`, `vi`.
- Default namespace hiện tại: `common`.
- Khi thêm text user-facing có khả năng cần đa ngôn ngữ, thêm key vào cả `en.json` và `vi.json`.
- Không tạo thêm namespace hoặc cấu trúc thư mục locale mới nếu chưa cập nhật `src/i18n/index.ts` và `config.ts`.
- Khi đổi ngôn ngữ, đảm bảo `document.documentElement.lang` vẫn được cập nhật qua listener hiện có.

## Constants

- Route path chính đặt trong `src/constants/app.paths.ts`.
- Export constants dạng object `as const` để giữ literal type.
- Nếu thêm nhóm constants mới, đặt tên file theo domain rõ ràng trong `src/constants`.
- Không dùng magic string lặp lại nhiều nơi nếu có thể đưa vào constants.

## UI Và Styling

- Dự án hiện dùng CSS thuần; ưu tiên mở rộng `src/App.css` hoặc tạo CSS gần phạm vi component nếu cần.
- Giữ style hiện tại: class/id rõ ràng, spacing đơn giản, responsive qua media query.
- Không thêm UI library mới nếu task không yêu cầu.
- Không đưa text mô tả kỹ thuật vào UI trừ khi đó là nội dung thật của page.
- Với loading state route, dùng `SuspenseWrapper` thay vì tạo fallback rải rác.

## TypeScript Và Alias

- Alias TypeScript được khai báo trong `tsconfig.app.json`, không đặt ở `tsconfig.json` root.
- `tsconfig.json` root chỉ điều phối project references.
- Vite alias được khai báo trong `vite.config.ts`.
- Không thêm `baseUrl` vào TypeScript 6 nếu không cần; project hiện dùng `paths` trực tiếp.
- Khi đổi alias, kiểm tra đồng bộ cả `tsconfig.app.json` và `vite.config.ts`.

## Format Và Lint

Giữ format theo `.prettierrc`:

- Single quote.
- No semicolon.
- Trailing comma none.
- Tab width 2.
- Print width 120.
- JSX single quote.

ESLint dùng flat config trong `eslint.config.js` với:

- `@eslint/js`
- `typescript-eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

Không tắt rule lint trong file nếu chưa có lý do rõ ràng.

## Quy Tắc Chỉnh Sửa

- Giữ thay đổi nhỏ, đúng phạm vi task.
- Không refactor rộng khi chỉ cần sửa lỗi hoặc thêm cấu hình nhỏ.
- Không đổi tên file/folder public API nếu chưa kiểm tra toàn bộ import.
- Không sửa `.env`, credential, token, hoặc config bí mật nếu không được yêu cầu.
- Khi file đã có thay đổi sẵn, đọc kỹ và chỉ thêm phần cần thiết; không revert thay đổi không phải của mình.
- Ưu tiên pattern hiện có trong repo hơn tạo abstraction mới.
- Dùng `apply_patch` cho chỉnh sửa thủ công.

## Checklist Trước Khi Bàn Giao

- Chạy `npx tsc -b` khi thay đổi TypeScript/React.
- Chạy `npm run lint` khi thay đổi code trong `src`.
- Chạy `npm run build` khi thay đổi router, lazy import, Vite config, dependency hoặc build-sensitive code.
- Kiểm tra alias `~` nếu thêm import mới.
- Kiểm tra route fallback `APP_PATHS.notFound` nếu thêm route mới.
- Kiểm tra locale `en.json` và `vi.json` nếu thêm text cần i18n.

## Ghi Chú Đáng Chú Ý

- `dist/` là build output, không chỉnh tay.
- `README.md` còn mang nhiều nội dung template Vite; chưa phải tài liệu dự án hoàn chỉnh.
