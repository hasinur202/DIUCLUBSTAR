<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Post;
use App\Models\PostLike;

class PostLike extends Model
{
    protected $gurded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }

    public function post()
    {
        return $this->belongsTo(Post::class,'post_id','id');

    }
}
