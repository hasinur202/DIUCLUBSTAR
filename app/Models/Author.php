<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Author;
use App\Models\ClubMember;
use App\Models\Club;
use App\Models\ClubEvent;
use App\User;

class Author extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function club()
    {
        return $this->belongsTo(Club::class,'club_id','id');

    }
    public function author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }
    public function club_members()
    {
        return $this->hasMany(ClubMember::class,'author_id','id');

    }
    public function club_events()
    {
        return $this->hasMany(ClubEvent::class,'author_id','id');

    }
}
