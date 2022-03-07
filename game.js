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

const words = {'basically': 4, 'abortion': 3, 'serious': 3, 'various': 3, 'ocean': 2, 'stock': 1, 'simple': 2, 'regulation': 4, 'feature': 2, 'shadow': 2, 'receive': 2, 'sound': 1, 'alone': 2, 'exchange': 2, 'appearance': 3, 'ticket': 2, 'circumstance': 3, 'pocket': 2, 'growth': 1, 'sport': 1, 'variable': 4, 'revenue': 3, 'member': 2, 'blame': 1, 'last': 1, 'friend': 1, 'studio': 3, 'public': 2, 'green': 1, 'initial': 3, 'stop': 1, 'simply': 2, 'single': 2, 'individual': 5, 'claim': 1, 'agreement': 3, 'weather': 2, 'extra': 2, 'normal': 2, 'field': 1, 'threaten': 2, 'chest': 1, 'contemporary': 5, 'sister': 2, 'point': 1, 'resident': 3, 'opposition': 4, 'party': 2, 'manner': 2, 'rest': 1, 'social': 2, 'incident': 3, 'just': 1, 'dress': 1, 'sugar': 2, 'black': 1, 'belong': 2, 'afford': 2, 'enough': 2, 'provide': 2, 'structure': 2, 'possibly': 3, 'crazy': 2, 'broad': 1, 'device': 2, 'brother': 2, 'open': 2, 'intend': 2, 'funny': 2, 'mix': 1, 'context': 2, 'quick': 1, 'technology': 4, 'official': 3, 'contribute': 3, 'before': 2, 'analysis': 4, 'coach': 1, 'capacity': 4, 'around': 2, 'change': 1, 'village': 2, 'activity': 4, 'brain': 1, 'political': 4, 'speed': 1, 'behavior': 3, 'street': 1, 'hero': 2, 'forest': 2, 'drive': 1, 'beside': 2, 'total': 2, 'engine': 2, 'admit': 2, 'arrive': 2, 'branch': 1, 'whether': 2, 'interest': 3, 'however': 3, 'trend': 1, 'competition': 4, 'response': 2, 'actual': 3, 'chicken': 2, 'pressure': 2, 'physical': 3, 'restaurant': 3, 'unique': 2, 'medical': 3, 'skin': 1, 'perception': 3, 'herself': 2, 'consumer': 3, 'solution': 3, 'teaching': 2, 'resolution': 4, 'extremely': 3, 'careful': 2, 'policy': 3, 'stare': 1, 'best': 1, 'terrible': 3, 'primary': 3, 'analyst': 3, 'radio': 3, 'require': 2, 'attention': 3, 'victim': 2, 'silence': 2, 'often': 2, 'spot': 1, 'estate': 2, 'repeat': 2, 'positive': 3, 'candidate': 3, 'judge': 1, 'break': 1, 'religious': 3, 'function': 2, 'circle': 2, 'please': 1, 'develop': 3, 'damage': 2, 'generally': 4, 'assume': 2, 'confirm': 2, 'figure': 2, 'lift': 1, 'data': 2, 'profit': 2, 'city': 2, 'ensure': 2, 'video': 3, 'wonder': 2, 'local': 2, 'agency': 3, 'oppose': 2, 'divide': 2, 'include': 2, 'next': 1, 'moment': 2, 'negative': 3, 'writer': 2, 'connect': 2, 'significant': 4, 'particular': 4, 'sales': 1, 'press': 1, 'block': 1, 'national': 3, 'truly': 2, 'agree': 2, 'seven': 2, 'labor': 2, 'human': 2, 'test': 1, 'somewhere': 2, 'very': 2, 'intervention': 4, 'ahead': 2, 'perform': 2, 'middle': 2, 'little': 2, 'guest': 1, 'establish': 3, 'everything': 3, 'matter': 2, 'district': 2, 'famous': 2, 'memory': 3, 'actor': 2, 'gather': 2, 'regular': 3, 'attract': 2, 'actually': 4, 'visit': 2, 'citizen': 3, 'reveal': 2, 'heavy': 2, 'struggle': 2, 'grab': 1, 'lady': 2, 'approach': 2, 'shoulder': 2, 'since': 1, 'credit': 2, 'situation': 4, 'holiday': 3, 'acknowledge': 3, 'employee': 3, 'trade': 1, 'space': 1, 'spirit': 2, 'screen': 1, 'body': 2, 'quiet': 2, 'trouble': 2, 'officer': 3, 'trial': 2, 'create': 2, 'build': 1, 'police': 2, 'largely': 2, 'travel': 2, 'behind': 2, 'location': 3, 'enter': 2, 'gold': 1, 'traffic': 2, 'cover': 2, 'basketball': 3, 'certainly': 3, 'artist': 2, 'troop': 1, 'skill': 1, 'learning': 2, 'morning': 2, 'speech': 1, 'discover': 3, 'safety': 2, 'researcher': 3, 'desire': 2, 'fruit': 1, 'management': 3, 'chance': 1, 'governor': 3, 'brown': 1, 'particularly': 5, 'western': 2, 'consider': 3, 'surface': 2, 'somewhat': 2, 'cost': 1, 'clean': 1, 'temperature': 4, 'track': 1, 'destroy': 2, 'murder': 2, 'happen': 2, 'land': 1, 'worry': 2, 'coffee': 2, 'disappear': 3, 'climb': 1, 'strong': 1, 'reporter': 3, 'someone': 2, 'evidence': 3, 'control': 2, 'hardly': 2, 'lesson': 2, 'collection': 3, 'movement': 2, 'academic': 4, 'relationship': 4, 'billion': 2, 'spring': 1, 'fashion': 2, 'species': 2, 'drug': 1, 'article': 3, 'interview': 3, 'obvious': 3, 'aspect': 2, 'person': 2, 'fact': 1, 'investment': 3, 'presence': 2, 'industry': 3, 'essential': 3, 'least': 1, 'freedom': 2, 'express': 2, 'classroom': 2, 'past': 1, 'always': 2, 'desk': 1, 'station': 2, 'component': 3, 'send': 1, 'health': 1, 'influence': 3, 'identity': 4, 'commercial': 3, 'section': 2, 'gender': 2, 'cultural': 3, 'rely': 2, 'result': 2, 'belief': 2, 'protect': 2, 'notice': 2, 'reality': 4, 'forward': 2, 'remove': 2, 'probably': 3, 'locate': 2, 'apparently': 4, 'works': 1, 'direction': 3, 'usually': 4, 'society': 4, 'economic': 4, 'church': 1, 'vegetable': 4, 'thinking': 2, 'level': 2, 'obviously': 4, 'decade': 2, 'importance': 3, 'flight': 1, 'across': 2, 'remind': 2, 'movie': 2, 'critic': 2, 'yellow': 2, 'sector': 2, 'slip': 1, 'maintain': 2, 'strategy': 3, 'able': 2, 'panel': 2, 'software': 2, 'jury': 2, 'once': 1, 'corporate': 3, 'growing': 2, 'population': 4, 'himself': 2, 'sweet': 1, 'foreign': 2, 'only': 2, 'popular': 3, 'debate': 2, 'encourage': 3, 'rather': 2, 'politician': 4, 'construction': 3, 'finger': 2, 'support': 2, 'thank': 1, 'define': 2, 'doctor': 2, 'status': 2, 'attorney': 3, 'table': 2, 'quality': 3, 'center': 2, 'extend': 2, 'deliver': 3, 'under': 2, 'muscle': 2, 'sense': 1, 'soft': 1, 'writing': 2, 'professor': 3, 'average': 3, 'criminal': 3, 'strange': 1, 'operate': 3, 'huge': 1, 'remember': 3, 'below': 2, 'specific': 3, 'insist': 2, 'planet': 2, 'reader': 2, 'involve': 2, 'regime': 2, 'feeling': 2, 'music': 2, 'potential': 3, 'material': 4, 'spend': 1, 'blood': 1, 'sample': 2, 'daily': 2, 'military': 4, 'stuff': 1, 'concern': 2, 'argument': 3, 'direct': 2, 'accident': 3, 'deny': 2, 'commitment': 3, 'surprise': 2, 'anyway': 3, 'news': 1, 'ancient': 2, 'perhaps': 2, 'challenge': 2, 'leadership': 3, 'percentage': 3, 'nearly': 2, 'lots': 1, 'attitude': 3, 'willing': 2, 'later': 2, 'democratic': 4, 'instead': 2, 'anybody': 4, 'baby': 2, 'participant': 4, 'typical': 3, 'fix': 1, 'expand': 2, 'together': 3, 'somebody': 3, 'discuss': 2, 'anything': 3, 'publish': 2, 'quickly': 2, 'after': 2, 'network': 2, 'principle': 3, 'practice': 2, 'pursue': 2, 'marriage': 2, 'yourself': 2, 'player': 2, 'conservative': 4, 'perspective': 3, 'assessment': 3, 'culture': 2, 'reason': 2, 'effort': 2, 'election': 3, 'photo': 2, 'sleep': 1, 'household': 2, 'technique': 2, 'pound': 1, 'nuclear': 3, 'place': 1, 'character': 3, 'treat': 1, 'emotional': 4, 'plastic': 2, 'prison': 2, 'apartment': 3, 'department': 3, 'club': 1, 'anyone': 3, 'train': 1, 'representative': 5, 'tonight': 2, 'service': 2, 'bridge': 1, 'tiny': 2, 'promise': 2, 'prepare': 2, 'battle': 2, 'indicate': 3, 'event': 2, 'nation': 2, 'recommend': 3, 'action': 2, 'protection': 3, 'decision': 3, 'crime': 1, 'employ': 2, 'tomorrow': 3, 'politics': 3, 'common': 2, 'class': 1, 'purpose': 2, 'window': 2, 'ethnic': 2, 'today': 2, 'beauty': 2, 'crisis': 2, 'amount': 2};
function getTodaysWord()
{
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2022, 1, 1);
    const secondDate = new Date();
    
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) - 10;

    let word = Object.keys(words)[diffDays % words.length][0];
    
    $("#wordCount").text(`Word ${diffDays % words.length}`)
    $("#syllableCount").text("Syllables: ", words[word]);

    return convert(word);
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
       
        if (currentWord.split(" ") == result.split(" "))
        {
            $("#inputContainer").hide("drop", {direction: "right"}, 400);
        }

        $("#guessInput").val("");
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

