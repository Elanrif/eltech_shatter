<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/accueil', function () {
    return Inertia::render('accueil');
})->name('accueil');

Route::get('/posts/image', function () {
    return Inertia::render('post/post-image');
})->name('post.image');

Route::get('/posts/question', function () {
    return Inertia::render('post/post-question');
})->name('post.question');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/api.php';
require __DIR__.'/post.php';
