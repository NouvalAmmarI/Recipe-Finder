<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/FinalProject', function () {
    return view('FinalProject');
});

Route::get('/contact', function () {
    return view('contact');
});
