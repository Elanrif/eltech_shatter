# Laravel Installation

To install [https://laravel.com/docs/12.x/installation] Laravel on Windows, follow the steps below:

1. Open PowerShell as an administrator.

```bash
   # Run as administrator...
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

# Creating an Application Using a Starter Kit
To create a new Laravel application using one of our starter kits, you should first install PHP and the Laravel CLI tool. If you already have PHP and Composer installed, you may install the Laravel installer CLI tool via Composer:
 ```bash
    composer global require laravel/installer
```
Then, create a new Laravel application using the Laravel installer CLI. The Laravel installer will prompt you to select your preferred starter kit:
```bash
    laravel new my-app
```

# Create Migrations, Controllers, ... Request
Laravel includes [Eloquent, an object-relational mapper (ORM)](https://laravel.com/docs/12.x/eloquent) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table.

```bash
    # Generate a model and a migration
    php artisan make:model Flight --migration --controller --resource --requests
    php artisan make:model Flight -mcrR

    # Generate a Request 
    php artisan make:request Store[Flight]Request
    php artisan make:request Update[Flight]Request

    # Shortcut to generate a model, migration, factory, seeder, policy, controller, 
    # and form requests...
    php artisan make:model Flight --all
    php artisan make:model Flight -a

    # Generate a pivot model...
    php artisan make:model Member --pivot
    php artisan make:model Member -p
```

## Display Laravel Routes
[The command allows us](https://stillat.com/blog/2016/12/07/laravel-artisan-route-command-the-routelist-command) to display all routes in laravel is showed below.

```bash
    # Display all routes
    php artisan route:list

    # Filter by name
    php artisan route:list --name=posts
```


# Manage migrations rollback, reset ...
If you have made changes to a column in an existing migration or something else and want to reapply all migrations to update your database structure, here are the steps to follow:

```bash
    #Sumarize uses command :
    php artisan migrate:refresh
    
    php artisan migrate:rollback

    php artisan migrate:reset


```
## Run migrations
Laravel run migrations from this command below
```bash
    php artisan migrate
```

## Create RESTfull API and Exclude Csrf token
Sometimes you may wish to [exclude a set of URIs from CSRF protection](https://laravel.com/docs/12.x/csrf#csrf-excluding-uris). For example, if you are using Stripe to process payments...

```bash
    php artisan make:controller Api/PostController --api
```

## Clear cache
Sometimes your need to clear laravel caches and run projects
```bash
    # Clear cache
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    php artisan optimize:clear

    # After that run the project
    php artisan serve

```

# The public disk
The [public disk](https://laravel.com/docs/12.x/filesystem) included in your application's filesystems configuration file is intended for files that are going to be publicly accessible. 
By stores its files in storage/app/public.
```bash
    # Storage link
    php artisan storage:link
```

# Inertia router, Manual visits
It's also possible [to manually make Inertia visits](https://inertiajs.com/manual-visits#method) / requests programmatically via JavaScript. 
This is accomplished via the router.visit() method.
However, it's generally more convenient to use one of Inertia's shortcut request methods. 
These methods share all the same options as router.visit().
```bash

    import { router } from '@inertiajs/react'

    router.get(url, data, options)
    router.post(url, data, options)
    router.put(url, data, options)
    router.patch(url, data, options)
    router.delete(url, options)
    router.reload(options) // Uses the current URL

```

# Dayjs 

[Day.js](https://day.js.org/en/) is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.

[Format](https://day.js.org/docs/en/display/format), Get the formatted date according to the string of tokens passed in.

[Time fron now](https://day.js.org/docs/en/display/from-now), returns the string of relative time from now.

```bash
    # Get the formatted date according to the string of tokens passed in.
    # To escape characters, wrap them in square brackets (e.g. [MM]).

    dayjs().format() 
    # current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

    dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
    # 'YYYYescape 2019-01-25T00:00:00-02:00Z'

    dayjs('2019-01-25').format('DD/MM/YYYY') # '25/01/2019'

    # This requires the RelativeTime plugin to work
    dayjs.extend(relativeTime)

    dayjs('1999-01-01').fromNow() // 22 years ago

```
