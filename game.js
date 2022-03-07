let history = [];
var currentWord = "";
var currentScores = [];

$(document).ready(function()
{
    currentWord = getTodaysWord();
    createWord(getTodaysWord());

    for (let i of currentWord)
    {
        currentScores.push(0);
    }

    generateTooltips();
    $("#guessButton").click(function()
    {
        triedGuess();
    });
    $("#guessInput").keyup(function(e)
    {
        if (e.keyCode == 13)
        {
            triedGuess();
        }
    });
});

const words = ['basically', 'abortion', 'serious', 'various', 'ocean', 'stock', 'simple', 'regulation', 'feature', 'shadow', 'receive', 'sound', 'alone', 'exchange', 'appearance', 'ticket', 'circumstance', 'pocket', 'growth', 'sport', 'variable', 'revenue', 'member', 'blame', 'last', 'friend', 'studio', 'public', 'green', 'strength', 'initial', 'stop', 'simply', 'single', 'individual', 'claim', 'agreement', 'weather', 'extra', 'normal', 'field', 'threaten', 'chest', 'contemporary', 'sister', 'point', 'resident', 'opposition', 'party', 'manner', 'rest', 'social', 'incident', 'just', 'dress', 'traditional', 'sugar', 'black', 'belong', 'afford', 'enough', 'provide', 'structure', 'possibly', 'crazy', 'broad', 'device', 'brother', 'open', 'intend', 'funny', 'mix', 'context', 'quick', 'technology', 'official', 'contribute', 'before', 'analysis', 'coach', 'capacity', 'around', 'change', 'village', 'activity', 'brain', 'political', 'speed', 'behavior', 'street', 'hero', 'forest', 'drive', 'beside', 'total', 'engine', 'admit', 'arrive', 'branch', 'whether', 'interest', 'however', 'trend', 'competition', 'response', 'actual', 'chicken', 'pressure', 'physical', 'restaurant', 'unique', 'medical', 'skin', 'perception', 'herself', 'consumer', 'solution', 'teaching', 'resolution', 'extremely', 'careful', 'policy', 'stare', 'best', 'terrible', 'primary', 'analyst', 'radio', 'require', 'attention', 'victim', 'silence', 'often', 'spot', 'estate', 'repeat', 'positive', 'candidate', 'judge', 'break', 'religious', 'function', 'circle', 'please', 'develop', 'damage', 'generally', 'assume', 'confirm', 'figure', 'lift', 'data', 'profit', 'city', 'ensure', 'video', 'wonder', 'local', 'agency', 'oppose', 'divide', 'include', 'next', 'moment', 'negative', 'writer', 'connect', 'significant', 'particular', 'sales', 'requirement', 'press', 'block', 'national', 'truly', 'agree', 'seven', 'labor', 'human', 'test', 'somewhere', 'very', 'intervention', 'ahead', 'perform', 'middle', 'little', 'guest', 'establish', 'everything', 'matter', 'investigation', 'district', 'famous', 'memory', 'actor', 'gather', 'regular', 'attract', 'actually', 'visit', 'citizen', 'reveal', 'heavy', 'struggle', 'grab', 'lady', 'approach', 'shoulder', 'since', 'credit', 'situation', 'holiday', 'acknowledge', 'employee', 'trade', 'space', 'spirit', 'screen', 'body', 'quiet', 'trouble', 'officer', 'trial', 'create', 'build', 'police', 'largely', 'travel', 'behind', 'location', 'enter', 'gold', 'traffic', 'cover', 'basketball', 'certainly', 'artist', 'troop', 'skill', 'learning', 'morning', 'speech', 'discover', 'safety', 'researcher', 'desire', 'fruit', 'management', 'chance', 'international', 'governor', 'brown', 'particularly', 'western', 'consider', 'surface', 'somewhat', 'cost', 'clean', 'temperature', 'track', 'destroy', 'murder', 'happen', 'land', 'worry', 'coffee', 'disappear', 'climb', 'strong', 'reporter', 'someone', 'evidence', 'control', 'hardly', 'lesson', 'collection', 'movement', 'academic', 'relationship', 'billion', 'spring', 'fashion', 'species', 'drug', 'article', 'interview', 'obvious', 'aspect', 'person', 'fact', 'investment', 'presence', 'industry', 'essential', 'least', 'freedom', 'express', 'classroom', 'past', 'always', 'desk', 'station', 'component', 'send', 'health', 'influence', 'identity', 'commercial', 'section', 'gender', 'cultural', 'rely', 'result', 'belief', 'protect', 'notice', 'reality', 'forward', 'remove', 'probably', 'locate', 'apparently', 'works', 'direction', 'usually', 'society', 'economic', 'church', 'vegetable', 'thinking', 'level', 'obviously', 'decade', 'importance', 'flight', 'across', 'remind', 'movie', 'critic', 'yellow', 'sector', 'slip', 'maintain', 'strategy', 'able', 'panel', 'software', 'jury', 'once', 'corporate', 'growing', 'population', 'himself', 'sweet', 'foreign', 'only', 'popular', 'debate', 'encourage', 'rather', 'politician', 'construction', 'finger', 'support', 'thank', 'define', 'doctor', 'status', 'attorney', 'table', 'quality', 'center', 'extend', 'deliver', 'under', 'muscle', 'sense', 'soft', 'writing', 'professor', 'average', 'criminal', 'strange', 'operate', 'huge', 'remember', 'below', 'specific', 'insist', 'planet', 'reader', 'involve', 'regime', 'feeling', 'music', 'potential', 'material', 'spend', 'blood', 'sample', 'daily', 'military', 'stuff', 'concern', 'argument', 'direct', 'accident', 'deny', 'commitment', 'surprise', 'anyway', 'news', 'ancient', 'perhaps', 'challenge', 'leadership', 'percentage', 'intelligence', 'nearly', 'lots', 'attitude', 'willing', 'later', 'democratic', 'instead', 'anybody', 'baby', 'participant', 'typical', 'fix', 'expand', 'together', 'somebody', 'discuss', 'anything', 'publish', 'quickly', 'after', 'network', 'principle', 'practice', 'pursue', 'marriage', 'yourself', 'player', 'conservative', 'perspective', 'assessment', 'culture', 'reason', 'effort', 'election', 'photo', 'sleep', 'household', 'technique', 'pound', 'nuclear', 'place', 'character', 'treat', 'emotional', 'plastic', 'prison', 'apartment', 'department', 'club', 'anyone', 'train', 'representative', 'tonight', 'service', 'bridge', 'tiny', 'promise', 'prepare', 'battle', 'indicate', 'event', 'nation', 'recommend', 'action', 'protection', 'decision', 'crime', 'neighborhood', 'employ', 'tomorrow', 'politics', 'common', 'class', 'purpose', 'window', 'ethnic', 'today', 'beauty', 'crisis', 'amount']

