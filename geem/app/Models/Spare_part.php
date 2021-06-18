<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spare_part extends Model
{
    use HasFactory;

    public function requisitions()
    {
        return $this->hasMany(Requisition::class);
    }
}
