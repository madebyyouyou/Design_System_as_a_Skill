// Home / greeting screen for the Youyou Codex kit.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const { Logo, Card, ActionCard, Chip, Icon, Decoration } = DS;
  const ASSET = window.__YOUYOU_ASSET_BASE__ || '../../assets';

  function Home({ data, composerValue, onComposerChange, onSend, onAction }) {
    return (
      <div style={{display:'flex',flexDirection:'column',height:'100%',minHeight:0}}>
        <div style={{flex:1,overflowY:'auto',padding:'22px 34px 8px'}}>
          <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>

            {/* header strip */}
            <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:20}}>
              <img src={`${ASSET}/seal-you.png`} height="46" alt="祐"/>
              <div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:19,color:'var(--ink-800)',lineHeight:1.1}}>奶油宣纸 · 专属定制皮肤</div>
                <div className="eyebrow" style={{marginTop:3}}>CODEX · CREAM PAPER EDITION</div>
              </div>
              <div style={{flex:1,borderTop:'1.5px dashed var(--border-dash)',margin:'0 6px'}}></div>
              <Decoration name="stars" size={38}/>
              <div style={{background:'var(--gold-200)',border:'1px dashed var(--gold-400)',borderRadius:'var(--radius-pill)',
                padding:'6px 16px',fontFamily:'var(--font-hand)',fontWeight:600,fontSize:20,color:'var(--gold-600)',
                transform:'rotate(-2deg)'}}>Youyou</div>
            </div>

            {/* hero */}
            <Card elevation="raised" padding="none" style={{overflow:'hidden',marginBottom:18}}>
              <div style={{display:'flex',alignItems:'stretch'}}>
                <div style={{flex:1.3,padding:'34px 36px'}}>
                  <div className="hand" style={{fontSize:22,color:'var(--rose-500)',marginBottom:8}}>今天也要加油鸭~ ♡</div>
                  <h1 style={{fontSize:44,lineHeight:1.08,color:'var(--ink-900)',marginBottom:14}}>我们该构建什么？</h1>
                  <p style={{fontSize:16,color:'var(--ink-500)',maxWidth:420,lineHeight:1.6}}>
                    在宣纸上，和祐祐一起把想法慢慢写成代码。选一个方向，或者直接在下面告诉我。
                  </p>
                  <div style={{display:'flex',gap:8,marginTop:18}}>
                    <Chip variant="soft" leftIcon="sparkle">灵感随手记</Chip>
                    <Chip variant="outline" leftIcon="folder">从项目开始</Chip>
                  </div>
                </div>
                <div style={{flex:1,position:'relative',background:'linear-gradient(135deg,var(--sage-100),var(--cream-200))',
                  display:'flex',alignItems:'center',justifyContent:'center',minWidth:280}}>
                  <div style={{position:'absolute',inset:0,backgroundImage:'var(--paper-grain)',opacity:.08,mixBlendMode:'soft-light'}}></div>
                  <div style={{position:'relative',width:180,height:180,borderRadius:'50%',
                    background:'radial-gradient(circle at 40% 35%,var(--cream-50),var(--sage-200))',
                    display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow-md)'}}>
                    <img src={`${ASSET}/seal-you.png`} height="132" alt="祐 seal"/>
                  </div>
                  <Decoration name="sparkles" size={44} style={{position:'absolute',top:26,left:30}}/>
                  <Decoration name="heart" size={30} style={{position:'absolute',bottom:30,right:40}}/>
                  <Decoration name="paperclip" size={34} rotate={20} style={{position:'absolute',top:34,right:28}}/>
                </div>
              </div>
            </Card>

            {/* action cards */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginBottom:8}}>
              {data.actions.map(a=>(
                <ActionCard key={a.id} icon={a.icon} title={a.title} accent={a.accent}
                  onClick={()=>onAction(a.intent)}/>
              ))}
            </div>
          </div>
        </div>

        {/* composer */}
        <div style={{padding:'8px 34px 22px'}}>
          <div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>
            <window.YY.Composer value={composerValue} onChange={onComposerChange} onSend={onSend}
              placeholder="随心输入，让祐祐陪你一起写代码吧~" model={data.model} projectLabel="奶油宣纸小站"/>
          </div>
        </div>
      </div>
    );
  }
  window.YY.Home = Home;
})();
