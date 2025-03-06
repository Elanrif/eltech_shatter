# Laravel Installation

To install [https://laravel.com/docs/12.x/installation] Laravel on Windows, follow the steps below:

1. Open PowerShell as an administrator.

```bash
   # Run as administrator....
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
```

```bash
    # Install the Laravel Installer
    composer global require laravel/installer
```

2. Creating an Application
```bash
    laravel new example-app
```

```bash
    # One the application created, start local development server
    cd example-app
    npm install && npm run build
    composer run dev
```

# Laravel Starter kits
The **Laravel React Starter Kit** provides a robust, modern starting point for building Laravel applications with a React frontend using Inertia.  

- [Laravel React Starter Kit](https://laravel.com/docs/12.x/starter-kits#react)  
- [Inertia](https://inertiajs.com/)  
- [React](https://fr.react.dev/)  
- [Shadcn](https://ui.shadcn.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)