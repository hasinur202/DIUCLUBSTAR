<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Friendship;

class Friendship extends Model
{
    protected $gurded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'requester_id','id');

    }
    public function requested_user()
    {
        return $this->belongsTo(User::class,'requested_id','id');

    }
}
