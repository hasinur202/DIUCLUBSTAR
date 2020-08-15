<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Comment;
use App\Models\CommentReply;
use App\Models\Post;
use App\Models\Avatar;
use App\Models\PostLike;

class Post extends Model
{
    protected $guarded = [];


    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function avatar()
    {
        return $this->belongsTo(Avatar::class,'avatar_id','id');

    }
    public function comments()
    {
        return $this->hasMany(Comment::class,'post_id','id');

    }
    public function commentReply()
    {
        return $this->hasMany(CommentReply::class,'post_id','id');

    }
    public function likes()
    {
        return $this->hasMany(PostLike::class,'post_id','id');

    }

}
