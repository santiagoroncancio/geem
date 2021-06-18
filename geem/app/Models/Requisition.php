<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requisition extends Model
{
    use HasFactory;

    public function diagnostic()
    {
        return $this->belongsTo(Diagnostic::class);
    }

    public function spare_part()
    {
        return $this->belongsTo(spare_part::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
