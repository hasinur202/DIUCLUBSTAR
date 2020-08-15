<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Comment;
use App\Models\Avatar;
use App\Models\CommentReply;

class CommentReply extends Model
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
    public function comment()
    {
        return $this->belongsTo(Comment::class,'comment_id','id');

    }
    public function reply()
    {
        return $this->belongsTo(CommentReply::class,'post_id','id');

    }
}
