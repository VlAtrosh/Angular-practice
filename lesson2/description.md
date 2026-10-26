Учебный проект, демонстрирующий, как разместить два SPA-фреймворка (React и Angular) в одном ASP.NET Core приложении. Оба фронтенда работают с общим REST API и используют одни и те же эндпоинты.

## Стек

- **Backend:** ASP.NET Core (.NET 10), Minimal API
- **Frontend 1:** React 19 + TypeScript + Vite
- **Frontend 2:** Angular 20 + TypeScript + Angular CLI
- **Прокси:** Vite Proxy (`vite.config.ts`) и Angular CLI Proxy (`proxy.conf.json`)

## Структура проекта

```text
HybridApp.Server/
├── Program.cs
├── HybridApp.Server.csproj
├── Properties/
│   └── launchSettings.json
└── ClientApp/
    ├── react/
    │   ├── src/
    │   ├── vite.config.ts
    │   └── package.json
    └── angular/
        ├── src/
        │   └── app/
        │       ├── app.ts
        │       ├── app.config.ts
        │       └── app.routes.ts
        ├── proxy.conf.json
        └── package.json
```

## Как это работает

- Сервер ASP.NET Core отдаёт эндпоинт `GET /api/weatherforecast` с тестовыми данными.
- В **режиме разработки** React и Angular запускаются на своих портах (`5173` и `4200`) и проксируют запросы `/api/*` на `https://localhost:7053`, чтобы не ловить CORS.
- В **режиме production** (после `dotnet publish`) оба фронтенда собираются в `wwwroot/react` и `wwwroot/angular`, а сервер раздаёт их по маршрутам `/react/*` и `/angular/*` через `MapFallbackToFile`.
- Оба SPA используют общий API и (опционально) общую cookie-аутентификацию `SharedAuth` с `Path=/`.

## Основные эндпоинты

| Метод | Путь                   | Описание                        |
| ----- | ---------------------- | ------------------------------- |
| GET   | `/api/weatherforecast` | Тестовые данные о погоде (JSON) |
| GET   | `/weatherforecast`     | (OpenAPI, если включено)        |