function getTodaysWord()
{
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2022, 1, 1);
    const secondDate = new Date();
    
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) - 10;

    $("#wordCount").text(`Word ${diffDays % words.length}`)

    return convert(words[diffDays % words.length]);
}

function highlightSquares(scores, squares, setText=false)
{
    for (let i = 0; i < squares.length; i++)
    {
        let elm = $(squares[i]);

        if (scores[i] == 1)
        {
            elm.css("color", "#ffffff");
            elm.css("background-color", "#6aaa64");

            if (setText)
            {
                elm.children().text(currentWord.split(" ")[i]);
            }
        }
        else
        {
            break;
        }
    }

    for (let i = squares.length - 1; i >= 0; i--)
    {
        let elm = $(squares[i]);
        
        if (scores[i] == 1)
        {
            elm.css("color", "#ffffff");
            elm.css("background-color", "#6aaa64");

            if (setText)
            {
                elm.children().text(currentWord.split(" ")[i]);
            }
        }
        else
        {
            break;
        }
    }

    generateTooltips();
}

function highlightPartialSquares(guessing, squares)
{
    for (let i = 0; i < squares.length; i++)
    {
        let elm = $(squares[i]);

        if (currentWord.split(" ").includes(guessing.split(" ")[i]))
        {
            elm.css("color", "#ffffff");
            elm.css("background-color", "#c9b458");
        }
    }
}

function updateScore(scores)
{
    if (currentScores != scores)
    {
        highlightSquares(scores, document.querySelectorAll("#currentWord .phonemeContainer"), true);
        currentScores = scores;

        let complete = true;

        for (let i of currentScores)
        {
            if (i == 0)
            {
                complete = false;
                break;
            }
        }

        if (complete)
        {
            $("#inputContainer").hide("drop", {direction: "right"}, 400);
        }
    }
}

function triedGuess()
{
    let word = $("#guessInput").val().toLowerCase();
    let result = guess(word);

    if (result == null || history.includes(word))
    {
        $("#guessButton").effect("shake", {distance: 5});
    }
    else
    {
        history.push(word);       

        let phonemeHTML = getPhonemeHTML(result);
        let wordContainer = $(`<span style="display: none;">${history.length}. ${word}</span><div class="wordContainer" style="display: none;">${phonemeHTML}</div>`);


        $("#historyContainer").prepend(wordContainer);
        wordContainer.slideDown("slow");


        generateTooltips();

        let scores = count_score(currentWord, result);
        
        //highlightPartialSquares(result, wordContainer.children()); 
        highlightSquares(count_score(result, currentWord), wordContainer.children());
        

        updateScore(scores);
    }
}

