// Task / conversation screen for the Youyou Codex kit.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const { Card, Chip, Badge, Icon, IconButton, Divider } = DS;

  const PanelCap = ({children, action}) => (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
      <span style={{fontSize:13,fontWeight:700,color:'var(--ink-700)',display:'inline-flex',alignItems:'center',gap:6}}>{children}</span>
      {action}
    </div>
  );

  function Message({ m }) {
    if (m.from === 'user') {
      return (
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <div style={{maxWidth:'76%',background:'var(--sage-100)',color:'var(--ink-800)',border:'1px solid var(--sage-200)',
            borderRadius:'18px 18px 6px 18px',padding:'11px 15px',fontSize:15,lineHeight:1.55,boxShadow:'var(--shadow-xs)'}}>{m.text}</div>
        </div>
      );
    }
    return (
      <div style={{display:'flex',gap:11,maxWidth:'82%'}}>
        <span style={{flex:'none',width:26,height:26,borderRadius:'50%',background:'var(--sage-200)',
          display:'flex',alignItems:'center',justifyContent:'center',marginTop:2}}>
          <Icon name="sparkle" size={14} fill color="var(--sage-600)"/></span>
        <div style={{fontSize:15,lineHeight:1.65,color:'var(--ink-700)'}}>{m.text}</div>
      </div>
    );
  }

  function Task({ data, title, messages, composerValue, onComposerChange, onSend }) {
    return (
      <div style={{display:'flex',flexDirection:'column',height:'100%',minHeight:0}}>
        {/* header */}
        <div style={{flex:'none',display:'flex',alignItems:'center',justifyContent:'space-between',
          padding:'14px 26px',borderBottom:'1px solid var(--border-hair)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <Icon name="folder-open" size={18} color="var(--sage-600)"/>
            <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,color:'var(--ink-800)'}}>{title}</span>
            <IconButton icon="more" label="更多" variant="ghost" size="sm"/>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <Chip variant="outline" size="sm" leftIcon="globe">打开位置</Chip>
            <IconButton icon="clipboard-check" label="任务" variant="ghost" size="sm"/>
          </div>
        </div>

        {/* body */}
        <div style={{flex:1,display:'flex',minHeight:0}}>
          {/* transcript + composer */}
          <div style={{flex:1,display:'flex',flexDirection:'column',minWidth:0}}>
            <div style={{flex:1,overflowY:'auto',padding:'24px 30px'}}>
              <div style={{maxWidth:720,margin:'0 auto',display:'flex',flexDirection:'column',gap:20}}>
                {messages.map((m,i)=><Message key={i} m={m}/>)}
                <div style={{fontSize:12,color:'var(--ink-400)',fontFamily:'var(--font-mono)'}}>已处理 1m 14s</div>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {data.toolRuns.map((t,i)=>(
                    <div key={i} style={{display:'flex',alignItems:'center',gap:9,fontSize:13,color:'var(--ink-500)'}}>
                      <Icon name={t.icon} size={15} color="var(--ink-400)"/>{t.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{padding:'10px 30px 22px'}}>
              <div style={{maxWidth:720,margin:'0 auto'}}>
                <window.YY.Composer value={composerValue} onChange={onComposerChange} onSend={onSend}
                  placeholder="要求后续变更…" model={data.model} projectLabel="奶油宣纸小站" compact/>
              </div>
            </div>
          </div>

          {/* right panel */}
          <aside style={{width:'var(--rightpanel-w)',flex:'none',borderLeft:'1px solid var(--border-hair)',
            background:'var(--surface-raised)',padding:'20px 18px',overflowY:'auto'}}>
            <PanelCap action={<Icon name="chevron-right" size={15} color="var(--ink-400)"/>}>环境信息</PanelCap>
            <Divider variant="dashed"/>
            <div style={{margin:'14px 0'}}>
              <PanelCap>子智能体</PanelCap>
              <div style={{display:'inline-flex',alignItems:'center',gap:7,fontSize:13,color:'var(--ink-600)'}}>
                <span style={{width:9,height:9,borderRadius:'50%',background:'var(--sage-500)'}}></span>{data.env.status}
              </div>
            </div>
            <Divider variant="dashed"/>
            <div style={{marginTop:14}}>
              <PanelCap action={<IconButton icon="plus" label="添加来源" variant="ghost" size="sm"/>}>来源</PanelCap>
              <div style={{display:'flex',flexDirection:'column',gap:7}}>
                {data.sources.map(s=>(
                  <div key={s.id} style={{display:'flex',alignItems:'center',gap:9,padding:'8px 10px',
                    background:'var(--surface-card-hi)',border:'1px solid var(--border-hair)',borderRadius:'var(--radius-md)',
                    fontSize:12.5,color:'var(--ink-600)',fontFamily:'var(--font-mono)'}}>
                    <Icon name="file" size={14} color="var(--sage-600)"/>
                    <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{s.label}</span>
                  </div>
                ))}
                <a href="#" style={{fontSize:12.5,color:'var(--link)',display:'inline-flex',alignItems:'center',gap:5,marginTop:2,fontWeight:600}}>
                  <Icon name="git-pull-request" size={13}/>查看全部
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
  window.YY.Task = Task;
})();
