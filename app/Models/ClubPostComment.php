<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\ClubPostComment;
use App\Models\ClubPostCommentReply;
use App\User;

class ClubPostComment extends Model
{
    protected $gurded = [];

    public function club_author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }
    // public function avatar()
    // {
    //     return $this->belongsTo(Avatar::class,'avatar_id','id');

    // }
    public function club_post()
    {
        return $this->belongsTo(ClubPost::class,'club_post_id','id');

    }
    public function club_post_comment_reply()
    {
        return $this->hasMany(ClubPostCommentReply::class,'club_post_comment_id');

    }
}
