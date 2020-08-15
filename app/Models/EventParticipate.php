<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\ClubEvent;
// use App\Models\EventParticipate;
use App\User;

class EventParticipate extends Model
{
    protected $guarded = [];

    public function club_event()
    {
        return $this->belongsTo(ClubEvent::class,'event_id','id');

    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function club()
    {
        return $this->belongsTo(Club::class,'club_id','id');

    }

}
