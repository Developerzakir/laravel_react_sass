<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\WordController;
use Illuminate\Support\Facades\Route;

Route::get('/',[AdminController::class,'login'])->name('admin.login');
Route::post('/admin/auth',[AdminController::class,'auth'])->name('admin.auth');

Route::prefix('admin')->middleware('admin')->group(function(){
    Route::get('dashboard',[AdminController::class,'index'])->name('admin.index');
    Route::post('logout',[AdminController::class,'logout'])->name('admin.logout');

    //word route
    Route::resource('words',WordController::class,[
        'names'=>[
            'index'=>'admin.words.index',
            'create'=>'admin.words.create',
            'store'=>'admin.words.store',
            'edit'=>'admin.words.edit',
            'update'=>'admin.words.update',
            'destroy'=>'admin.words.destroy'
        ]
    ]);
});