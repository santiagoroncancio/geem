<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function incidents()
    {
        return $this->hasMany(Incident::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
