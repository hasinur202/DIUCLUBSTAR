<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\Author;
use App\Models\ClubMember;
use App\Models\ClubPost;
use App\Models\ClubEvent;
use App\User;
use App\Models\EventParticipate;


class Club extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function authors()
    {
        return $this->hasMany(Author::class,'club_id','id');

    }
    public function club_members()
    {
        return $this->hasMany(ClubMember::class,'club_id','id');

    }
    public function club_posts()
    {
        return $this->hasMany(ClubPost::class,'club_id','id');

    }
    public function club_event()
    {
        return $this->hasMany(ClubEvent::class,'club_id','id');

    }
    public function event_participate()
    {
        return $this->hasMany(EventParticipate::class,'club_id','id');

    }
}
