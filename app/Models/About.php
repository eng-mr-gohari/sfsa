<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Spatie\MediaLibrary\InteractsWithMedia;

class About extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;
    use InteractsWithMedia;

    protected $table = "abouts";
    public $translatedAttributes = ['subject', 'content'];
}
