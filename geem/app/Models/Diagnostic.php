<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnostic extends Model
{
    use HasFactory;

    public function repairs()
    {
        return $this->hasMany(Repair::class);
    }

    public function requisitions()
    {
        return $this->hasMany(Requisition::class);
    }

    public function user()
    {
        return $this->belongsTo(user::class);
    }

    public function incident()
    {
        return $this->hasOne(Incident::class);
    }
}
