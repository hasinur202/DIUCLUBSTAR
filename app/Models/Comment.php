<?php

namespace App\Models;
use App\User;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Avatar;
use App\Models\CommentReply;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $gurded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function avatar()
    {
        return $this->belongsTo(Avatar::class,'avatar_id','id');

    }
    public function post()
    {
        return $this->belongsTo(Post::class,'post_id','id');

    }
    public function reply()
    {
        return $this->hasMany(CommentReply::class,'comment_id');

    }
}
