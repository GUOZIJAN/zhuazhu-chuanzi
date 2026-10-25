(() => {
  'use strict';

  // Text transcribed from the player-supplied video at the approximate time shown.
  // Original handles are deliberately omitted. Labels below are game rules, not
  // claims about any real commenter's nationality, intent, or identity.
  const C = (text, at, greeting = false) => ({text, at, lang:'zh', troll:!greeting});
  const J = (text, zh, at, troll = false) => ({text, zh, at, lang:'ja', troll});
  const messageBank = [
    J('かわゆい', '好可爱', '00:00'),
    C('你好', '创作', true),
    C('主播你能学中文么', '00:00'),
    J('不安です？', '不安吗？', '00:00'),
    C('主播日语真不错。', '00:00'),
    J('お祭りで食べた～！', '在祭典上吃过～！', '02:00'),
    C('发日语的能不影响我看弹幕了吗', '01:00'),
    J('食べてないなぁ', '还没吃过呢', '02:00'),
    C('晚上好', '创作', true),
    C('能不能把刷日文的全部拉黑啊，看着好烦', '02:00'),
    J('ふわふわ系', '松软口感的那种', '02:00'),
    C('朋友们我们明天切片见', '01:00'),
    J('なんの味が好きなの？', '喜欢什么口味？', '02:00'),
    C('主播这里怎么螺蛳粉，你能教教我吗', '02:00'),
    J('一番好きなアイスクリームのフレーバーは何ですか', '最喜欢什么口味的冰淇淋？', '02:00'),
    C('主播可以玩原神吗', '截图'),
    J('ふわふわおやつ食べました', '吃了松软的小点心', '02:00'),
    C('不懂就问，这是天选国v的直播间吗', '05:00'),
    J('イチゴシロップとかはどうなん？', '草莓糖浆怎么样？', '02:00'),
    C('好久不见', '创作', true),
    C('为什么不在niconico播', '05:00'),
    J('ふわふわ系？それとも一般的なやつ？', '松软口感的？还是普通的？', '02:00'),
    C('主播会玩LOL吗', '05:00'),
    J('好きな味はなに？', '喜欢什么味道？', '02:00'),
    C('让我们说中文', '05:00'),
    J('子どもの時以来食べてないな', '从小时候起就没吃过了', '02:00'),
    C('有房管吗，我串累了，能不能把我毕业了', '04:00'),
    J('いいね！', '不错！', '04:00'),
    C('爱吃有碎冰感觉的', '04:00'),
    J('かき氷アイス', '刨冰冰淇淋', '04:00'),
    C('结八分钱', '04:00'),
    J('寝る子は育つ！', '睡得好的孩子长得快！', '04:00'),
    C('大家都知道她有苦衷，说点大家不知道的', '04:00'),
    J('一日中食べるは無いんだ', '不会一整天都在吃啊', '04:00'),
    C('现在也是夏菜粉了', '09:00'),
    J('ハニワいいね', 'Haniwa 不错', '07:00'),
    C('看困了，扬国威！', '04:00'),
    J('期待しています', '很期待', '07:00'),
    C('中国语言怕、困惑、请不要再发了', '04:00'),
    J('ハニワも歌って欲しいな', '也想听你唱 Haniwa 的歌', '07:00'),
    C('听不懂喵', '09:00'),
    J('外国の音楽を聴くのは好きですか？', '喜欢听外国音乐吗？', '07:00'),
    C('你根本就不懂直播这一块', '03:00'),
    J('JPOPが大好きです', '很喜欢 J-POP', '07:00'),
    C('大家晚上好', '创作', true),
    J('すべての中国語を自動的にブロック', '把所有中文自动屏蔽掉', '07:00', true),
    C('主播喜欢可达鸭吗', '03:00'),
    J('漢字が分からないんだけど、漢字を全部隠せないかな', '看不懂汉字，能不能把汉字都隐藏？', '07:00', true),
    C('主播我喜欢你', '07:00'),
    J('チャーハンはおいしいです。', '炒饭很好吃。', '07:00'),
    C('打游戏啊', '09:00'),
    J('ユイナちゃんがもっと歌を歌ってくれるのを聞きたいな、楽しみだ！', '还想听结奈唱更多歌，好期待！', '07:00'),
    C('没意思，我先退了', '09:00'),
    J('かわいい', '可爱', '09:00'),
    C('没礼物就算了，super chat也没有吗', '09:00'),
    J('九州しょうゆのじゃがりこ！', '九州酱油味的薯条零食！', '12:00'),
    C('让我们讲中文', '12:00'),
    J('蜜雪冰城は美味しいですか？', '蜜雪冰城好喝吗？', '12:00'),
    C('怎么不给打钱', '12:00'),
    J('スタバはポケモンコラボしてたから行った！', '因为星巴克和宝可梦联名，所以去了！', '12:00'),
    C('嗨', '创作', true),
    C('在直播间开通了舰长', '12:00'),
    J('中国のファンは熱い！', '中国粉丝很热情！', '12:00'),
    C('为啥不看弹幕呢', '15:00'),
    J('さつまいも系おいしいですよ！！', '红薯口味很好吃！！', '12:00'),
    C('主播喜欢和霸王茶姬吗', '15:00'),
    J('抹茶のスムージーよく飲んだ', '以前经常喝抹茶冰沙', '12:00'),
    C('不自言自语也没法了吧w', '15:00'),
    J('果物そのものがダメなのか', '是水果本身不行吗？', '15:00'),
    C('会定时屏蔽人的，到时候弹幕只有自己能看到', '15:00'),
    J('人工甘味料はセーフってこと', '也就是说人工甜味剂可以？', '15:00'),
    C('再见啦各位观众', '15:00'),
    // Additional lines transcribed from screenshots of the supplied recording.
    C('日语能讲慢一点吗，听不清', '00:30'),
    C('主播能说中文吗？听不懂啊', '00:30'),
    C('这里怎么发sc', '00:30'),
    J('私は砂糖の入っていない飲み物が好きですねwww', '我喜欢不加糖的饮料', '00:30'),
    J('サンマ好き', '喜欢秋刀鱼', '00:30'),
    J('ミルクティーは甘すぎる', '奶茶太甜了', '00:30'),
    C('你的聊天功夫，深不见底', '01:30'),
    J('スタバではなに飲む？', '在星巴克喝什么？', '01:30'),
    J('コーラを水で割るのが一番おいしいです', '可乐兑水最好喝', '01:30'),
    C('怎么设置ai字幕', '02:30'),
    C('日本网友们是不是走错直播间了', '02:30'),
    J('かき氷、何味が一番よく食べる？', '刨冰最常吃什么口味？', '02:30'),
    J('贅沢なふわふわかき氷おいしいよね～！！', '高级的松软刨冰很好吃呢！', '02:30'),
    J('専門店とかあるよね', '还有专门的店呢', '02:30'),
    C('主播在和谁说话呢？', '03:30'),
    J('Yuiさん、今何が飲みたいですか', 'Yui 现在想喝什么？', '03:30'),
    J('かき氷のシロップ何が好きなの？', '喜欢什么刨冰糖浆？', '03:30'),
    C('她的切割，我恨恨！', '04:30'),
    C('弹幕比直播好看', '04:30'),
    J('一日中ずっと寝てたの！？', '一整天都在睡吗！？', '04:30'),
    J('今日何時に起きたのw', '今天几点起床的？', '04:30'),
    C('要是封中文，至少一半没了', '05:30'),
    C('姐姐隔一波米就跑路啊太狠了', '05:30'),
    J('じゃがりこは良いけど、ポテチは厳しいかな', '薯条零食还行，薯片可能不行', '05:30'),
    J('ベッドでラーメンチャーハンは油がえぐすぎる', '在床上吃拉面炒饭也太油了', '05:30'),
    C('主播会唱加油鸭嘛', '06:30'),
    C('不安得死', '06:30'),
    J('好きなアーティストさんとかはいる？', '有喜欢的艺人吗？', '06:30'),
    J('好きな中国語の歌があるので歌ってくれる？', '有喜欢的中文歌，能唱吗？', '06:30'),
    J('歌枠楽しみ', '期待歌回', '06:30'),
    C('刚来，这个直播间应该怎么串？', '07:30'),
    C('HSK考完，还有在学习吗', '07:30'),
    J('中国語で「愛してる」と言っていただけますか？', '可以用中文说“我爱你”吗？', '07:30'),
    J('アイドル目指せ！', '朝着偶像目标努力！', '07:30'),
    C('你们说以后会不会步猫雷后尘?', '08:30'),
    C('主播不要忽视我我给你上舰好不好', '08:30'),
    C('上舰有福利视频吗', '08:30'),
    J('かわいいね、がんばれよ', '好可爱，加油呀', '08:30'),
    J('推し多いね', '喜欢的偶像真多呢', '08:30'),
    C('什么时候能发sc', '09:30'),
    C('这里要怎么发sc?', '09:30'),
    C('有点无聊', '09:30'),
    J('海外のVTuberとコラボすることはありますか？', '会和海外 VTuber 联动吗？', '09:30'),
    J('自分の姿、いつコスプレするの？', '什么时候会 Cos 自己的形象？', '09:30'),
    J('ゆいゆいも可愛い', '结奈也很可爱', '09:30'),
    C('主播不说中文没效果啊', '10:30'),
    C('这个中文弹幕密度无敌了', '10:30'),
    J('スムージーか？', '是冰沙吗？', '10:30'),
    J('ほうじ茶スムージーじゃない？', '不是焙茶冰沙吗？', '10:30'),
    J('フラペチーノ？', '星冰乐？', '10:30'),
    C('主播是来自中国的留学生', '11:30'),
    C('怎么一直在聊吃的', '11:30'),
    J('コンビニよりスタバ飲んじゃう', '比起便利店更常喝星巴克', '11:30'),
    C('什么时候去holo投简历', '13:30'),
    C('是不是开中文屏蔽了', '13:30'),
    J('食べれる果物はないの？', '没有能吃的水果吗？', '13:30'),
    J('スコーンってめっちゃ腹膨れるんよな', '司康吃起来特别顶饱呢', '13:30'),
    C('不可能回复中文的啊', '14:30'),
    C('说中文说中文', '14:30'),
    J('グミとか蒟蒻畑とか？', '软糖或蒟蒻果冻之类？', '14:30'),
    J('果汁グミいけるんだ', '果汁软糖可以吃啊', '14:30'),
    C('我看见挺多中文的啊，没屏蔽吧?', '15:30'),
    J('甘いものいいね', '甜食不错呢', '15:30'),
    J('ドライフルーツはダメ？', '果干也不行吗？', '15:30'),
    // More lines from additional screenshots of the same player-supplied video.
    C('握握手 握握双手', '00:15'),
    C('看到我的扣2', '00:15'),
    C('我们要不然一直发1', '00:15'),
    C('评论区比主播更有节目效果', '01:15'),
    C('B小弟，全被拉黑了', '01:15'),
    C('这是生菜直播间', '02:15'),
    C('中国人能飞', '02:15'),
    C('一直顶，串不串?', '02:15'),
    C('主播怎么上舰啊', '02:15'),
    C('有没有人用中文发个sc的?', '03:15'),
    C('我想刷SC啊，啥时开', '03:15'),
    C('感觉有人被关小黑屋了', '03:15'),
    C('欢迎来到二次元的小窝，米娜桑要友善发言哦~', '03:15'),
    C('业务能力太强了', '04:15'),
    C('1500同接，1499个串子', '04:15'),
    C('这个摇头晃脑的，还是那个样子', '05:15'),
    C('困惑个啥呀?', '05:15'),
    C('天選國V開播了兄弟們', '06:15'),
    C('还想听你唱起风了', '06:15'),
    C('黑粉也是粉', '06:15'),
    C('我问油管怎么上舰怎么没人理我', '08:15'),
    C('兄弟们怎么上舰', '08:15'),
    C('为什么没有打赏按钮?', '08:15'),
    C('没别的节目吗，就嗯聊', '09:15'),
    C('新帳號還不能開收益吧 現在是公益直播', '09:15'),
    C('我看不懂日语', '09:15'),
    C('能不能说中文', '10:15'),
    C('我也来凑热闹了', '10:15'),
    C('我的毒没有解药!', '11:15'),
    C('好多中文，主播的中国人缘一定很好吧', '11:15'),
    C('这里是中文交流直播间了', '13:15'),
    C('你刷屏我怎么和弹幕聊天呢', '16:15'),
    J('エナドリめっちゃ飲む～', '能量饮料喝得很多～', '00:15'),
    J('めっちゃファンアートでスイーツと一緒に描かれそうな見た目なのに！', '看起来很适合在同人画里和甜点画在一起！', '00:15'),
    J('案件があれば、飲む機会もあるかもねー', '有合作的话也许会有机会喝呢', '01:15'),
    J('いつかねw', '总有一天吧', '01:15'),
    J('お～今年食べてないや', '哦～今年还没吃过', '02:15'),
    J('ふわふわしたやつ美味しいよね', '松软的那种很好吃呢', '02:15'),
    J('果物苦手やのにシロップどうするん？', '不喜欢水果的话，糖浆怎么办？', '03:15'),
    J('そんなに大声で叫ぶ必要ないよ', '不用那么大声喊哦', '03:15'),
    J('幸せな気分にはなるな', '会让人心情变好呢', '03:15'),
    J('赤福のかき氷食べたな', '吃过赤福的刨冰', '03:15'),
    J('いっぱい寝れてえらい！！！', '能睡这么多真厉害！！！', '04:15'),
    J('ぐうたらですやん', '这也太懒散啦', '04:15'),
    J('ベッドでカップ麺！？', '在床上吃杯面！？', '05:15'),
    J('カップラーメン？', '杯装拉面？', '05:15'),
    J('音楽いいですね', '音乐真不错', '06:15'),
    J('歌枠たのむ', '想看歌回', '06:15'),
    J('聞きたい', '想听', '06:15'),
    J('歌枠も楽しみにしてます！', '也很期待歌回！', '06:15'),
    J('ハニワ歌枠して～！', '来场 Haniwa 歌回吧～！', '07:15'),
    J('モー娘！？！？', '早安少女组！？！？', '08:15'),
    J('こんなにたくさんのアニメを見てるなんて！', '居然看过这么多动画！', '09:15'),
    J('中学生で凄いな！！', '中学生就这样，真厉害！！', '09:15'),
    J('配信者さん、ゲームやらないの？', '主播不玩游戏吗？', '10:15'),
    J('私も飲みたくなってきたわ', '我也开始想喝了', '11:15'),
    J('セブンのスムージー飲んだことない', '没喝过 7-11 的冰沙', '11:15'),
    J('確かに果物多いな', '水果确实很多呢', '12:15'),
    J('コーヒーとかの苦いのは苦手？', '不喜欢咖啡那种苦味吗？', '12:15'),
    J('スターバックスと霸王茶姫、どっちの方が美味しい？', '星巴克和霸王茶姬哪个更好喝？', '13:15'),
    J('ゼリー系？', '果冻类？', '14:15'),
    J('グミはハードグミ派だな', '软糖我更喜欢硬一点的', '15:15'),
    J('ちいかわのガチャした！', '抽了吉伊卡哇扭蛋！', '16:15'),
    J('ガチャガチャ最近めっちゃ高くなってきてない？', '最近扭蛋是不是贵了好多？', '16:15')
  ];

  const $ = id => document.getElementById(id);
  const els = {chat:$('chatList'), stream:$('streamComments'), count:$('chatCount'), time:$('timeValue'),
    caught:$('caughtValue'), false:$('falseValue'), missed:$('missedValue'), combo:$('comboValue'),
    heat:$('heatValue'), ring:$('heatRing'), viewers:$('viewerCount'), clock:$('clock'),
    progress:$('progressFill'), start:$('startOverlay'), tutorial:$('tutorialOverlay'),
    result:$('resultOverlay'), share:$('shareOverlay'), rotate:$('rotateOverlay'), toast:$('toast')};
  const fast = new URLSearchParams(location.search).has('fast');
  const targetRatio = .55;
  const difficulties = {
    simple:{label:'简单',size:48,spawnMs:1000,lifeMs:8000},
    hard:{label:'困难',size:66,spawnMs:730,lifeMs:7000},
    hell:{label:'地狱',size:90,spawnMs:570,lifeMs:5000}
  };
  let difficulty = 'simple', messages = [];
  const visibleLimit = 10;
  const colors = ['#aa688c','#5b8d89','#7568a7','#b38054','#607ea6','#9b6471','#558868'];
  const tutorialKey='catch-troll-tutorial-2026-v1';
  const tutorialSteps=[
    {title:'先看懂弹幕',text:'本关里，中文只有单纯打招呼可以放行；日文弹幕下方有中文翻译，按内容判断。',art:'中　你好　✓<br>日　かわゆい<br><small>译：好可爱</small>'},
    {title:'点一下就抓住',text:'直播画面左侧和右侧聊天栏都可以点。点击一条可见弹幕，就立即抓住它。',art:'👆　点击弹幕<br><small>抓中后热度上升</small>'},
    {title:'错过就放行',text:'弹幕会不断更新。滑出可见区域的弹幕自动放行；结束后按抓中、误抓和漏抓结算。',art:'弹幕流　↑ ↑ ↑<br><small>抓中越多，热度越高</small>'}
  ];
  let state, timers = [], toastTimer, tutorialIndex=0, orientationBypass=false, hasStartedOnce=false, shareDataUrl='';
  const streamAudio=$('streamAudio');
  let audioEnabled=true;
  streamAudio.volume=.65;
  function updateAudioButton(){
    const button=$('audioToggle');
    button.textContent=audioEnabled?'🔊 直播原声':'🔇 开启声音';
    button.setAttribute('aria-label',audioEnabled?'关闭直播原声':'开启直播原声');
    button.setAttribute('aria-pressed',String(audioEnabled));
  }
  function playAudio(){
    if(!audioEnabled)return;
    const attempt=streamAudio.play();
    if(attempt?.catch)attempt.catch(()=>{
      if(!state?.playing)return;
      audioEnabled=false;updateAudioButton();
      toast('点击声音按钮开启直播原声','bad');
    });
  }

  function shuffled(items){
    const result=[...items];
    for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  }
  function drawRound(){
    const unique=[...new Map(messageBank.map(item=>[`${item.lang}:${item.text}`,item])).values()];
    const targets=unique.filter(item=>item.troll), normals=unique.filter(item=>!item.troll);
    const roundSize=difficulties[difficulty].size;
    const targetCount=Math.round(roundSize*targetRatio);
    if(targets.length<targetCount || normals.length<roundSize-targetCount)throw new Error('弹幕库数量不足');
    return shuffled([...shuffled(targets).slice(0,targetCount),...shuffled(normals).slice(0,roundSize-targetCount)]);
  }

  function clearTimers(){timers.forEach(clearTimeout);timers.forEach(clearInterval);timers=[];}
  function later(fn,ms){const t=setTimeout(fn,ms);timers.push(t);return t;}
  function repeat(fn,ms){const t=setInterval(fn,ms);timers.push(t);return t;}
  function clamp(n){return Math.max(0,Math.min(100,n));}
  function hud(){
    els.caught.textContent=state.caught;els.false.textContent=state.falseCatches;
    els.missed.textContent=state.missed;els.combo.textContent='×'+state.combo;
    els.heat.textContent=state.heat;els.ring.style.setProperty('--heat',state.heat);
    const elapsed=`${String(Math.floor(state.seconds/60)).padStart(2,'0')}:${String(state.seconds%60).padStart(2,'0')}`;
    els.time.textContent=elapsed;
    els.viewers.textContent=(950+state.heat*11+state.caught*20).toLocaleString('zh-CN');
    els.clock.textContent=elapsed;
    els.progress.style.width=(messages.length?state.resolved.size/messages.length*100:0)+'%';
    els.count.textContent=`${state.resolved.size} / ${messages.length}`;
    $('miniHud').textContent=`热度 ${state.heat} · ${difficulties[difficulty].label}`;
    const expression=state.heat>=75?'happy':state.heat>=45?'smile':'calm';
    document.querySelectorAll('.stream-shot').forEach(img=>img.classList.toggle('is-active',img.dataset.expression===expression));
  }
  function toast(message,kind){
    els.toast.textContent=message;els.toast.className='toast show '+kind;
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>els.toast.classList.remove('show'),1700);
  }
  function makeChatRow(item,index){
    const row=document.createElement('button');row.type='button';row.className='chat-row new';
    row.setAttribute('aria-label',`${item.text}${item.zh?'。翻译：'+item.zh:''}。点击抓住`);
    const avatar=document.createElement('span');avatar.className='avatar';avatar.style.background=colors[index%colors.length];avatar.textContent=String(index%10);
    const body=document.createElement('span');body.className='chat-content';
    const name=document.createElement('span');name.className='chat-name';name.textContent=`访客 ${String(index+1).padStart(2,'0')}`;
    const text=document.createElement('span');text.className='chat-text';text.textContent=item.text;
    body.append(name,text);
    if(item.zh){const tr=document.createElement('span');tr.className='translation';tr.textContent='译：'+item.zh;body.append(tr);}
    row.append(avatar,body);row.addEventListener('click',()=>resolve(index,'catch'));
    els.chat.append(row);els.chat.scrollTop=els.chat.scrollHeight;
    return row;
  }
  function makeStreamRow(item,index){
    const row=document.createElement('button');row.type='button';row.className='stream-row';
    row.setAttribute('aria-label',`${item.text}${item.zh?'，'+item.zh:''}。点击抓住`);
    const main=document.createElement('span');main.className='stream-text';main.textContent=item.text;row.append(main);
    if(item.zh){const tr=document.createElement('span');tr.className='stream-translation';tr.textContent='译：'+item.zh;row.append(tr);}
    row.addEventListener('click',()=>resolve(index,'catch'));els.stream.append(row);return row;
  }
  function resolve(index,choice){
    if(!state.playing || state.resolved.has(index))return;
    state.resolved.add(index);
    const item=messages[index], nodes=state.rows[index];
    nodes.chat.remove();nodes.stream.remove();
    state.visible=state.visible.filter(i=>i!==index);
    if(choice==='catch'){
      if(item.troll){state.caught++;state.combo++;state.bestCombo=Math.max(state.bestCombo,state.combo);state.heat=clamp(state.heat+4+Math.min(2,state.combo));toast('抓中！热度上升','good');}
      else{state.falseCatches++;state.combo=0;state.heat=clamp(state.heat-8);toast('误抓了正常弹幕','bad');}
    }else if(item.troll){state.missed++;state.combo=0;state.heat=clamp(state.heat-3);}
    else{state.passed++;state.heat=clamp(state.heat+1);}
    hud();
    if(state.next===messages.length && state.visible.length===0)finish();
  }
  function spawn(){
    if(!state.playing || state.paused || state.next>=messages.length)return;
    const index=state.next++, item=messages[index];
    state.rows[index]={chat:makeChatRow(item,index),stream:makeStreamRow(item,index),bornAt:state.activeMs};
    state.visible.push(index);
    while(state.visible.length>visibleLimit)resolve(state.visible[0],'pass');
    // Once either playable view clips the oldest comment, it is released.
    while(state.visible.length>1){
      const oldest=state.rows[state.visible[0]].chat.getBoundingClientRect();
      const chatTop=els.chat.getBoundingClientRect().top;
      if(els.stream.scrollHeight>els.stream.clientHeight+2 || oldest.bottom<chatTop+2)resolve(state.visible[0],'pass');
      else break;
    }
    hud();
  }
  function start(){
    clearTimers();els.chat.replaceChildren();els.stream.replaceChildren();
    els.start.classList.add('hidden');els.tutorial.classList.add('hidden');els.result.classList.add('hidden');els.share.classList.add('hidden');
    hasStartedOnce=true;
    messages=drawRound();
    state={playing:true,paused:false,seconds:0,activeMs:0,spawnBudget:0,next:0,rows:[],visible:[],resolved:new Set(),heat:30,
      caught:0,falseCatches:0,missed:0,passed:0,combo:0,bestCombo:0};
    streamAudio.currentTime=0;playAudio();
    refreshOrientation();hud();spawn();spawn();
    const speed=fast?{spawnMs:80,lifeMs:950}:difficulties[difficulty];
    repeat(()=>{
      if(!state.playing || state.paused)return;
      state.activeMs+=100;state.seconds=Math.floor(state.activeMs/1000);
      state.spawnBudget+=100;
      while(state.spawnBudget>=speed.spawnMs && state.next<messages.length && state.playing){state.spawnBudget-=speed.spawnMs;spawn();}
      while(state.visible.length && state.activeMs-state.rows[state.visible[0]].bornAt>=speed.lifeMs && state.playing)resolve(state.visible[0],'pass');
      if(state.playing)hud();
    },100);
  }
  function finish(){
    if(!state?.playing)return;
    state.playing=false;clearTimers();streamAudio.pause();
    refreshOrientation();
    const total=messages.filter(m=>m.troll).length;
    const ratio=state.caught/total;
    let grade='C',title='继续观察，下一场会更准';
    if(ratio>=.82 && state.falseCatches<=2){grade='S';title='神级房管，串子无处可藏！';}
    else if(ratio>=.6 && state.falseCatches<=4){grade='A';title='眼力很稳，直播间守住了！';}
    else if(ratio>=.35 && state.falseCatches<=6){grade='B';title='渐入佳境，再练练判断！';}
    $('resultGrade').textContent=grade;$('resultTitle').textContent=title;
    $('resultLine').textContent=`${difficulties[difficulty].label}难度 · 抓中 ${state.caught} 条，漏抓 ${state.missed} 条。中文按本关的严格规则计分。`;
    $('resultHeat').textContent=state.heat;$('resultCaught').textContent=`${state.caught} / ${total}`;
    $('resultFalse').textContent=state.falseCatches;$('resultCombo').textContent=state.bestCombo;
    els.result.classList.remove('hidden');
  }

  function renderTutorial(){
    const step=tutorialSteps[tutorialIndex];
    $('tutorialCount').textContent=`${tutorialIndex+1} / ${tutorialSteps.length}`;
    $('tutorialTitle').textContent=step.title;
    $('tutorialText').textContent=step.text;
    $('tutorialArt').innerHTML=step.art;
    $('tutorialNext').textContent=tutorialIndex===tutorialSteps.length-1?'开始游戏 →':'下一步 →';
  }
  function finishTutorial(){
    try{localStorage.setItem(tutorialKey,'seen');}catch{}
    els.tutorial.classList.add('hidden');
    els.start.classList.remove('hidden');
  }
  function mobilePortrait(){
    const mobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) ||
      matchMedia('(pointer:coarse) and (max-width: 900px)').matches;
    return mobile && window.innerHeight>window.innerWidth;
  }
  function refreshOrientation(){
    const show=!orientationBypass && mobilePortrait() && (!hasStartedOnce || !!state?.playing);
    els.rotate.classList.toggle('hidden',!show);
    if(state?.playing)state.paused=show;
  }
  function currentGameUrl(){
    if(location.hostname.toLowerCase()==='guozijan.github.io')return new URL('./',location.href).href;
    return 'https://guozijan.github.io/zhuazhu-chuanzi/';
  }
  function loadImage(src){
    return new Promise((resolve,reject)=>{
      const img=new Image();
      if(/^https?:/.test(src))img.crossOrigin='anonymous';
      img.onload=()=>resolve(img);img.onerror=()=>reject(new Error('图片加载失败'));
      img.src=src;
    });
  }
  async function qrImage(){
    if(typeof window.qrcode!=='function')throw new Error('二维码生成器不可用');
    const code=window.qrcode(0,'M');code.addData(currentGameUrl());code.make();
    return loadImage(code.createDataURL(6,4));
  }
  function rounded(ctx,x,y,w,h,r){
    ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
  }
  async function makeShareImage(){
    const [shot,qr]=await Promise.all([loadImage('./assets/stream-shot.png'),qrImage(),document.fonts.ready]);
    const canvas=document.createElement('canvas');canvas.width=900;canvas.height=1200;
    const ctx=canvas.getContext('2d');
    ctx.fillStyle='#fff7fa';ctx.fillRect(0,0,900,1200);
    ctx.drawImage(shot,0,0,900,417);
    const fade=ctx.createLinearGradient(0,330,0,510);fade.addColorStop(0,'#fff7fa00');fade.addColorStop(1,'#fff7fa');
    ctx.fillStyle=fade;ctx.fillRect(0,330,900,180);
    ctx.fillStyle='#d64d75';rounded(ctx,56,390,788,100,26);ctx.fill();
    ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='800 46px StreamNoto, sans-serif';ctx.fillText('抓 住 串 子',450,455);
    ctx.textAlign='left';ctx.fillStyle='#482c38';ctx.font='800 48px StreamNoto, sans-serif';ctx.fillText('我在结川结奈直播间',66,570);
    ctx.fillStyle='#a25470';ctx.font='700 34px StreamNoto, sans-serif';ctx.fillText('抓住了',70,646);
    ctx.fillStyle='#c73f6b';ctx.font='900 182px StreamNoto, sans-serif';ctx.fillText(String(state.caught),62,826);
    ctx.font='800 45px StreamNoto, sans-serif';ctx.fillText('个串子',72,895);
    ctx.fillStyle='#fff';rounded(ctx,586,613,260,294,20);ctx.fill();
    ctx.drawImage(qr,601,628,230,230);
    ctx.fillStyle='#a25470';ctx.textAlign='center';ctx.font='700 24px StreamNoto, sans-serif';ctx.fillText('扫码进入游戏',716,892);
    ctx.fillStyle='#762f4d';ctx.font='800 43px StreamNoto, sans-serif';ctx.fillText('你也来试试吧！',450,982);
    ctx.strokeStyle='#e8a9bd';ctx.lineWidth=2;ctx.setLineDash([10,9]);ctx.beginPath();ctx.moveTo(60,1030);ctx.lineTo(840,1030);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='#765160';ctx.font='700 25px StreamNoto, sans-serif';ctx.fillText('制作：@-会飞的蝈蝈-',450,1090);
    ctx.fillStyle='#a0818c';ctx.font='600 21px StreamNoto, sans-serif';ctx.fillText('抓住串子 · 直播间观察游戏',450,1133);
    return canvas.toDataURL('image/png');
  }
  async function openShareImage(){
    els.share.classList.remove('hidden');$('shareStatus').textContent='正在生成图片和游戏二维码…';
    $('sharePictureButton').disabled=true;$('savePictureButton').disabled=true;
    $('sharePreview').removeAttribute('src');
    try{
      shareDataUrl=await makeShareImage();
      $('sharePreview').src=shareDataUrl;
      $('shareStatus').textContent='二维码指向 GitHub Pages 游戏页，可保存或分享。';
      $('sharePictureButton').disabled=false;$('savePictureButton').disabled=false;
    }catch(error){$('shareStatus').textContent='图片生成失败，请重试：'+error.message;}
  }
  function downloadShareImage(){
    const link=document.createElement('a');link.href=shareDataUrl;link.download=`抓住串子-抓中${state.caught}条.png`;
    document.body.append(link);link.click();link.remove();
  }
  function saveShareImage(){
    if(!shareDataUrl)return;
    downloadShareImage();toast('图片已下载','good');
  }
  async function shareImage(){
    if(!shareDataUrl)return;
    try{
      const blob=await(await fetch(shareDataUrl)).blob();
      const file=new File([blob],'抓住串子-战绩.png',{type:'image/png'});
      if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:'抓住串子'});return;}
    }catch(error){if(error.name==='AbortError')return;}
    downloadShareImage();toast('图片已下载，可从相册分享','good');
  }
  document.querySelectorAll('[data-difficulty]').forEach(button=>button.addEventListener('click',()=>{
    difficulty=button.dataset.difficulty;
    document.querySelectorAll('[data-difficulty]').forEach(option=>{
      const selected=option===button;option.classList.toggle('selected',selected);option.setAttribute('aria-pressed',String(selected));
    });
    $('roundIntro').textContent=`本局随机抽取 ${difficulties[difficulty].size} 条弹幕，全部滚动完才结算。抓中越多，直播间热度越高。`;
  }));
  $('startButton').addEventListener('click',start);
  $('audioToggle').addEventListener('click',()=>{
    audioEnabled=!audioEnabled;updateAudioButton();
    if(audioEnabled && state?.playing)playAudio();
    else streamAudio.pause();
  });
  $('restartButton').addEventListener('click',()=>{els.result.classList.add('hidden');els.start.classList.remove('hidden');});
  $('tutorialSkip').addEventListener('click',finishTutorial);
  $('tutorialNext').addEventListener('click',()=>{if(tutorialIndex===tutorialSteps.length-1)finishTutorial();else{tutorialIndex++;renderTutorial();}});
  $('requestLandscapeButton').addEventListener('click',async()=>{
    let enteredFullscreen=false;
    try{
      if(!screen.orientation?.lock)throw new Error('当前浏览器不支持方向锁定');
      if(!document.fullscreenElement && document.documentElement.requestFullscreen){
        await document.documentElement.requestFullscreen();enteredFullscreen=true;
      }
      await screen.orientation.lock('landscape');
      $('rotateStatus').textContent='请旋转手机，或关闭系统的方向锁。';
    }catch{
      if(enteredFullscreen)await document.exitFullscreen().catch(()=>{});
      $('rotateStatus').textContent='请关闭方向锁并手动旋转手机。';
    }
    refreshOrientation();
  });
  $('continuePortraitButton').addEventListener('click',()=>{orientationBypass=true;refreshOrientation();});
  window.addEventListener('resize',refreshOrientation);
  window.addEventListener('orientationchange',refreshOrientation);
  $('makeShareButton').addEventListener('click',openShareImage);
  $('closeShareButton').addEventListener('click',()=>els.share.classList.add('hidden'));
  $('sharePictureButton').addEventListener('click',shareImage);
  $('savePictureButton').addEventListener('click',saveShareImage);
  $('subscribeButton').addEventListener('click',e=>{e.currentTarget.classList.toggle('active');e.currentTarget.textContent=e.currentTarget.classList.contains('active')?'已订阅':'订阅';});
  $('likeButton').addEventListener('click',e=>{e.currentTarget.classList.toggle('active');e.currentTarget.firstChild.textContent=e.currentTarget.classList.contains('active')?'♥ ':'♡ ';});
  $('shareButton').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('链接已复制','good');}catch{toast('请从地址栏复制链接','bad');}});
  $('copyButton').addEventListener('click',async()=>{const total=messages.filter(m=>m.troll).length;const line=`抓住串子｜评级 ${$('resultGrade').textContent}｜抓中 ${state.caught}/${total}｜热度 ${state.heat}`;try{await navigator.clipboard.writeText(line);toast('战绩已复制','good');}catch{toast(line,'good');}});
  state={playing:false,seconds:0,next:0,resolved:new Set(),heat:30,caught:0,falseCatches:0,missed:0,combo:0};hud();
  if(new URLSearchParams(location.search).has('autostart'))start();
  else{
    let seen=false;try{seen=localStorage.getItem(tutorialKey)==='seen';}catch{}
    if(seen)els.start.classList.remove('hidden');
    else{tutorialIndex=0;renderTutorial();els.tutorial.classList.remove('hidden');}
  }
  refreshOrientation();
})();
