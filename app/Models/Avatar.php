<?php

namespace App\Models;
use App\User;
use Illuminate\Database\Eloquent\Model;
use App\Models\Avatar;
use App\Models\Post;
use App\Models\Comment;
use App\Models\CommentReply;
use App\Models\ClubPostCommentReply;

class Avatar extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'id');

    }
    public function comment()
    {
        return $this->hasMany(Comment::class,'avatar_id','id');

    }
    public function reply()
    {
        return $this->hasMany(CommentReply::class,'avatar_id','id');

    }
    public function club_post_comment_reply()
    {
        return $this->hasMany(ClubPostCommentReply::class,'avatar_id','id');

    }
    public function post()
    {
        return $this->hasMany(Post::class,'avatar_id','id');

    }
    public function message()
    {
        return $this->hasMany(Message::class,'avatar_id','id');

    }
}