function guess(word)
{
    if (word.length <= 1) return null;

    let ipa = convert(word);
    
    return ipa;
}

function getPhonemeHTML(ipa, noText=false)
{
    let ret = "";

    for (const c of ipa.split(" "))
    {
        boxText = "";
        if (!noText) boxText = c; 
        ret += `<div class="phonemeContainer" data-toggle="tooltip" data-placement="top"><span>${boxText}</span></div>`
    }

    return ret;
}


function createWord(ipa)
{
    $(".phonemeContainer").remove();

    $("#currentWord").append(getPhonemeHTML(ipa, true));
}

function generateTooltips()
{
    let tooltipTitles = {'ɑ': 'c<b>a</b>r', 'd': '<b>d</b>oor', 'v': 'ca<b>v</b>e', 'k': '<b>c</b>ash', 'æ': 'h<b>a</b>ve', 'b': '<b>b</b>ag', 'ɐ': 'n<b>u</b>t', 't': '<b>t</b>ime', 'w': '<b>w</b>all', 'ə': '<b>a</b>live', 's': '<b>s</b>ea', 'ɪ': 'b<b>i</b>t', 'z': '<b>z</b>oo', 'l': '<b>l</b>et', 'ʊ': 'f<b>oo</b>t', 'n': 'pa<b>n</b>', 'ɛ': '<b>e</b>gg', 'i': 's<b>ee</b>', 'ɹ': '<b>r</b>un', 'e': 'p<b>a</b>in', 'ʃ': '<b>s</b>ure', 'ŋ': 'ri<b>ng</b>', 'ɒ': 'm<b>o</b>th', 'm': '<b>m</b>an', 'ʌ': 'r<b>u</b>n', 'h': '<b>h</b>am', 'ɔ': 'l<b>aw</b>', 'ʒ': 'vi<b>s</b>ion', 'j': '<b>y</b>es', 'u': 'l<b>o</b>se', 'ɡ': '<b>g</b>et', 'p': '<b>p</b>en', 'θ': '<b>th</b>in', 'ɜ': 'f<b>ur</b>', 'a': 'p<b>i</b>e', 'f': '<b>f</b>an', 'ð': '<b>th</b>is', 'r': 've<b>r</b>y', 'əʊ': 'h<b>o</b>pe', 'eɪ': 'd<b>ay</b>', 'dʒ': 'a<b>ge</b>', 'iə': 'n<b>ear</b>', 'tʃ': '<b>ch</b>at', 'aɪ': 'p<b>ie</b>', 'aʊ': 'h<b>ou</b>se', 'ɪə': 'h<b>ere</b>', 'ɔɪ': 'b<b>oy</b>'};    
    for (let i of $('.phonemeContainer'))
    {
        if (tooltipTitles[$(i).text().trim()] !== undefined)
        {
            $(i).tooltip({html: true, title: tooltipTitles[$(i).text().trim()], container: i });
        }
    }
}


function same_sound(ipa1, ipa2)
{
    if (ipa1 === ipa2) return true;

    const sounds = [["ɪə", "iə"], ["ɹ", "r"]];

    for (let i of sounds)
    {
        if (i.includes(ipa1) && i.includes(ipa2))
        {
            return true;
        }
    }
    
    return false;
}

function count_score(ipa1, ipa2)
{
    ipa1 = ipa1.split(" ");
    ipa2 = ipa2.split(" ");

    let ipaLonger = ipa1;
    let ipaShorter = ipa2;

    if (ipa2.length > ipa1.length)
    {
        ipaLonger = ipa2;
        ipaShorter = ipa1;
    }

    scores = [];

    for (let i = 0; i < ipa1.length; i++)
    {
        scores.push(0);
    }

    for (let i = 0; i < ipaShorter.length; i++)
    {
        if (same_sound(ipaShorter[i], ipaLonger[i]))
        {
            scores[i] = 1.0;
        }
        else
        {
            break;
        }
    }

    for (let i = 1; i <= ipaShorter.length; i++)
    {
        if (same_sound(ipaShorter[ipaShorter.length - i], ipaLonger[ipaLonger.length - i]))
        {
            scores[scores.length - i] = 1.0;
        }
        else
        {
            break;
        }
    }


    return scores;
}

