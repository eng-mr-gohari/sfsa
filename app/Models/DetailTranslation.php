<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailTranslation extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['subject', 'content'];

}
