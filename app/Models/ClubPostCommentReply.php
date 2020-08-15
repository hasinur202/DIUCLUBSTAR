<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\ClubPostComment;
use App\Models\ClubPost;
use App\Models\Avatar;
use App\Models\ClubPostCommentReply;

class ClubPostCommentReply extends Model
{
    protected $gurded = [];

    public function club_author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }
    public function avatar()
    {
        return $this->belongsTo(Avatar::class,'avatar_id','id');

    }
    public function club_post_comment()
    {
        return $this->belongsTo(ClubPostComment::class,'club_post_comment_id','id');

    }
    public function club_post()
    {
        return $this->belongsTo(ClubPost::class,'club_post_id','id');

    }
}
