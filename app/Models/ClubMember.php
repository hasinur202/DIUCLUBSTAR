<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\Author;
use App\Models\ClubMember;
use App\User;

class ClubMember extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');

    }
    public function author()
    {
        return $this->belongsTo(Author::class,'author_id','id');

    }
    public function club()
    {
        return $this->belongsTo(Club::class,'club_id','id');

    }
}
