<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Models\Message;
use App\Models\Avatar;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Friendship;
use App\Models\Club;
use App\Models\Author;
use App\Models\ClubMember;
use App\Models\ClubPost;
use App\Models\EventParticipate;
use App\Models\Setting;
use App\User;
use Cache;
class User extends Authenticatable
{
    use Notifiable,HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $gurded = [];


    public function message()
    {
        return $this->hasMany(Message::class,'from');

    }
    public function setting()
    {
        return $this->hasMany(Setting::class,'user_id');

    }
    public function friendship()
    {
        return $this->hasMany(Friendship::class,'requester_id');

    }
    public function friendship_requested()
    {
        return $this->hasMany(Friendship::class,'requested_id');

    }
    public function club()
    {
        return $this->hasMany(Club::class,'user_id');

    }
    public function author()
    {
        return $this->hasMany(Author::class,'author_id');

    }
    public function event_participate()
    {
        return $this->hasMany(EventParticipate::class,'user_id','id');

    }
    public function avatar()
    {
        return $this->hasMany(Avatar::class,'user_id');

    }
    public function posts()
    {
        return $this->hasMany(Post::class,'user_id');

    }
    public function club_posts()
    {
        return $this->hasMany(ClubPost::class,'author_id');

    }
    public function comments()
    {
        return $this->hasMany(Comment::class,'user_id');

    }
    public function reply()
    {
        return $this->hasMany(CommentReply::class,'user_id','id');

    }
    public function club_members()
    {
        return $this->hasMany(ClubMember::class,'user_id','id');

    }
}
