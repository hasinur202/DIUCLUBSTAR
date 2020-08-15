<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

// Auth::routes();

// Register
Route::post('/register','Authenticate\RegisterController@register')->name('register');
Route::post('/signUp','Authenticate\RegisterController@register')->name('signUp');
Route::post('/approve-register-user/{id}','Authenticate\RegisterController@approve_register_user');
Route::post('/reject-register-user/{id}','Authenticate\RegisterController@reject_register_user');
Route::post('/delete-register-user/{id}','Authenticate\RegisterController@delete_register_user');

//login
Route::post('/admin','Authenticate\LoginController@login')->name('admin');
Route::post('/','Authenticate\LoginController@login');
Route::get('/logout','Authenticate\LoginController@logout');

//messanger
Route::get('/online','MessageController@index');
Route::get('/messanger/{id}','MessageController@message');
Route::post('/send','MessageController@send');
Route::post('/avatar_store','AvatarController@avatar_store');
Route::post('/avatar_update/{id}','AvatarController@avatar_update');
Route::get('/edit','Authenticate\LoginController@edit');
Route::post('/update/{id}','Authenticate\LoginController@update');
Route::post('/post','PostController@store');
Route::post('/edit-post/{id}','PostController@edit');
Route::post('/hide-post/{id}','PostController@hide_post');
Route::get('/posts','PostController@index');
Route::post('/postComment','CommentController@store');
Route::get('/comments','CommentController@index');
Route::post('/store-reply','CommentController@storeCommentReply');
Route::post('/store-like','PostLikeController@storeLike');
Route::post('/update-like/{id}','PostLikeController@updateLike');
Route::post('/send-request','FriendshipController@send_request');
Route::get('/get-request','FriendshipController@get_request');
Route::post('/accept/{id}','FriendshipController@accept');
Route::post('/reject/{id}','FriendshipController@reject');
Route::post('/club-info','ClubController@store');
Route::get('/get-club-info','ClubController@index');
Route::post('/club-update/{id}','ClubController@update');
Route::post('/author-store','AuthorController@store');
Route::get('/get-author','AuthorController@index');
Route::post('/add-member','ClubMemberController@store');
Route::post('/member-reject/{id}','ClubMemberController@block');
Route::get('/get-member','ClubMemberController@index');
Route::get('/check','ClubMemberController@check');
Route::post('/approve/{id}','ClubMemberController@approve');
Route::post('/dismis/{id}','ClubMemberController@dismis');
Route::get('/countClubMember/{id}','ClubMemberController@count');
Route::get('/count-club-member-request/{id}','ClubMemberController@count_member_request');
Route::post('/club-post','ClubPostController@store');
Route::get('/get-club-post','ClubPostController@index');
Route::post('/store-club-post-like','ClubPostLikeController@store_like');

Route::post('/store-comment','ClubPostCommentController@store');
Route::get('/get-club-post-comment','ClubPostCommentController@index');
Route::post('/store-club-post-comment-reply','ClubPostCommentController@store_club_post_comment_reply');
Route::post('/create-event','ClubEventController@store');
Route::get('/get-event','ClubEventController@index');
Route::post('/update-event/{id}','ClubEventController@update');
Route::post('/delete-event/{id}','ClubEventController@delete');
Route::post('/skill-store','EventParticipateController@store');
Route::get('/get-skill','EventParticipateController@index');
Route::post('/approve-user/{id}','EventParticipateController@approve');
Route::post('/reject-user/{id}','EventParticipateController@reject');
Route::get('/get-noti','EventParticipateController@noti');
Route::post('/update-noti/{id}','EventParticipateController@update');
Route::post('/setting','SettingController@store');
Route::get('/get-setting','SettingController@index');
Route::post('/update-setting/{id}','SettingController@update');


Route::get('/home','Authenticate\LoginController@index')->name('home');
Route::get('/is-online/{id}','Authenticate\LoginController@isOnline');

