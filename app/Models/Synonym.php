<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Synonym extends Model
{
    protected $guarded = [];

    public function word()
    {
        return $this->belongsTo(Word::class);
    }
}
