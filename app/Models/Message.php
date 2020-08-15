<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Avatar;

class Message extends Model
{

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'from');

    }
    public function avatar()
    {
        return $this->belongsTo(Avatar::class,'avatar_id','id');

    }
}
