let history = [];
var currentWord = [];
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

const words = ['asleep', 'agricultural', 'undergraduate', 'manufacturer', 'stretch', 'revolution', 'perception', 'sibling', 'undergo', 'yourself', 'attorney', 'donation', 'telescope', 'movie', 'rational', 'duty', 'corporation', 'listener', 'considerably', 'jeans', 'still', 'alone', 'launch', 'drain', 'purple', 'unfair', 'religion', 'rating', 'ankle', 'click', 'access', 'find', 'daily', 'precious', 'manufacturing', 'furniture', 'fruit', 'vocal', 'chemical', 'devil', 'nutrient', 'ribbon', 'stranger', 'many', 'prevail', 'master', 'harvest', 'carbon', 'selection', 'grade', 'equation', 'electric', 'meeting', 'strongly', 'officially', 'particular', 'appointment', 'silly', 'courage', 'original', 'submit', 'lightly', 'liquid', 'substantially', 'tune', 'intense', 'racial', 'property', 'society', 'economic', 'unless', 'ladder', 'crystal', 'vaccine', 'interaction', 'shelf', 'sweat', 'even', 'company', 'confront', 'schedule', 'stem', 'bond', 'sequence', 'joke', 'settle', 'field', 'aspect', 'debris', 'potentially', 'drink', 'adequate', 'total', 'divorce', 'grin', 'phrase', 'jail', 'garage', 'influence', 'forget', 'student', 'decline', 'uncomfortable', 'hospital', 'from', 'oven', 'street', 'because', 'pretty', 'sometimes', 'genetic', 'occasional', 'excitement', 'cargo', 'procedure', 'steadily', 'symptom', 'ghost', 'wonder', 'radio', 'tackle', 'baby', 'gross', 'ministry', 'implementation', 'since', 'laundry', 'proposed', 'treaty', 'unit', 'professor', 'dependent', 'later', 'salmon', 'consistently', 'murder', 'teaspoon', 'plant', 'crowd', 'bicycle', 'slam', 'water', 'capable', 'approval', 'glimpse', 'send', 'proper', 'quote', 'weapon', 'avoid', 'debate', 'consumer', 'appreciation', 'along', 'unlike', 'encouraging', 'wisdom', 'embarrassed', 'agenda', 'await', 'meaning', 'bread', 'lend', 'breakfast', 'angel', 'limit', 'plus', 'unite', 'association', 'bacteria', 'athlete', 'soccer', 'trouble', 'halfway', 'commonly', 'divide', 'driveway', 'direct', 'injure', 'diplomatic', 'employment', 'legacy', 'identical', 'superior', 'willingness', 'sudden', 'sentence', 'study', 'practitioner', 'grace', 'shopping', 'train', 'economically', 'administrator', 'figure', 'difficult', 'sleep', 'totally', 'proposal', 'please', 'liberal', 'chain', 'garbage', 'favor', 'depth', 'anxious', 'risk', 'sorry', 'suburb', 'necessary', 'image', 'importance', 'patron', 'classroom', 'admire', 'wild', 'solve', 'mental', 'world', 'brush', 'instruct', 'help', 'possible', 'alliance', 'depression', 'cotton', 'effectively', 'terrible', 'largely', 'elderly', 'consensus', 'electronics', 'generally', 'professional', 'before', 'constantly', 'ahead', 'contend', 'pocket', 'remember', 'transformation', 'ground', 'writing', 'fiction', 'disagree', 'trust', 'capability', 'battle', 'judicial', 'reliability', 'strip', 'coastal', 'additional', 'impulse', 'exactly', 'composition', 'inspiration', 'sunny', 'front', 'historic', 'educator', 'courtroom', 'steep', 'wealth', 'thrive', 'collapse', 'purchase', 'slowly', 'awareness', 'historically', 'resolution', 'charity', 'break', 'century', 'annually', 'consistent', 'foreign', 'disaster', 'reason', 'special', 'until', 'feeling', 'relatively', 'flying', 'mount', 'mostly', 'coverage', 'dramatic', 'required', 'nonetheless', 'honest', 'listen', 'colony', 'clerk', 'silence', 'deeply', 'stop', 'relative', 'copy', 'tent', 'premium', 'trap', 'control', 'support', 'responsible', 'hotel', 'attempt', 'jump', 'dangerous', 'pilot', 'pastor', 'isolation', 'feature', 'slave', 'crush', 'terrorism', 'driving', 'fitness', 'shelter', 'announce', 'cholesterol', 'vessel', 'scientific', 'mechanism', 'massive', 'teacher', 'border', 'plunge', 'genre', 'today', 'hesitate', 'monster', 'damage', 'preference', 'principal', 'joint', 'substance', 'remind', 'somewhat', 'insight', 'passage', 'general', 'engagement', 'concern', 'double', 'wagon', 'mirror', 'artist', 'dense', 'gravity', 'staff', 'bottom', 'efficient', 'contemplate', 'recipe', 'recession', 'online', 'office', 'retreat', 'waist', 'overwhelming', 'whatever', 'gasoline', 'highway', 'barely', 'specialist', 'journalist', 'golf', 'arrange', 'banking', 'cooking', 'missile', 'host', 'privacy', 'scared', 'speed', 'mask', 'membership', 'indigenous', 'greatest', 'annual', 'advance', 'standing', 'around', 'delay', 'borrow', 'swing', 'satellite', 'cigarette', 'magic', 'suggestion', 'cage', 'adoption', 'surprising', 'orange', 'educate', 'health', 'primary', 'friendship', 'fuel', 'abroad', 'itself', 'electronic', 'undermine', 'orientation', 'somebody', 'holy', 'counter', 'really', 'finally', 'entrepreneur', 'yellow', 'acceptable', 'temporary', 'apparent', 'scandal', 'effectiveness', 'golden', 'helpful', 'succeed', 'marriage', 'walking', 'lifetime', 'clothing', 'wooden', 'slight', 'comment', 'crisis', 'genius', 'concept', 'attach', 'familiar', 'piano', 'again', 'resident', 'grandparent', 'orbit', 'creature', 'publisher', 'vary', 'probably', 'reportedly', 'origin', 'scheme', 'impose', 'weakness', 'bishop', 'mention', 'somehow', 'partner', 'unfortunately', 'automobile', 'vital', 'temple', 'written', 'selected', 'hello', 'circle', 'behavior', 'immigrant', 'sexuality', 'continuous', 'employee', 'bubble', 'model', 'dilemma', 'enhance', 'smart', 'trend', 'random', 'spiritual', 'penalty', 'industrial', 'illness', 'warmth', 'panel', 'exit', 'reflect', 'ranch', 'spectrum', 'prominent', 'virtually', 'instrument', 'plan', 'commercial', 'together', 'panic', 'development', 'photograph', 'works', 'stream', 'amendment', 'rehabilitation', 'capital', 'curtain', 'giant', 'desperately', 'lunch', 'basic', 'trim', 'regulation', 'bride', 'academic', 'smell', 'about', 'sweet', 'powerful', 'currency', 'describe', 'drill', 'novel', 'location', 'poetry', 'furthermore', 'stress', 'taste', 'regard', 'departure', 'billion', 'popularity', 'punch', 'dealer', 'public', 'empty', 'seventh', 'independence', 'dinner', 'fence', 'rank', 'feather', 'forty', 'critic', 'outline', 'spite', 'provider', 'respectively', 'openly', 'teammate', 'appreciate', 'sexual', 'training', 'bounce', 'ethics', 'cross', 'chunk', 'representative', 'drift', 'uncertainty', 'fabric', 'description', 'kind', 'parish', 'arena', 'corruption', 'pride', 'trading', 'onion', 'rally', 'instead', 'previously', 'legally', 'notice', 'impression', 'tighten', 'mineral', 'correct', 'bury', 'instructional', 'empire', 'elect', 'thinking', 'essential', 'point', 'talent', 'hallway', 'disclose', 'variety', 'attendance', 'brutal', 'past', 'fortunately', 'television', 'prescription', 'hopefully', 'dimension', 'guidance', 'opera', 'concentrate', 'flexible', 'bitter', 'constitutional', 'troop', 'particularly', 'dirty', 'objection', 'actively', 'regret', 'limitation', 'theology', 'exercise', 'spouse', 'peaceful', 'hold', 'reverse', 'balloon', 'chronic', 'once', 'closely', 'assumption', 'strange', 'justice', 'farmer', 'newspaper', 'poet', 'complete', 'inform', 'admission', 'incredible', 'excited', 'trainer', 'restaurant', 'discussion', 'occasion', 'genuine', 'pepper', 'barrier', 'culture', 'celebrate', 'southwest', 'news', 'priority', 'private', 'current', 'group', 'assess', 'marry', 'relieve', 'method', 'flood', 'associated', 'communicate', 'below', 'sugar', 'butterfly', 'certainly', 'medicine', 'patrol', 'expertise', 'quality', 'stability', 'endure', 'basket', 'every', 'section', 'crop', 'deserve', 'gift', 'recommendation', 'garlic', 'install', 'treatment', 'oral', 'post', 'welcome', 'cruise', 'land', 'grief', 'tomato', 'tunnel', 'judge', 'civilian', 'headline', 'pollution', 'enough', 'outlet', 'confuse', 'possess', 'structural', 'birthday', 'projection', 'telephone', 'middle', 'trace', 'hunter', 'flavor', 'developmental', 'attract', 'competition', 'restrict', 'profound', 'calculate', 'injury', 'transit', 'increased', 'designer', 'innovation', 'happy', 'invest', 'diplomat', 'agree', 'statistical', 'opportunity', 'universe', 'village', 'sympathy', 'valid', 'classic', 'month', 'rarely', 'mild', 'consume', 'demand', 'hearing', 'screening', 'sweater', 'doorway', 'tube', 'institution', 'performance', 'likely', 'despite', 'positive', 'common', 'connect', 'finance', 'institutional', 'inspector', 'peanut', 'adapt', 'episode', 'surface', 'slavery', 'feedback', 'earnings', 'brilliant', 'regional', 'trailer', 'scary', 'guilt', 'cookie', 'abortion', 'calendar', 'conclude', 'straighten', 'agency', 'grape', 'target', 'better', 'negotiate', 'manipulate', 'simply', 'exhibit', 'smooth', 'competitive', 'ancient', 'frustration', 'beginning', 'nest', 'coming', 'biological', 'promote', 'church', 'senator', 'investigator', 'addition', 'chaos', 'voluntary', 'conception', 'diversity', 'hint', 'defensive', 'realm', 'therapy', 'infection', 'central', 'enforce', 'needle', 'operator', 'diamond', 'equivalent', 'invisible', 'list', 'infrastructure', 'start', 'reflection', 'youngster', 'sample', 'exceed', 'cultural', 'collaboration', 'dried', 'respect', 'promise', 'constant', 'adviser', 'interview', 'reduce', 'disturbing', 'slap', 'passenger', 'discourage', 'devastating', 'spell', 'kitchen', 'cloth', 'snake', 'discovery', 'comedy', 'actress', 'motion', 'recording', 'toxic', 'surrounding', 'strategy', 'pleasant', 'everywhere', 'investigate', 'thereby', 'throat', 'black', 'title', 'resistance', 'link', 'pursuit', 'suspend', 'occupation', 'radical', 'ambitious', 'place', 'homework', 'visitor', 'expert', 'forbid', 'handle', 'money', 'bankruptcy', 'ecosystem', 'split', 'prepare', 'hostage', 'coach', 'ingredient', 'audience', 'struggle', 'custom', 'compete', 'cast', 'introduce', 'agreement', 'person', 'presidential', 'bloody', 'sharply', 'trick', 'behalf', 'human', 'bathroom', 'environmental', 'winter', 'narrow', 'wilderness', 'neither', 'stare', 'lucky', 'narrative', 'disk', 'bonus', 'drawing', 'equality', 'column', 'involvement', 'pleasure', 'anxiety', 'block', 'innocent', 'cliff', 'alleged', 'software', 'achievement', 'receiver', 'first', 'patience', 'swallow', 'twin', 'pregnancy', 'edit', 'impressive', 'event', 'intelligence', 'violate', 'express', 'most', 'screen', 'intend', 'constitution', 'condition', 'storm', 'reveal', 'initiative', 'stupid', 'currently', 'manager', 'reasonable', 'flour', 'mortality', 'crowded', 'being', 'failure', 'possession', 'uncover', 'technical', 'funding', 'aggression', 'loyal', 'fundamental', 'founder', 'exposure', 'forehead', 'hence', 'someone', 'given', 'accusation', 'disappointed', 'pound', 'glory', 'round', 'editor', 'scare', 'pattern', 'recent', 'validity', 'request', 'safety', 'grocery', 'mortgage', 'drama', 'player', 'specific', 'faster', 'stair', 'fewer', 'scratch', 'automatic', 'stadium', 'danger', 'alongside', 'conspiracy', 'longtime', 'rent', 'trauma', 'father', 'legislator', 'lift', 'actual', 'woman', 'deliberately', 'little', 'philosophical', 'curriculum', 'smile', 'print', 'outfit', 'liberty', 'official', 'switch', 'kingdom', 'innovative', 'squeeze', 'oxygen', 'rhetoric', 'instant', 'believe', 'thread', 'sense', 'executive', 'receive', 'others', 'conservative', 'slice', 'possibly', 'skip', 'cling', 'dream', 'oppose', 'seller', 'consent', 'lawmaker', 'privilege', 'tax', 'canvas', 'obstacle', 'deliver', 'rifle', 'garden', 'corner', 'adjustment', 'electrical', 'dispute', 'naked', 'anticipate']

function getTodaysWord()
{
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2022, 1, 1);
    const secondDate = new Date();
    
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) + 3;

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
    let word = $("#guessInput").val();
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

    const sounds = [["ɪə", "iə"]];

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

