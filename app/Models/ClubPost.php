<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\ClubPostComment;
use App\Models\ClubPostCommentReply;
use App\Models\ClubPostLike;
use App\User;

class ClubPost extends Model
{
    protected $guarded = [];


    public function author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }
    public function club()
    {
        return $this->belongsTo(Club::class,'club_id','id');

    }
    // public function avatar()
    // {
    //     return $this->belongsTo(Avatar::class,'avatar_id','id');

    // }
    public function club_post_comments()
    {
        return $this->hasMany(ClubPostComment::class,'club_post_id','id');

    }
    public function club_post_comment_reply()
    {
        return $this->hasMany(ClubPostCommentReply::class,'club_post_id','id');

    }
    public function club_post_likes()
    {
        return $this->hasMany(ClubPostLike::class,'club_post_id','id');

    }
}
