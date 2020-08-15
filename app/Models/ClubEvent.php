<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\Author;
use App\User;
use App\Models\EventParticipate;

class ClubEvent extends Model
{
    protected $guarded = [];

    // public function author()
    // {
    //     return $this->belongsTo(Author::class,'author_id','id');

    // }
    public function author()
    {
        return $this->belongsTo(User::class,'author_id','id');

    }
    public function club()
    {
        return $this->belongsTo(Club::class,'club_id','id');

    }
    public function event_participate()
    {
        return $this->hasMany(EventParticipate::class,'event_id','id');

    }
}
