<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Subscription extends Model
{
    protected $guarded = [];

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected function casts(): array
    {
        return [
            'current_period_start' => 'datetime',
            'current_period_end' => 'datetime',
        ];
    }

    public function getCurrentPeriodStartAttribute($value)
    {
        return Carbon::parse($value)->format("Y-m-d h:s:i");
    }
    public function getCurrentPeriodEndAttribute($value)
    {
        return Carbon::parse($value)->format("Y-m-d h:s:i");
    }
}
