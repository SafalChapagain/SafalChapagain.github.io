function syllable_count(word)
{
    if (gb_dict[word])
    {
        return gb_dict[word][1];
    }
    else
    {
        return 0;
    }
}

function convert(word)
{
    if (gb_dict[word])
    {
        return gb_dict[word][0];
    }
    else
    {
        return null;
    }
}