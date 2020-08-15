<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\ClubPost;
use App\Models\ClubPostLike;

class ClubPostLike extends Model
{
    protected $gurded = [];

    public function club_author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }

    public function club_post()
    {
        return $this->belongsTo(ClubPost::class,'club_post_id','id');

    }
}
